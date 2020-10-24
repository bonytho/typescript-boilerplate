import {Response, NextFunction, Request} from "express";
import {v4 as uuid} from "uuid";
import logger from "../shared/Logger";

const requestMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	req.requestId = uuid();

	logger.info("Request Received - " + req.requestId);
	logger.info(req.method + " " + req.originalUrl);
	res.setHeader("X-Request-Id", req.requestId);
	next();
};

export default requestMiddleware;
