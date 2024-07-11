import { format, compareAsc, addDays } from "date-fns";

class DateHelper {
    constructor() {

    }

    format(date) {
        return format(date, "MM/dd/yyyy");
    }

    compareToday(date1) {
        if (compareAsc(this.format(date1), this.format(new Date())) === 0) return true;
        return false;
    }

    isTodoInUpcomingWeek(date) {
        const newWeekDate = this.format(addDays(new Date(), 7));
        console.log(compareAsc(this.format(date), newWeekDate));
        if (compareAsc(this.format(date), newWeekDate) === -1) return true;
        return false;
    }


}

export default new DateHelper();