////////////////////////////////////////////////
// IMPORTED VALUES
// import { myCalendar } from './Calendar.js';
import * as Navigation from './Components/_Navigation';
import * as Projects from './Projects';
import * as Utility from './Utility';
import * as API from './API-Calls';
import * as About from './Pages/About';
import * as Interests from './Pages/About-Interests';
import * as Skills from './Pages/About-Skills';
import * as Blog from './Pages/Blog';
import * as Project from './Pages/Project';
import * as Contact from './Pages/Contact';
import { get, getAll, set, timeTillExpires, remove, useNamespace } from './Classes/Cache';
import { buildApp, retrieveInfo, adjustDeclinedAppointment } from './../../../Appoint-Me/Public/JS/Application/Appoint-Me-App';

///////////////////////////////////////////////
// APP CLASS
(function () {
  class App {
    constructor() {
      Navigation.watch();
      About.watch();
      Project.watch();
      this._startApp();
      Contact.watchContactForm();
    }

    async _startApp() {
      let loginStatus = false;
      console.log(`App Has Started!`);

      // * WATCHING FOR SCREEN CHANGES
      Utility.watchScreen();

      if (!`${window.location.href}`.includes(`Declined`)) {
        console.log(`NOT DENIED`);
        if (document.querySelector('.calendar') || document.querySelector('.r__calendar')) {
          const app = document.querySelector('.calendar');
          Utility.addClasses(app, [`closed`]);
          await buildApp(app);
        }
      } else {
        console.log(`Appointment Denied`);
        Utility.build();
        let utility = get(`utility`);
        const declinedAppointmentContainer = document.querySelector('.appointment-declined-container');
        const data = await retrieveInfo();
        Utility.addClasses(declinedAppointmentContainer, [utility.theme[data.theme]]);
        adjustDeclinedAppointment(data, declinedAppointmentContainer, utility);
      }
    }
  }
  const app = new App();
})();
