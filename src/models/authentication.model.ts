import * as DataValidator from "joi";

const LoginModel = DataValidator.object().keys({
	Username: DataValidator.string().required(),
	Password: DataValidator.string().required(),
});

const RefreshTokenModel = DataValidator.object().keys({
	Token: DataValidator.string().required(),
});

export {LoginModel, RefreshTokenModel};
