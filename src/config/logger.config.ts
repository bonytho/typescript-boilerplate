import logger from "../shared/Logger";

const stream = {
	write: (message: any) => {
		logger.info(message);
	},
};

export default stream;
