import { FeMicroServicesTypes } from "./fe-micro-services";
import { EnvironmentTypes } from "./environment";
export type ConstantsFeMicroServicesTypes = {
    [key in FeMicroServicesTypes]: {
        slug: FeMicroServicesTypes;
        url: {
            [key in EnvironmentTypes]: string;
        };
    };
};
