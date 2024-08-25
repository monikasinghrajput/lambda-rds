const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const _simpleFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const _formats = {
    simple: _simpleFormat
};

const _label = 'localhost';

const _transports = {
    console: new transports.Console({ level: 'debug' }),
    logFile: new transports.File({ filename: 'logs/localhost.log', level: 'info'}),
    errorFile: new transports.File({ filename: 'logs/error.log', level: 'error' }) 
  };

const logger = createLogger({
    level: 'info',
    format: combine(
        label({ label: _label }),
        timestamp(),
        _formats.simple
      ),
    transports: [
        _transports.console,
        _transports.logFile,
        _transports.errorFile
    ]
});

module.exports = logger;