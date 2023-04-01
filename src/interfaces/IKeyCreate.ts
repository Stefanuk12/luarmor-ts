// Dependencies
import { IBaseResponse } from "./IBaseResponse.js";
import { IUser } from "./IUser.js";

//
export interface IKeyCreatePayload extends IUser {
    // Custom note for client. This might make it easier to identify the user.
    note?: string
}
export interface IKeyCreate extends IBaseResponse {
    message: "Success!" | "Discord ID already exist."
    user_key?: string
}