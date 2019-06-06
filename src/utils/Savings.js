import moment from "moment/moment";
import {Gender} from "../modules/dashboard/model/Gender";


export function calculateCigarettes(date, cigsPerDay) {
    const daysSince = moment.duration(moment(new Date()).diff(moment(date))).asDays();
    return Math.round(daysSince * cigsPerDay);
}

export function calculateSavedMoney(packs, pricePerPack) {
    return Math.round(packs * pricePerPack);
}

export function calculatePacks(cigarettes, cigsPerPack) {
    return Math.round(cigarettes / cigsPerPack);
}

export function calculateLifetime(cigsPerDay, gender) {
    return gender === Gender.MALE ? cigsPerDay * 0.94 : cigsPerDay * 0.73;
}