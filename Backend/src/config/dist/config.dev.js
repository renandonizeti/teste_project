"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  development: {
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      name: process.env.DB_NAME,
      dialect: process.env.DB_DIALECT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    }
  },
  production: {
    database: _defineProperty({
      host: process.env.DB_HOST
    }, "host", process.env.DB_PORT)
  }
};