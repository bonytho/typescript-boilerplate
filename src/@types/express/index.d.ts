export {};
declare global {
	namespace Express {
		interface Request {
			requestId?: string;
			user?: string;
			role?: string;
			jti?: string;
		}
	}
}
