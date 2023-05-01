// Dependencies
import got, { Got } from "got"
import { IStatus } from "./interfaces/IStatus.js"
import { IKeyDetails } from "./interfaces/IKeyDetails.js"
import { IKeyCreate, IKeyCreatePayload } from "./interfaces/IKeyCreate.js"
import { IDeleteKey } from "./interfaces/IDeleteKey.js"
import { IUser } from "./interfaces/IUser.js"
import { IUsers } from "./interfaces/IUsers.js"
import { IResetHWID, IResetHWIDPayload } from "./interfaces/IResetHWID.js"
import { ILinkDiscord, ILinkDiscordPayload } from "./interfaces/ILinkDiscord.js"
import { IKeyUpdate, IKeyUpdatePayload } from "./interfaces/IKeyUpdate.js"
import { IScriptCreate, IScriptCreatePayload } from "./interfaces/IScriptCreate.js"

// Main class
export class LuarmorClient {
    // Vars
    private apiKey!: string
    private httpClient!: Got

    // Constructor
    constructor(apiKey: string) {
        this.setAPIKey(apiKey)
    }

    // Sets the API Key and resets the HttpClient
    setAPIKey(apiKey: string) {
        this.apiKey = apiKey
        this.httpClient = got.extend({
            prefixUrl: "https://api.luarmor.net/",
            headers: {
                "Content-Type": "application/json",
                "Authorization": apiKey
            }
        })
    }

    // Grab API status
    async status() {
        return (await this.httpClient.get("status").json()) satisfies IStatus
    }

    // Gets the details of a API key
    async keyDetails() {
        return (await this.httpClient.get(`v3/keys/${this.apiKey}/details`).json()) satisfies IKeyDetails 
    }

    // Gets the stats of a key
    async keyStats(noUsers = false) {
        return (await this.httpClient.get(`v3/keys/${this.apiKey}/stats`, {
            searchParams: {
                noUsers
            }
        }).json()) satisfies IKeyDetails 
    }

    // Create a new key/user
    async createKey(project_id: string, payload: IKeyCreatePayload) {
        return (await this.httpClient.post(`v3/projects/${project_id}/users`, {
            json: payload
        }).json()) satisfies IKeyCreate
    }

    // Updating an existing user
    async updateUser(project_id: string, payload: IKeyUpdatePayload) {
        return (await this.httpClient.patch(`v3/projects/${project_id}/users`, {
            json: payload
        }).json()) satisfies IKeyUpdate
    }

    // Delete the key
    async deleteKey(project_id: string, userKey: string) {
        return (await this.httpClient.delete(`v3/projects/${project_id}/users`, {
            searchParams: {
                user_key: userKey
            }
        }).json()) satisfies IDeleteKey
    }

    // Getting users
    async getUsers(project_id: string, payload: IUser = {}) {
        return (await this.httpClient.get(`v3/projects/${project_id}/users`, {
            searchParams: <any>payload
        }).json()) satisfies IUsers
    }

    // Reset HWID of key
    async resetHWID(project_id: string, payload: IResetHWIDPayload) {
        return (await this.httpClient.post(`v3/projects/${project_id}/users/resethwid`, {
            json: payload
        }).json()) satisfies IResetHWID
    }

    // Link Discord ID to a key
    async linkDiscord(project_id: string, payload: ILinkDiscordPayload) {
        return (await this.httpClient.post(`v3/projects/${project_id}/users/linkdiscord`, {
            json: payload
        }).json()) satisfies ILinkDiscord
    }

    // Create a new script
    async createScript(project_id: string, payload: IScriptCreatePayload) {
        return (await this.httpClient.post(`v3/projects/${project_id}/users/scripts`, {
            json: payload
        }).json()) satisfies IScriptCreate
    }

    // Update an existing script
    async updateScript(project_id: string, script_id: string, payload: IScriptCreatePayload) {
        return (await this.httpClient.put(`v3/projects/${project_id}/users/scripts/${script_id}`, {
            json: payload
        }).json()) satisfies IScriptCreate
    }
}