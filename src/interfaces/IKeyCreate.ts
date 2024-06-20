// Dependencies
import { IBaseResponse } from "./IBaseResponse.js";
import { IUserNote } from "./IUser.js";

//
export interface IKeyCreatePayload extends IUserNote {
    // Number of days a key will have once it has been activated by user. Read [here](https://docs.luarmor.net/#expiry-dates-and-time-limited-keys) for more info.
    key_days?: number
}
export interface IKeyCreate extends IBaseResponse {
    message: "Success!" | "Discord ID already exist."
    user_key?: string
}