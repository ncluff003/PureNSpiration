const nodemailer = require(`nodemailer`);
const pug = require(`pug`);
const htmlToText = require(`html-to-text`);
const Calendar = require(`./calendarModel`);

// Sample Greeting `Good morning Nathan.  You have a message from {first name here}.  It is about {email subject here}.
// I might add more things to this email at a later date, but for now, I can personally respond to whatever might be sent.
module.exports = class Email {
  constructor(firstName, lastName, organization, position, emailAddress, emailSubject, message) {
    this.to = process.env.MY_EMAIL;
    this.from = `${firstName} ${lastName} -- <${emailAddress}>`;
    this.firstName = firstName;
    this.lastName = lastName;
    this.organization = organization;
    this.position = position;
    this.subject = emailSubject;
    this.greeting = Calendar.getGreeting(Calendar.getHour()); // This will be programattically made from our end.
    this.message = message;
  }

  makeTransport() {
    if (process.env.ENVIRONMENT === `PRODUCTION`) {
      return nodemailer.createTransport({
        // host: `mail.privateemail.com`, // This is a 2 Month Trial At The Moment With Namecheap.  Likely to be cancelled that is for sure.
        // secure: true,
        // port: process.env.SECURE_PORT,
        // auth: {
        //   user: process.env.NAMECHEAP_EMAIL,
        //   pass: process.env.NAMECHEAP_PASSWORD,
        // },
        // debug: true,
        // logger: true,
        host: `smtp.zoho.com`,
        secure: true,
        port: process.env.SECURE_PORT,
        auth: {
          user: process.env.MY_EMAIL,
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

  // Sample Greeting `Good morning Nathan.  You have a message from {first name here}.  It is about {email subject here}.
  async _send(template) {
    // Sends the actual email.  This is a more broad function that each more specific method will call with very specific arguments.
    const html = pug.renderFile(`${__dirname}/../Views/Emails/${template}.pug`, {
      from: this.from,
      to: this.to,
      firstName: this.firstName,
      lastName: this.lastName,
      organization: this.organization,
      position: this.position,
      subject: this.subject,
      message: this.message,
      // p #{greeting} #{firstName} #{lastName}, you have received this email at #{hour}:#{minutes} #{timeOfDay} on #{day}/#{month}/#{year}.
      // Everything Below Will Be Programattically Done.  It Is Vital To The Email Template I Plan On Creating.
      // Hour : Minutes : Timeofday | Day / Month / Year
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
    };

    await this.makeTransport().sendMail(mailOptions);
  }

  async contactMe() {
    await this._send(`reachOut`);
  }
};
