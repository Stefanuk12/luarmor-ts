export interface ISettings {
    reset_hwid_cooldown: number
}
export interface IScript {
    script_name: string
    script_id: string
    script_version: string
    ffa: boolean
    silent: boolean
}  
export interface IProject {
    platform: string
    id: string
    name: string
    settings: ISettings
    scripts: IScript[]
}