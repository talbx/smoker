export class Level {

    name: string;
    cashGoal: number;
    cigarettesGoal: number;

    constructor(name, cigs, cash) {
        this.cashGoal = cash;
        this.cigarettesGoal = cigs;
        this.name = name;
    }
}

export function evaluateLevel(cigs, cash): Level {

    if (cigs < 500 && cash < 50) {
        return new Level("1", 600, 100);
    } else if (cigs < 600 && cash < 100) {
        return new Level("2", 700, 150);
    } else if (cigs < 700 && cash < 150) {
        return new Level("3", 800, 200);
    } else if (cigs < 800 && cash < 200) {
        return new Level("4", 900, 250);
    } else if (cigs < 900 && cash < 250) {
        return new Level("5", 1000, 300);
    } else if (cigs < 1000 && cash < 300) {
        return new Level("6", 1200, 350);
    } else if (cigs < 1200 && cash < 350) {
        return new Level("7", 1400, 400);
    } else if (cigs < 1400 && cash < 400) {
        return new Level("8", 1600, 450);
    }
    return new Level("9", 2000, 560);
}