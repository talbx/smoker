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
            username: 'Hansi',
        },
        smoking: {
            stopSmokingDate: new Date(2018, 11, 14),
            cigarettesPerDay: 20,
            cigarettesPerPack: 21,
            cigaretteBrand: "Gauloises",
            pricePerPack: "2.50"
        }
    }
};