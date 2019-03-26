export class CleanSince {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    weeks: number;
    months: number;

    constructor(months, weeks, days, hours, minutes, seconds) {
        this.months = months;
        this.weeks = weeks;
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}