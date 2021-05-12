export const UtilService = {
    handleAddFile: (name: string, e: any, drop?: any) => {
        if (drop) {
            e.preventDefault();
            if (e.dataTransfer.files.length > 1) {
                alert("only one file allowed");
            } else {
                return { value: e.dataTransfer.files[0], errors: [] };
            }
        } else {
            return { value: e.value[0], errors: [] };
        }
    },
    loopThroughItems: (items: any, callback: any) => {
        for (const itemKey in items) {
            callback(items[itemKey], itemKey);
        }
    },
    clone: (obj: any) => {
        if (obj === null || typeof obj !== "object") {
            return obj;
        }
        if (obj instanceof Date) {
            return new Date(obj.getTime());
        }
        if (Array.isArray(obj)) {
            const clonedArr:any = [];

            obj.forEach(function (element) {
                // @ts-ignore
                clonedArr.push(UtilService.clone(element));
            });

            return clonedArr;
        }
        const clonedObj = new obj.constructor();

        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                clonedObj[prop] = UtilService.clone(obj[prop]);
            }
        }

        return clonedObj;
    },
    validateEmail: (email:any) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
};
