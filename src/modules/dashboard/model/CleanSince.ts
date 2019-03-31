export class CleanSince {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    months: number;
    years: number;

    constructor(years: number, months: number, days: number, hours: number, minutes: number, seconds: number) {
        this.years = years;
        this.months = months;
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}