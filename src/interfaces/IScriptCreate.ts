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
  script: string
  silent: boolean
  ffa: boolean
  name: string
  heartbeat: boolean
  lightning: boolean
}