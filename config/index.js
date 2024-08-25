const db = require("./data-source");
const logger = require("./logger");
const transporter = require("./mailer");



exports.db = db;
exports.logger = logger;
exports.transporter = transporter;