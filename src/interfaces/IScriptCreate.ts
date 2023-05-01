// Dependencies
import { IBaseResponse } from "./IBaseResponse.js";

//
export interface IScriptCreate extends IBaseResponse {
  script_id: string
  script_name: string
  loader_script: string
  ffa: boolean
  silent: boolean
}
export interface IScriptCreatePayload {
  name: string
  ffa: boolean
  silent: boolean
  script: string
  heartbeat: boolean
  lightning: boolean
}