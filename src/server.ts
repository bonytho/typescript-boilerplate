import app from "./app";
import logger from "./shared/Logger";

const PORT = app.get("port") || 3000;

app.listen(PORT, () => {
	logger.info(`Express server listening on port ${PORT}`, PORT);
});
