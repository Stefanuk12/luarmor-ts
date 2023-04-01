// Dependencies
import { IBaseResponse } from "./IBaseResponse";
import { IKeyCreatePayload } from "./IKeyCreate";

//
export interface IKeyUpdatePayload extends IKeyCreatePayload {
    user_key: string
}
export interface IKeyUpdate extends IBaseResponse {
    message: "User has been edited successfully!"
}