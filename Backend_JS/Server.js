////////////////////////////////////////////
//  Core Modules

////////////////////////////////////////////
//  Third Party Modules
const dotenv = require('dotenv');

////////////////////////////////////////////
//  Third Party Module Instances

////////////////////////////////////////////
//  Third Party Middleware
const backend = require('scheduleit');

////////////////////////////////////////////
//  Third Party Config Files
dotenv.config({
  path: `./config.env`,
});

const DB = process.env.DB.replace(`<PASSWORD>`, process.env.DBPASSWORD).replace(`<DATABASE>`, process.env.DBNAME).replace(`<USERNAME>`, process.env.DBUSERNAME);

backend.server.connectToDB.mongo(DB);
backend.setupEmailTransport(
  {
    host: 'mail.privateemail.com',
    port: Number(process.env.SECURE_PORT),
    secure: true,
    auth: {
      user: process.env.SCHEDULE_IT_EMAIL,
      pass: process.env.NAMECHEAP_PASSWORD,
    },
    logger: true,
  },
  process.env.SCHEDULE_IT_EMAIL,
);

////////////////////////////////////////////
//  Routing Middleware

////////////////////////////////////////////
//  My Middleware

////////////////////////////////////////////
//  My Modules
const App = require('./App');

////////////////////////////////////////////
//  Initialize Port Number
const PORT = process.env.PORT || 3333;

////////////////////////////////////////////
//  Start Server
const server = App.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});

////////////////////////////////////////////
//  Reload App

////////////////////////////////////////////
//  Shut Down App On Unhandled Rejections
process.on(`unhandledRejection`, (error) => {
  console.log(`UNHANDLED REJECTION 💥 -- Shutting Down...`);
  console.error(error);
  server.close(() => {
    process.exit(1);
  });
});
