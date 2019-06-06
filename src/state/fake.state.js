import {getSmokerVersion} from "../utils/Version";
import {Gender} from "../modules/dashboard/model/Gender";
export const fakeState = {
    about: {
        appName: 'Smoker',
        version: getSmokerVersion(),
        build: 'n/a',
        developer: 'james',
        website: 'bing.com'
    },

    settings: {
        profile: {
            username: 'cristiana',
            gender: Gender.FEMALE,
            level: 1
        },
        smoking: {
            stopSmokingDate: new Date(2015, 11, 11),
            cigarettesPerDay: 1,
            cigarettesPerPack: 1,
            cigaretteBrand: "L&M",
            pricePerPack: 1
        }
    }
};