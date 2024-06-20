// Dependencies
import { IBaseResponse } from "./IBaseResponse";

//
export interface IBlacklistPayload {
    // User key to blacklist.
    user_key: string,
    // Blacklist reason. Will be shown to user when executed
    ban_reason: string,
    // Exact unix timestamp of the ban expiry date. Leave -1 or undefined for infinite ban.
    ban_expire?: number
}
export interface IBlacklist extends IBaseResponse {

}