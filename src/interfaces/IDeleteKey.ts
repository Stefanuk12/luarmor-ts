// Dependencies
import { IBaseResponse } from "./IBaseResponse.js";

//
export interface IDeleteKey extends IBaseResponse {
    message: "User has been deleted!" | "Key not found"
}