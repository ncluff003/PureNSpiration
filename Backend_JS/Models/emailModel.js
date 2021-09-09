////////////////////////////////////////////
//  Core Modules

////////////////////////////////////////////
//  Third Party Modules;
const nodemailer = require(`nodemailer`);
const pug = require(`pug`);
const htmlToText = require(`html-to-text`);

////////////////////////////////////////////
//  Third Party Module Instances

////////////////////////////////////////////
//  Third Party Config Files

////////////////////////////////////////////
//  Third Party Middleware

////////////////////////////////////////////
//  My Middleware

////////////////////////////////////////////
//  Routing Middleward

////////////////////////////////////////////
//  My Modules
const Calendar = require(`./calendarModel`);
////////////////////////////////////////////
//  Email Model
module.exports = class Email {
  constructor(firstName, lastName, organization, position, emailAddress, emailSubject, message) {
    this.to = process.env.NAMECHEAP_EMAIL;
    this.from = `${firstName} ${lastName} ${emailAddress}`;
    this.firstName = firstName;
    this.lastName = lastName;
    this.organization = organization;
    this.position = position;
    this.subject = emailSubject;
    this.greeting = Calendar.getGreeting();
    this.message = message;
  }

  makeTransport() {
    if (process.env.NODE_ENV === `production`) {
      return nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: process.env.SECURE_PORT,
        secure: true,
        auth: {
          user: process.env.NAMECHEAP_EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    }
    return nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
  }

  async _send(template) {
    const html = pug.renderFile(`${__dirname}/../Views/Emails/${template}.pug`, {
      from: this.from,
      to: this.to,
      firstName: this.firstName,
      lastName: this.lastName,
      organization: this.organization,
      position: this.position,
      subject: this.subject,
      message: this.message,

      // Prgrammatically Done Values
      greeting: this.greeting,
      hour: Calendar.getHour(),
      minutes: Calendar.getMinutes(),
      timeOfDay: Calendar.getTimeOfDay(),
      day: Calendar.getDay(),
      weekday: Calendar.getWeekday(),
      month: Calendar.getMonth(),
      year: Calendar.getYear(),
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: this.subject,
      html: html,
      text: htmlToText.fromString(html),
      envelope: {
        from: this.to,
        to: this.to,
      },
    };
    await this.makeTransport().sendMail(mailOptions);
  }

  async contactMe() {
    await this._send(`reachOut`);
  }
};
