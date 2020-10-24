import winston from "winston";

const options = {
	console: {
		level: "debug",
		handleExceptions: true,
		json: true,
		colorize: true,
		format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
	},
};

const logger = winston.createLogger({
	transports: [new winston.transports.Console(options.console)],
	exitOnError: false,
});

export default logger;
