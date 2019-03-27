import {
    CHANGE_CIGARETTE_BRAND,
    CHANGE_CIGARETTES_PER_DAY,
    CHANGE_CIGARETTES_PER_PACK,
    CHANGE_PRICE_PER_PACK,
    CHANGE_STOP_SMOKING_DATE,
    CHANGE_USERNAME
} from "./actions";
import {initialState} from "./initial";

export const smokerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USERNAME:
            return {
                ...state, settings: {
                    username: action.payload,
                    stopSmokingDate: state.settings.smoking.stopSmokingDate,
                    cigarettesPerDay: state.settings.smoking.cigarettesPerDay,
                    cigarettesPerPack: state.settings.smoking.cigarettesPerPack,
                    cigaretteBrand: state.settings.smoking.cigaretteBrand,
                    pricePerPack: state.settings.smoking.pricePerPack
                }
            };
        case CHANGE_STOP_SMOKING_DATE:
            return {
                ...state, settings: {
                    username: state.settings.username,
                    stopSmokingDate: action.payload,
                    cigarettesPerDay: state.settings.cigarettesPerDay,
                    cigarettesPerPack: state.settings.cigarettesPerPack,
                    cigaretteBrand: state.settings.cigaretteBrand,
                    pricePerPack: state.settings.pricePerPack
                }
            };
        case CHANGE_CIGARETTES_PER_DAY:
            return {
                ...state, settings: {
                    username: state.settings.username,
                    stopSmokingDate: state.settings.stopSmokingDate,
                    cigarettesPerDay: action.payload,
                    cigarettesPerPack: state.settings.cigarettesPerPack,
                    cigaretteBrand: state.settings.cigaretteBrand,
                    pricePerPack: state.settings.pricePerPack
                }
            };
        case CHANGE_CIGARETTE_BRAND:
            return {
                ...state, settings: {
                    username: state.settings.username,
                    stopSmokingDate: state.settings.stopSmokingDate,
                    cigarettesPerDay: state.settings.cigarettesPerDay,
                    cigarettesPerPack: state.settings.cigarettesPerPack,
                    cigaretteBrand: action.payload,
                    pricePerPack: state.settings.pricePerPack
                }
            };
        case CHANGE_PRICE_PER_PACK:
            return {
                ...state, settings: {
                    username: state.settings.username,
                    stopSmokingDate: state.settings.stopSmokingDate,
                    cigarettesPerDay: state.settings.cigarettesPerDay,
                    cigarettesPerPack: state.settings.cigarettesPerPack,
                    cigaretteBrand: state.settings.cigaretteBrand,
                    pricePerPack: action.payload
                }
            };
        case CHANGE_CIGARETTES_PER_PACK:
            return {
                ...state, settings: {
                    username: state.settings.username,
                    stopSmokingDate: state.settings.stopSmokingDate,
                    cigarettesPerDay: state.settings.cigarettesPerDay,
                    cigarettesPerPack: action.payload,
                    cigaretteBrand: state.settings.cigaretteBrand,
                    pricePerPack: state.settings.pricePerPack
                }
            };
        default:
            return {
                ...state
            };
    }
};
