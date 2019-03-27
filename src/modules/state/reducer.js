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
                    ...state.settings,
                    profile: {
                        username: action.payload,
                    },
                }
            };
        case CHANGE_STOP_SMOKING_DATE:
            return {
                ...state, settings: {
                    ...state.settings,
                    smoking: {
                        ...state.smoking,
                        stopSmokingDate: action.payload,
                    }
                }
            };
        case CHANGE_CIGARETTES_PER_DAY:
            return {
                ...state, settings: {
                    ...state.settings,
                    smoking: {
                        ...state.smoking,
                        cigarettesPerDay: action.payload,
                    }
                }
            };
        case CHANGE_CIGARETTE_BRAND:
            return {
                ...state, settings: {
                    ...state.settings,
                    smoking: {
                        ...state.smoking,
                        cigaretteBrand: action.payload,
                    }
                }
            };
        case CHANGE_PRICE_PER_PACK:
            return {
                ...state, settings: {
                    ...state.settings,
                    smoking: {
                        ...state.smoking,
                        pricePerPack: action.payload,
                    }
                }
            };
        case CHANGE_CIGARETTES_PER_PACK:
            return {
                ...state, settings: {
                    ...state.settings,
                    smoking: {
                        ...state.smoking,
                        cigarettesPerPack: action.payload,
                    }
                }
            };
        default:
            return {
                ...state
            };
    }
};
