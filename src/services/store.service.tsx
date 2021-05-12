import { UtilService } from "./util.service";

const STORAGE_KEY = "DevkitGuideline";

const localStorageAPI = {
    update: (data: any) => {
        if (localStorage) {
            const localStorageData = data ? UtilService.clone(data) : {};
            localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageData));
            return true;
        }
        return false;
    },
    get: () => {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            return JSON.parse(data);
        } else {
            return false;
        }
    },
};

let cachedData = {};

export const StoreService = {
    initialize: () => {
        // Update data from local storage if existing.
        const storage = localStorageAPI.get();
        if (storage) {
            cachedData = storage;
        } else {
            cachedData = StoreService.getEmptyData();
        }
        localStorageAPI.update(cachedData);
    },
    getEmptyData: () => {
        return {
            failedLoginAttempts: 0,
            loginSuccess: false,
            user: {},
            token: "",
            chatProfiles: {}
        };
    },
    getStoreData: () => {
        return UtilService.clone(cachedData);
    },
    updateStoreData: (data: any) => {
        UtilService.loopThroughItems(data, (value: any, key: any) => {
            cachedData[key] = value;
        });

        localStorageAPI.update(cachedData);

        const clonedData = StoreService.getStoreData();

        UtilService.loopThroughItems(StoreService.hooks, (hookCallback: any) => {
            hookCallback(clonedData);
        });
    },
    updateStoreProperty: (property: any, value: any, omitLocalStorage = false) => {
        if (!property) return null;
        cachedData[property] = value;

        if (!omitLocalStorage) localStorageAPI.update(cachedData);

        const clonedData = StoreService.getStoreData();

        UtilService.loopThroughItems(StoreService.hooks, (hookCallback: any) => {
            hookCallback(clonedData);
        });
    },
    hooks: {},
    getStoreProperty: (property: string) => {
        const currentStore = UtilService.clone(cachedData);

        if (!property) return null;

        return currentStore[property];
    },
    hookOnStoreUpdate: (hookName: string, hookCallback: any) => {
        StoreService.hooks[hookName] = hookCallback;
    },
    clearStoreData: () => {
        const emptyData = StoreService.getEmptyData();
        cachedData = emptyData;
        localStorageAPI.update(cachedData);
    },
};
