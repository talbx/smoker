import moment from "moment/moment";

export function calculateCigarettes(date, cigsPerDay) {
    const daysSince = moment.duration(moment(new Date()).diff(moment(date))).asDays();
    return daysSince * cigsPerDay;
}

export function calculateSavedMoney(packs, pricePerPack) {
    return packs * pricePerPack;
}

export function calculatePacks(cigarettes, cigsPerPack) {
    return cigarettes / cigsPerPack;
}