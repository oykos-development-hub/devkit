import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/messaging";
import "firebase/firestore";
import "firebase/performance";
import "firebase/analytics";
import { ConstantsService } from "./constants.service";

export const FirebaseService = {
    initialize: (
        config:object,
        chatPassword: string,
        getCurrentUser:any,
        updateCurrentUser:any,
        updateChatProfiles: any,
        userObjectStructure: any,
        imagesUrlPrefix?:string,
        handleError?: any
    ) => {
        FirebaseService.util.getCurrentUser = getCurrentUser;
        FirebaseService.util.updateCurrentUser = updateCurrentUser;
        FirebaseService.util.updateChatProfiles = updateChatProfiles;
        FirebaseService.util.handleError = handleError;
        FirebaseService.util.chatPassword = chatPassword;
        FirebaseService.util.imagesUrlPrefix = imagesUrlPrefix ? imagesUrlPrefix : '';
        FirebaseService.util.userObjectStructure = userObjectStructure;

        firebase.initializeApp(config);
        firebase.analytics();
    },
    authUser: (handleDeleteMessage:any, handleDisplayMessage:any) => {
        FirebaseService.util.handleDeleteMessage = handleDeleteMessage;
        FirebaseService.util.handleDisplayMessage = handleDisplayMessage;

        let cachedUser:any = FirebaseService.util.getCurrentUser();

        return firebase
            .auth()
            .signInWithEmailAndPassword(cachedUser.email, FirebaseService.util.chatPassword)
            .then((userCredential) => {
                const user:any = userCredential && userCredential.user ? userCredential.user : {};

                cachedUser.uid = user.uid;

                FirebaseService.util.updateCurrentUser(cachedUser);
                // @TODO Ovdje treba uzeti UID korisnika i sacuvati ga u bazi ako vec ne postoji
                // Uraditi provjeru da li u cached data u user objektu postoji property `firestoreId`
                // Ako ne postoji poslati na API da se azurira, jer ce taj ID kasnije trebati za chat
                FirebaseService.getFcmToken();
                // Provjeriti da li za ovog Usera imamo kreiran chat profile unos u Firestore
                // Ako nemamo kreiracemo ga, i u oba slucaja imamo event listener za nove poruke u chatu
                return FirebaseService.checkUserChatProfile(user);
            })
            .catch(() => {
                return firebase
                    .auth()
                    .createUserWithEmailAndPassword(
                        cachedUser.email,
                        FirebaseService.util.chatPassword
                    )
                    .then((userCredential) => {
                        const user:any = userCredential && userCredential.user ? userCredential.user : {};

                        cachedUser.uid = user.uid;

                        FirebaseService.util.updateCurrentUser(cachedUser);
                        // @TODO Ovdje treba uzeti UID korisnika i sacuvati ga u bazi ako vec ne postoji
                        // Uraditi provjeru da li u cached data u user objektu postoji property `firestoreId`
                        // Ako ne postoji poslati na API da se azurira, jer ce taj ID kasnije trebati za chat
                        FirebaseService.getFcmToken();
                        // Provjeriti da li za ovog Usera imamo kreiran chat profile unos u Firestore
                        // Ako nemamo kreiracemo ga, i u oba slucaja imamo event listener za nove poruke u chatu
                        return FirebaseService.checkUserChatProfile(user);
                    })
                    .catch((error) => {
                        console.error(
                            "Error signing and/or creating chat profile for User",
                            error
                        );
                        FirebaseService.util.handleError(error);
                    });
            });
    },
    checkUserChatProfile: (user: any) => {
        const query = firebase
            .firestore()
            .collection(ConstantsService.FIREBASE.CHAT_PROFILES)
            .where("uid", "==", user.uid);
        let foundChatProfile = false;

        return query.get().then((querySnapshot) => {
            let returnPromise:any = null;

            querySnapshot.forEach(() => {
                foundChatProfile = true;

                returnPromise = FirebaseService.getChatProfiles().then(() => {
                    return FirebaseService.getUserMessages();
                });
            });

            if (foundChatProfile) {
                return returnPromise;
            } else {
                // User profile used for Chat is not found. We need to create it.
                const cachedUser = FirebaseService.util.getCurrentUser();

                return firebase
                    .firestore()
                    .collection(ConstantsService.FIREBASE.CHAT_PROFILES)
                    .doc(user.uid)
                    .set({
                        name: cachedUser[FirebaseService.util.userObjectStructure.firstName] +
                            " " + cachedUser[FirebaseService.util.userObjectStructure.lastName],
                        profilePicUrl: FirebaseService.util.imagesUrlPrefix ? FirebaseService.util.imagesUrlPrefix +
                            cachedUser[FirebaseService.util.userObjectStructure.profilePicUrl] :
                            cachedUser[FirebaseService.util.userObjectStructure.profilePicUrl],
                        email: cachedUser[FirebaseService.util.userObjectStructure.email],
                        phone: cachedUser[FirebaseService.util.userObjectStructure.phone],
                        created: firebase.firestore.FieldValue.serverTimestamp(),
                        uid: user.uid,
                        userId: cachedUser[FirebaseService.util.userObjectStructure.userId],
                        role: cachedUser[FirebaseService.util.userObjectStructure.role],
                        online: true,
                    })
                    .then(() => {
                        console.log(
                            "Successfully created chat profile for User"
                        );

                        return FirebaseService.getChatProfiles().then(() => {
                            return FirebaseService.getUserMessages();
                        });
                    })
                    .catch((error) => {
                        console.error(
                            "Error creating new chat profile for User",
                            error
                        );
                        FirebaseService.util.handleError(error);
                    });
            }
        });
    },
    getFcmToken: () => {
        firebase
            .messaging()
            .getToken()
            .then(function (currentToken) {
                if (currentToken) {
                    const firebaseUser = firebase.auth().currentUser;

                    console.log("Got FCM device token:", currentToken);
                    // Saving the Device Token to the datastore.
                    // @TODO ovaj fcm token takodje treba da cuvamo u nasoj bazi za korisnika svaki put kad se uloguje na neki uredjaj
                    if (firebaseUser) {
                        firebase
                            .firestore()
                            .collection(ConstantsService.FIREBASE.FCM_TOKENS)
                            .doc(currentToken)
                            .set({ uid: firebaseUser.uid });
                    }
                } else {
                    firebase
                        .messaging()
                        .requestPermission()
                        .then(function () {
                            const firebaseUser = firebase.auth().currentUser;
                            // Notification permission granted.
                            // Saving the Device Token to the datastore.
                            // @TODO ovaj fcm token takodje treba da cuvamo u nasoj bazi za korisnika svaki put kad se uloguje na neki uredjaj
                            if (firebaseUser) {
                                firebase
                                    .firestore()
                                    .collection(
                                        ConstantsService.FIREBASE.FCM_TOKENS
                                    )
                                    .doc(currentToken)
                                    .set({uid: firebaseUser.uid});
                            }
                        })
                        .catch(function (error) {
                            console.error(
                                "Unable to get permission to notify.",
                                error
                            );
                        });
                }
            })
            .catch(function (error) {
                console.error("Unable to get messaging token.", error);
            });
    },
    getUserMessages: (limit = 10) => {
        const userData:any = FirebaseService.util.getCurrentUser();

        const conversations = firebase
            .firestore()
            .collection(ConstantsService.FIREBASE.MESSAGES)
            .where("users", "array-contains", String(userData.uid))
            .orderBy("timestamp", "desc")
            .limit(limit);

        // Listen for new conversations that include this chat profile
        conversations.onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
                const doc = change.doc;

                if (change.type === "removed") {
                    FirebaseService.util.handleDeleteMessage(doc.id);
                } else {
                    const conversation = doc.data();
                    const currentDate = new Date();

                    FirebaseService.util.handleDisplayMessage(doc.id, {
                        timestamp: conversation.timestamp
                            ? conversation.timestamp
                            : {
                                seconds: currentDate.valueOf() / 1000,
                            },
                        users: conversation.users,
                        conversationId: doc.id,
                    });
                }
            });
        });

        return conversations.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const conversation = doc.data();
                const currentDate = new Date();

                FirebaseService.util.handleDisplayMessage(doc.id, {
                    timestamp: conversation.timestamp
                        ? conversation.timestamp
                        : {
                            seconds: currentDate.valueOf() / 1000,
                        },
                    users: conversation.users,
                    conversationId: doc.id,
                });
            });
        });
    },
    getMessagesForConversation: (conversation: any, limit = 50) => {
        const conversationId = conversation.conversationId;
        const messages = firebase
            .firestore()
            .collection(ConstantsService.FIREBASE.MESSAGES)
            .doc(conversationId)
            .collection("messages-" + conversationId)
            .orderBy("timestamp", "desc")
            .limit(limit);

        // Listen for new messages in this conversation
        messages.onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
                const message = change.doc.data();

                conversation["messages"] = conversation["messages"] ? conversation["messages"] : {};

                conversation["messages"][message.messageId] = message;

                FirebaseService.util.handleDisplayMessage(conversation.conversationId, conversation);
            });
        });

        return messages.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const message = doc.data();

                conversation["messages"] = conversation["messages"] ? conversation["messages"] : {};

                conversation["messages"][message.messageId] = message;

                FirebaseService.util.handleDisplayMessage(conversation.conversationId, conversation);
            });
        });
    },
    getChatProfiles: (limit = 0) => {
        const query = firebase
            .firestore()
            .collection(ConstantsService.FIREBASE.CHAT_PROFILES)
            .orderBy("name", "asc");

        if (limit) {
            query.limit(limit);
        }

        query.onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
                FirebaseService.util.updateChatProfiles(change, true);
            });
        });

        return query.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                FirebaseService.util.updateChatProfiles(doc);
            });
        });
    },
    sendMessage: (
        text = "",
        chatProfileIds:any = [],
        existingConversationId = "",
        username = "",
        photoUrl = ""
    ) => {
        const userData:any = FirebaseService.util.getCurrentUser();
        const timestamp = new Date();
        const messageId = String(timestamp.valueOf());
        const senderUid = userData.uid;

        username = username ? username : userData[FirebaseService.util.userObjectStructure.firstName] +
            " " + userData[FirebaseService.util.userObjectStructure.lastName];
        photoUrl = photoUrl ? photoUrl :
            FirebaseService.util.imagesUrlPrefix ? FirebaseService.util.imagesUrlPrefix +
                userData[FirebaseService.util.userObjectStructure.profilePicUrl] :
                userData[FirebaseService.util.userObjectStructure.profilePicUrl];
        chatProfileIds = Object.values(chatProfileIds);

        if (!existingConversationId) {
            chatProfileIds.push(String(userData.uid));
            chatProfileIds.sort();
        }

        const docId = existingConversationId ? existingConversationId : chatProfileIds.join("-");

        return firebase
            .firestore()
            .collection(ConstantsService.FIREBASE.MESSAGES)
            .doc(docId)
            .set({
                docId: docId,
                users: chatProfileIds,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
                return firebase
                    .firestore()
                    .collection(ConstantsService.FIREBASE.MESSAGES)
                    .doc(docId)
                    .collection("messages-" + docId)
                    .doc(messageId)
                    .set({
                        name: username,
                        text: text,
                        senderUid,
                        messageId,
                        profilePicUrl: photoUrl,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    })
                    .then(() => {
                        return docId;
                    })
                    .catch(function (error) {
                        console.error(
                            "Error writing new message to database",
                            error
                        );
                        FirebaseService.util.handleError(error);
                    });
            })
            .catch(function (error) {
                console.error("Error writing new message to database", error);
                FirebaseService.util.handleError(error);
            });
    },
    sendFileMessage: (
        file:any,
        text = "",
        chatProfileIds:any = [],
        existingConversationId = "",
        username = "",
        photoUrl = ""
    ) => {
        const userData:any = FirebaseService.util.getCurrentUser();
        const timestamp = new Date();
        const messageId = String(timestamp.valueOf());
        const senderUid = userData.uid;

        username = username ? username : userData[FirebaseService.util.userObjectStructure.firstName] +
            " " + userData[FirebaseService.util.userObjectStructure.lastName];
        photoUrl = photoUrl ? photoUrl :
            FirebaseService.util.imagesUrlPrefix ? FirebaseService.util.imagesUrlPrefix +
                userData[FirebaseService.util.userObjectStructure.profilePicUrl] :
                userData[FirebaseService.util.userObjectStructure.profilePicUrl];
        chatProfileIds = Object.values(chatProfileIds);

        if (!existingConversationId) {
            chatProfileIds.push(String(userData.uid));
            chatProfileIds.sort();
        } else {
            chatProfileIds = existingConversationId.split("-");
        }

        const docId = existingConversationId ? existingConversationId : chatProfileIds.join("-");

        return firebase
            .firestore()
            .collection(ConstantsService.FIREBASE.MESSAGES)
            .doc(docId)
            .set({
                docId: docId,
                users: chatProfileIds,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
                firebase
                    .firestore()
                    .collection(ConstantsService.FIREBASE.MESSAGES)
                    .doc(docId)
                    .collection("messages-" + docId)
                    .doc(messageId)
                    .set({
                        name: username,
                        text: text,
                        profilePicUrl: photoUrl,
                        senderUid,
                        messageId,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    })
                    .then(function () {
                        // Upload the image to Cloud Storage.
                        const filePath = userData.uid + "/" + messageId + "/" + file.name;

                        return firebase
                            .storage()
                            .ref(filePath)
                            .put(file)
                            .then(function (fileSnapshot) {
                                // Generate a public URL for the file.
                                return fileSnapshot.ref
                                    .getDownloadURL()
                                    .then((url) => {
                                        // Update the chat message placeholder with the image's URL.
                                        return firebase
                                            .firestore()
                                            .collection(
                                                ConstantsService.FIREBASE
                                                    .MESSAGES
                                            )
                                            .doc(docId)
                                            .collection("messages-" + docId)
                                            .doc(messageId)
                                            .update({
                                                imageUrl: url,
                                                storageUri:
                                                    fileSnapshot.metadata
                                                        .fullPath,
                                            })
                                            .then(() => {
                                                return docId;
                                            });
                                    });
                            });
                    })
                    .catch(function (error) {
                        console.error(
                            "There was an error uploading a file to Cloud Storage:",
                            error
                        );
                        FirebaseService.util.handleError(error);
                    });
            });
    },
    util: {
        getCurrentUser: () => {},
        updateCurrentUser: (user:object) => {
            console.log('Firebase Service > method updateCurrentUser > you didn\'t pass a function', user);
        },
        updateChatProfiles: (data:any, isChange?:any) => {
            console.log('Firebase Service > method updateChatProfiles > you didn\'t pass a function', data + isChange);
        },
        handleError: (data:any) => {
            console.log('Firebase Service > method handleError > you didn\'t pass a function', data);
        },
        handleDeleteMessage: (conversationId:any) => {
            console.log('Firebase Service > method handleDeleteMessage > you didn\'t pass a function', conversationId);
        },
        handleDisplayMessage: (conversationId:any, data:any) => {
            console.log('Firebase Service > method handleDisplayMessage > you didn\'t pass a function', conversationId + data);
        },
        chatPassword: '',
        imagesUrlPrefix: '',
        userObjectStructure: {
            firstName: 'first_name',
            lastName: 'last_name',
            profilePicUrl: 'profile_image',
            email: 'email',
            phone: 'phone',
            userId: 'id',
            role: 'role'
        }
    }
};
