// Dependencies
import { IBaseResponse } from "./IBaseResponse.js";

//
export interface IResetHWIDPayload {
    user_key: string
    force?: boolean
}
export interface IResetHWID extends IBaseResponse {
    message: "Successfully reset!" | "User key doesn't exist" | "Reset Hwid is disabled for this script"
}