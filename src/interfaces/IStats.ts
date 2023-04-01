// Dependencies
import { IBaseResponse } from "./IBaseResponse.js";

//
export interface IStats extends IBaseResponse {
    message: "Success!"
    execution_data: IExecutionData
    stats: IDataStats
}
export interface IExecutionData {
    frequency: number
    executions: number[]
}
export interface IDataStats {
    obfuscations: number
    scripts: number
    users: number
    attacks_blocked: number
    default: IDefault
    reset_at: number
}
export interface IDefault {
    scripts: number
    users: number
    obfuscations: number
}