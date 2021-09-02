class Calendar {
  constructor() {
    this.date = new Date();
    this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.monthIndex = this.date.getMonth();
    this.hour;
    this.hours = this.date.getHours();
    this.day = this.date.getDay();
    this.greeting;
    this.weekday;
    this.timeOfDay;
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
    return this.date.getHours() < 12 ? (this.timeOfDay = `AM`) : (this.timeOfDay = `PM`);
  }

  getDay() {
    return this.date.getDate();
  }

  getGreeting(hours) {
    if (this.hours < 12) {
      return (this.greeting = `Good morning`);
    }
    if (this.hours >= 12 && this.hours < 18) {
      return (this.greeting = `Good afternoon`);
    }
    if (this.hours >= 18) {
      return (this.greeting = `Good evening`);
    }
  }

  getWeekday(daysArray, weekday) {
    return this.days[this.day];
  }

  getMonth() {
    return this.months[this.monthIndex];
  }

  getYear() {
    return this.date.getFullYear();
  }
}

const myCalendar = new Calendar(Date.now());

module.exports = myCalendar;
