const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const mylogsFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level.toUpperCase()} [${label}] :${message} `;
});

const formatedTimestamp = () => {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19)

}

const logger = createLogger({
    format: combine(
        format.timestamp({
            format: formatedTimestamp
        }),
        mylogsFormat
    ),
    //transports: [new transports.Console()]  // use to print logs in console
    transports: [new transports.File({ filename: 'server.log' })]
});

module.exports = logger