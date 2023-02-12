////////////////////////////////////////////
//  Core Modules

////////////////////////////////////////////
//  Third Party Modules
const dotenv = require('dotenv');
const mongoose = require('mongoose');

////////////////////////////////////////////
//  Third Party Module Instances

////////////////////////////////////////////
//  Third Party Middleware

////////////////////////////////////////////
//  Third Party Config Files
dotenv.config({
  path: `./config.env`,
});

const DB = process.env.DB.replace(`<PASSWORD>`, process.env.DBPASSWORD).replace(`<DATABASE>`, process.env.DBNAME).replace(`<USERNAME>`, process.env.DBUSERNAME);
console.log(DB);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB Connection Successful`));

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
