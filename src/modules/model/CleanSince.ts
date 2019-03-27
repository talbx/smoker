export class CleanSince {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    months: number;

    constructor(months, days, hours, minutes, seconds) {
        this.months = months;
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}