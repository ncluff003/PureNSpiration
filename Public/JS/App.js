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

///////////////////////////////////////////////
// APP CLASS
(function () {
  class App {
    constructor() {
      Navigation.watch();
    }
  }
  const app = new App();
})();
