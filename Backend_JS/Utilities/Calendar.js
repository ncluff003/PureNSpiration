////////////////////////////////////////////
//  Core Modules

////////////////////////////////////////////
//  Third Party Modules

////////////////////////////////////////////
//  Third Party Module Instances

////////////////////////////////////////////
//  Third Party Config Files

////////////////////////////////////////////
//  Third Party Middleware
const { DateTime, Info } = require('luxon');

////////////////////////////////////////////
//  My Middleware

////////////////////////////////////////////
//  Routing Middleward

////////////////////////////////////////////
//  My Modules

/////////////////////////////////////////
//  Calendar Model
class Calendar {
  constructor() {
    this.date = DateTime.now();
    this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.months = Info.months('long');
    this.monthIndex = this.months.indexOf(this.date.monthLong);
    this.hours = this.date.hour;
    this.day = this.date.day;
  }

  getMinutes() {
    return this.date.getMinutes() < 10 ? `0${this.date.getMinutes()}` : this.date.getMinutes();
  }

  getHour() {
    if (this.hours === 0 || this.hours === 24) return (this.hours = 12);
    if (this.hours >= 13 && this.getMinutes() >= 0) {
      return (this.hours = this.hours - 12);
    }
    return this.hours;
  }

  getTimeOfDay() {
    return this.date.hour < 12 ? (this.timeOfDay = `AM`) : (this.timeOfDay = `PM`);
  }

  getDay() {
    return this.day;
  }

  getGreeting() {
    if (this.hours < 12) {
      return (this.greeting = `Good Morning`);
    }
    if (this.hours >= 12 && this.hours < 18) {
      return (this.greeting = `Good Afternoon`);
    }
    if (this.hours >= 18) {
      return (this.greeting = `Good Evening`);
    }
  }

  getWeekday() {
    return this.days[this.day];
  }

  getMonth() {
    return this.date.month;
  }

  getYear() {
    return this.date.year;
  }

  monthRemaining() {
    let days;
    const currentMonth = this.getMonth();
    const currentDay = this.day;
    if (
      currentMonth === `January` ||
      currentMonth === `March` ||
      currentMonth === `May` ||
      currentMonth === `July` ||
      currentMonth === `August` ||
      currentMonth === `October` ||
      currentMonth === `December`
    ) {
      days = 31;
    }
    if (currentMonth === `April` || currentMonth === `June` || currentMonth === `September` || currentMonth === `November`) {
      days = 30;
    }
    if (currentMonth === `February`) {
      (this.getYear() % 4 === 0 && !(this.getYear() % 100 === 0)) || this.getYear() % 400 === 0 ? (days = 29) : (days = 28);
    }
    const remaining = days - currentDay;
    const percentage = remaining / days;
    const calculatedPercent = (100 * percentage).toFixed(0);
    return `${calculatedPercent}%`;
  }

  getDaySuffix(date) {
    if (`${date}`[`${date}`.length - 1] === 1) {
      return `st`;
    } else if (`${date}`[`${date}`.length - 1] === 2) {
      return `nd`;
    } else if (`${date}`[`${date}`.length - 1] === 3) {
      return `rd`;
    } else {
      return `th`;
    }
  }

  getLongDate(startDate, endDate) {
    let start = DateTime.fromISO(startDate);
    let end = DateTime.fromISO(endDate);

    if (start.day === end.day) {
      return `${start.toLocaleString(DateTime.TIME_SIMPLE)} to ${end.toLocaleString(DateTime.TIME_SIMPLE)} on ${start.weekdayLong} the ${
        start.day
      }${this.getDaySuffix(start.day)} of ${start.monthLong} ${start.year}`;
    } else if (end.day === start.plus({ days: 1 }).day) {
      return `${start.toLocaleString(DateTime.TIME_SIMPLE)} on ${start.weekdayLong} the ${start.day}${this.getDaySuffix(start.day)} of ${start.monthLong} ${
        start.year
      } to ${end.toLocaleString(DateTime.TIME_SIMPLE)} on ${end.weekdayLong} the ${end.day}${this.getDaySuffix(end.day)} of ${end.monthLong} ${end.year}`;
    } else {
      return `THIS IS NOT WORKING! ${start.day} | ${end.day}`;
    }
  }
}

const myCalendar = new Calendar(Date.now());

module.exports = myCalendar;
