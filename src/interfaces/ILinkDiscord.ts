// Dependencies
import { IBaseResponse } from "./IBaseResponse";

//
export interface ILinkDiscord extends IBaseResponse {
    message: "Success!" | "This key already has a discord linked to it"
}
export interface ILinkDiscordPayload {
    user_key: string
    discord_id?: string
    force?: boolean
}