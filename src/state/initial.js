import {getSmokerVersion} from "../utils/Version";

export const initialState = {
    about: {
        appName: 'Smoker',
        version: getSmokerVersion(),
        build: 'n/a',
        developer: 'tom',
        website: 'google.com'
    },

    settings: {
        profile: {
            username: 'Tom',
        },
        smoking: {
            stopSmokingDate: new Date(2018, 11, 14),
            cigarettesPerDay: 7,
            cigarettesPerPack: 21,
            cigaretteBrand: "Gauloises",
            pricePerPack: "6"
        }
    }
};