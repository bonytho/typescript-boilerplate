import express, {Request, Response, NextFunction} from "express";

const router = express.Router();

router.get("/heartbeat", async (_req: Request, res: Response, next: NextFunction) => {
	try {
		res.json({message: "Passport API Running", Time: new Date().toLocaleTimeString()});
	} catch (e) {
		next({status: 400, error: e});
	}
});

router.get("/version", async (_req: Request, res: Response, next: NextFunction) => {
	try {
		let version = null;
		if (process.env.BuildVersion !== undefined) version = process.env.BuildVersion;
		else if (process.env.npm_package_version !== undefined) version = process.env.npm_package_version;
		res.json({version});
	} catch (e) {
		next({status: 400, error: e});
	}
});

export default router;
