import {getSmokerVersion} from "../utils/Version";
import {Gender} from "../modules/dashboard/model/Gender";
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
            gender: Gender.MALE
        },
        smoking: {
            stopSmokingDate: new Date(2018, 11, 11),
            cigarettesPerDay: 7,
            cigarettesPerPack: 21,
            cigaretteBrand: "L&M",
            pricePerPack: 6
        }
    }
};