import {calculateCigarettes, calculatePacks, calculateSavedMoney} from "../utils/Savings";

export const initialState = {
    about: {
        appName: 'Smoker',
        version: '1.0.0',
        build: 'n/a',
        developer: 'tmbzld',
        website: 'github.com/talbx/smoker'
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
    },
    /*savings:
        {
            money: calculateSavedMoney(calculatePacks(calculateCigarettes(this.smoking.stopSmokingDate, this.smoking.cigarettesPerDay), this.smoking.cigarettesPerPack), this.smoking.pricePerPack),
            cigarettes: calculateCigarettes(this.smoking.stopSmokingDate, smoking.cigarettesPerDay),
            packs: calculatePacks(calculateCigarettes(this.smoking.stopSmokingDate, this.smoking.cigarettesPerDay), this.smoking.cigarettesPerPack)
        }*/
};