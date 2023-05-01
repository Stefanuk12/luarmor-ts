// Dependencies
import { IBaseResponse } from "./IBaseResponse.js";
import { IUserFull } from "./IUser.js";

//
export interface IUsers extends IBaseResponse {
    message: "Success!" | "Project not found!" | "User is on cooldown"
    users: IUserFull[]
}