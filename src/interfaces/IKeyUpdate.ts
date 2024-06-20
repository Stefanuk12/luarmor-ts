// Dependencies
import { IBaseResponse } from "./IBaseResponse.js";
import { IKeyCreatePayload } from "./IKeyCreate.js";
import { IUserNote } from "./IUser.js";

//
export interface IKeyUpdatePayload extends IUserNote {
    user_key: string
}
export interface IKeyUpdate extends IBaseResponse {
    message: "User has been edited successfully!"
}