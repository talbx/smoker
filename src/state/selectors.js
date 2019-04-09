import {createSelector} from "reselect";

const smokingSettings = (state) => state.settings.smoking;
const profileSettings = (state) => state.settings.profile;

export const getStopSmokingDate =
    createSelector([smokingSettings],
        (sets) => sets.stopSmokingDate);

export const getUsername =
    createSelector([profileSettings],
        (sets) => sets.username);
