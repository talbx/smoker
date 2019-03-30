import moment from "moment/moment";

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