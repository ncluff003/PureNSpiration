const { JsonDB, Config } = require('node-json-db');

const database = new JsonDB(new Config('myDatabase', true, true, '/'));

module.exports = database;
