import ENG from '../translations/en.json';
import MNE from '../translations/me.json';

export let LANGUAGE = 'eng';
export let LANGUAGE_JSON:any = ENG;

export function Translate(key:any) {
    return LANGUAGE_JSON[key] ? LANGUAGE_JSON[key] : key;
}

export function setLanguage(language:string) {
    LANGUAGE = language;

    switch (language) {
        case 'eng':
            LANGUAGE_JSON = ENG;
            break;
        case 'mne':
            LANGUAGE_JSON = MNE;
            break;
    }
}

export default Translate;
