import {CleanSince} from "../model/CleanSince";
import moment from "moment";

export function createCleanSince(closeDate, farDate) {
    const close = moment(closeDate);
    const far = moment(farDate);
    const duration = moment.duration(close.diff(far));
    return createCleanSinceViaDuration(duration);
}

export function createCleanSinceViaDuration(duration) {
    return new CleanSince(duration.years(), duration.months(), duration.days(), duration.hours(), duration.minutes(), duration.seconds())
}