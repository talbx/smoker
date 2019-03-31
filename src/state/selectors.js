import {createSelector} from "reselect";

const smokingSettings = (state) => state.settings.smoking;
const profileSettings = (state) => state.settings.profile;
const applicationInfo = (state) => state.about;

export const getStopSmokingDate =
    createSelector([smokingSettings],
        (sets) => sets.stopSmokingDate);

export function getProfileSettings() {
}

export function getApplicationInfo() {
}
