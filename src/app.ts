import express, {Request, Response, NextFunction} from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import compression from "compression";
import stream from "./config/logger.config";
import IndexRouter from "./router/index.router";
import logger from "./shared/Logger";
import TError from "./lib/error.lib";
import requestMiddleware from "./middleware/request.middleware";

const app: express.Application = express();

if (app.get("env") === "development") {
	dotenv.config();
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(compression());
app.use(cors());

app.use(morgan("combined", {stream}));
app.use(helmet());

app.use(requestMiddleware);

// HeartBeat
app.get("/ping", (_req, res) => {
	res.json({message: "Pong"});
});

app.use("/api/v1", IndexRouter);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
	next(new TError("Route Not Found", 404, "UNKNOWN_URL"));
});

app.use((err: TError, req: Request, res: Response, _next: NextFunction) => {
	err.status = err.status || 500;
	err.traceId = req.requestId || "Unknown";
	logger.error(err.message);

	return res.status(err.status).json({code: err.code, error: err.message, traceId: err.traceId});
});

app.set("port", process.env.PORT || 3000);

export default app;
