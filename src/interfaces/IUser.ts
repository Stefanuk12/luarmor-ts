export interface IUser {
    // Identifier of the user to whitelist. Could be a HWID.
    identifier?: string
    // Unix timestamp (seconds) of expiry date. If you don't provide this field, it will never expire.
    auth_expire?: number
    // Discord ID of the user. If not specified, user won't be able to resethwid on their own. They can still link their discord id to their key using /redeem command (if you configured the bot)
    discord_id?: string
}
export interface IUserFull extends IUser {
    user_key: string
    identifier_type: string
    status: string
    last_reset: number
    total_resets: number
    banned: number
    ban_reason: string
    ban_expire: number
    unban_token: string
    total_executions: number
    note: string
    ban_ip: string
}