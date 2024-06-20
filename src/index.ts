// Dependencies
import { IStatus } from "./interfaces/IStatus.js"
import { IKeyDetails } from "./interfaces/IKeyDetails.js"
import { IKeyCreate, IKeyCreatePayload } from "./interfaces/IKeyCreate.js"
import { IDeleteKey } from "./interfaces/IDeleteKey.js"
import { IUserGet } from "./interfaces/IUser.js"
import { IUsers } from "./interfaces/IUsers.js"
import { IResetHWID, IResetHWIDPayload } from "./interfaces/IResetHWID.js"
import { ILinkDiscord, ILinkDiscordPayload } from "./interfaces/ILinkDiscord.js"
import { IKeyUpdate, IKeyUpdatePayload } from "./interfaces/IKeyUpdate.js"
import { IScriptCreate, IScriptCreatePayload } from "./interfaces/IScriptCreate.js"
import { IKeyStats } from "./interfaces/IKeyStats.js"
import { IBlacklistPayload } from "./interfaces/IBlacklist.js"

// Main class
export class LuarmorClient {
    // Vars
    private apiKey!: string
    private baseURL = "https://api.luarmor.net/"

    // Constructor
    constructor(apiKey: string) {
        this.setAPIKey(apiKey)
    }

    // Sets the API Key and resets the HttpClient
    setAPIKey(apiKey: string) {
        this.apiKey = apiKey
    }

    private headers() {
        return {
            "Content-Type": "application/json",
            "Authorization": this.apiKey
        }
    }

    async get<T>(url: string): Promise<T> {
        return fetch(this.baseURL + url, {
            method: "GET",
            headers: this.headers(),
        }).then(res => res.json())
    }

    async post<T>(url: string, json?: Object): Promise<T> {
        return fetch(this.baseURL + url, {
            method: "POST",
            headers: this.headers(),
            body: JSON.stringify(json)
        }).then(res => res.json())
    }

    async patch<T>(url: string, json?: Object): Promise<T> {
        return fetch(this.baseURL + url, {
            method: "PATCH",
            headers: this.headers(),
            body: JSON.stringify(json)
        }).then(res => res.json())
    }

    async put<T>(url: string, json?: Object): Promise<T> {
        return fetch(this.baseURL + url, {
            method: "PUT",
            headers: this.headers(),
            body: JSON.stringify(json)
        }).then(res => res.json())
    }

    async delete<T>(url: string): Promise<T> {
        return fetch(this.baseURL + url, {
            method: "DELETE",
            headers: this.headers(),
        }).then(res => res.json())
    }
    
    // Grab API status
    async status() {
        return this.get<IStatus>("status")
    }

    // Gets the details of a API key
    async keyDetails() {
        return this.get<IKeyDetails>(`v3/keys/${this.apiKey}/details`)
    }

    // Gets the stats of a key
    async keyStats(noUsers = false) {
        return this.get<IKeyStats>(`v3/keys/${this.apiKey}/stats?noUsers=${noUsers}`)
    }

    // Create a new key/user
    async createKey(project_id: string, payload: IKeyCreatePayload) {
        return this.post<IKeyCreate>(`v3/projects/${project_id}/users`, payload)
    }

    // Updating an existing user
    async updateUser(project_id: string, payload: IKeyUpdatePayload) {
        return this.patch<IKeyUpdate>(`v3/projects/${project_id}/users`, payload)
    }

    // Delete the key
    async deleteKey(project_id: string, userKey: string) {
        return this.delete<IDeleteKey>(`v3/projects/${project_id}/users?user_key=${userKey}`)
    }

    // Getting users
    async getUsers(project_id: string, payload: IUserGet = {}) {
        return this.get<IUsers>(`v3/projects/${project_id}/users?${new URLSearchParams(payload as any).toString()}`)
    }

    // Reset HWID of key
    async resetHWID(project_id: string, payload: IResetHWIDPayload) {
        return this.post<IResetHWID>(`v3/projects/${project_id}/users/resethwid`, payload)
    }

    // Link Discord ID to a key
    async linkDiscord(project_id: string, payload: ILinkDiscordPayload) {
        return this.post<ILinkDiscord>(`v3/projects/${project_id}/users/linkdiscord`, payload)
    }

    // This will blacklist an existing key, and the HWID linked to it (if any). 
    async blacklistKey(project_id: string, payload: IBlacklistPayload) {
        return this.post<IBlacklistPayload>(`v3/projects/${project_id}/users/blacklist`, payload)
    }

    // Unblacklist a key
    async unblacklistKey(project_id: string, unban_token: string) {
        return this.get(`v3/projects/${project_id}/users/unban?unban_token=${unban_token}`)
    }

    // Create a new script
    async createScript(project_id: string, payload: IScriptCreatePayload) {
        return this.post<IScriptCreate>(`v3/projects/${project_id}/users/scripts`, payload)
    }

    // Update an existing script
    async updateScript(project_id: string, script_id: string, payload: IScriptCreatePayload) {
        return this.put<IScriptCreate>(`v3/projects/${project_id}/users/scripts/${script_id}`, payload)
    }
}