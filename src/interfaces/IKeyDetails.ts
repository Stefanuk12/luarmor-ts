// Dependencies
import { IBaseResponse } from "./IBaseResponse.js";
import { IProject } from "./IProject.js"

//
export interface IKeyDetails extends IBaseResponse {
    message: "Success!" | "Invalid API key! Visit https://luarmor.net/ to get access." | "Wrong API key"
    email?: string
    discord_id?: string
    expires_at?: number
    registered_at?: number
    plan?: string
    enabled?: number
    projects?: IProject[]
  }