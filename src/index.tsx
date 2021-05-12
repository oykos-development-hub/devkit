import * as React from "react";
import {Loader} from "./components/Loader/Loader";
import {FirebaseService} from "./services/firebase.service";

export const Devkit:any = {
    LoaderComponent: Loader,
    FirebaseService: FirebaseService
};
