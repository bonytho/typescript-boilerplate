class TError extends Error {
	status: number;
	message: string;
	code: string;
	traceId: any;
	constructor(message: string, status?: number | null, code?: string) {
		super(message);
		this.status = status || 400;
		this.message = message;
		this.code = code || "GEN_ERROR";
		this.traceId = undefined;
	}
}

export default TError;
