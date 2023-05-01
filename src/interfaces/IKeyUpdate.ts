// Dependencies
import { IBaseResponse } from "./IBaseResponse.js";
import { IKeyCreatePayload } from "./IKeyCreate.js";

//
export interface IKeyUpdatePayload extends IKeyCreatePayload {
    user_key: string
}
export interface IKeyUpdate extends IBaseResponse {
    message: "User has been edited successfully!"
}