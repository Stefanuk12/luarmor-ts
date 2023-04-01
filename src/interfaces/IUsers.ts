// Dependencies
import { IBaseResponse } from "./IBaseResponse";
import { IUserFull } from "./IUser";

//
export interface IUsers extends IBaseResponse {
    message: "Success!" | "Project not found!" | "User is on cooldown"
    users: IUserFull[]
}