export class CleanSince {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    months: number;
    years: number;

    constructor(years, months, days, hours, minutes, seconds) {
        this.years = years;
        this.months = months;
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}