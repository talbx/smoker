import {
    CHANGE_CIGARETTE_BRAND,
    CHANGE_CIGARETTES_PER_DAY,
    CHANGE_CIGARETTES_PER_PACK,
    CHANGE_GENDER,
    CHANGE_PRICE_PER_PACK,
    CHANGE_STOP_SMOKING_DATE,
    CHANGE_USERNAME,
    LOAD_STATE
} from "./actions";
import {initialState} from "./initial";
import {AsyncStorage} from "react-native";

export const smokerReducer = (state = initialState, action) => {
    let newstate;

    console.log(action);

    switch (action.type) {
        case CHANGE_USERNAME:
            newstate = {
                ...state, settings: {
                    ...state.settings,
                    profile: {
                        ...state.settings.profile,
                        username: action.payload,
                    },
                }
            };
            break;
        case CHANGE_GENDER:
            newstate = {
                ...state, settings: {
                    ...state.settings,
                    profile: {
                        ...state.settings.profile,
                        gender: action.payload,
                    },
                }
            };
            break;
        case CHANGE_STOP_SMOKING_DATE:
            newstate = {
                ...state, settings: {
                    ...state.settings,
                    smoking: {
                        ...state.settings.smoking,
                        stopSmokingDate: action.payload,
                    }
                }
            };
            break;
        case CHANGE_CIGARETTES_PER_DAY:
            newstate = {
                ...state, settings: {
                    ...state.settings,
                    smoking: {
                        ...state.settings.smoking,
                        cigarettesPerDay: action.payload,
                    }
                }
            };
            break;
        case CHANGE_CIGARETTE_BRAND:
            newstate = {
                ...state, settings: {
                    ...state.settings,
                    smoking: {
                        ...state.settings.smoking,
                        cigaretteBrand: action.payload,
                    }
                }
            };
            break;
        case CHANGE_PRICE_PER_PACK:
            newstate = {
                ...state, settings: {
                    ...state.settings,
                    smoking: {
                        ...state.settings.smoking,
                        pricePerPack: action.payload,
                    }
                }
            };
            break;
        case CHANGE_CIGARETTES_PER_PACK:
            newstate = {
                ...state, settings: {
                    ...state.settings,
                    smoking: {
                        ...state.settings.smoking,
                        cigarettesPerPack: action.payload,
                    }
                }
            };
            break;

        case LOAD_STATE: {
            console.log("is load stae");
            return state;
        }
        default:
            newstate = {
                ...state
            };
    }
    AsyncStorage.setItem('state', JSON.stringify(newstate));
    return newstate;
};
