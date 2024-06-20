export interface IExecutionData {
    frequency: number
    executions: number[]
}

export interface IKeyStats {
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