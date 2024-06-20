export interface IUser {
    // Identifier of the user to whitelist. Could be a HWID.
    identifier?: string
    // Unix timestamp (seconds) of expiry date. If you don't provide this field, it will never expire.
    auth_expire?: number
    // Discord ID of the user. If not specified, user won't be able to resethwid on their own. They can still link their discord id to their key using /redeem command (if you configured the bot)
    discord_id?: string
}
export interface IUserNote extends IUser {
    // Custom note for client. This might make it easier to identify the user.
    note?: string
}
export interface IUserGet {
    // Discord ID of the user. If not specified, user won't be able to resethwid on their own. They can still link their discord id to their key using /redeem command (if you configured the bot)
    discord_id?: string
    // The key of the user
    user_key?: string
    // Identifier of the user to whitelist. Could be a HWID.
    identifier?: string

    // Start offset of the results. Useful for paging users and not fetching all at once.
    from?: number
    // Finish index of the results. Useful for limiting the results to a specific range between "from" and "until" parameters.
    until?: number
    // Useful for filtering results that contains the value of "search" anywhere in one of their "identifier", "user_key", "discord_id" or "note" properties.
    search?: string
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