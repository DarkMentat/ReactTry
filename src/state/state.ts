import Community from "../models/Community";
import Profile from "../models/Profile";
import AuthUser from "../models/AuthUser";
import AuthSession from "../models/AuthSession";


export interface AppState {

    communities: CommunitiesState,
    profiles: ProfilesState,
    auth: AuthState
}

export interface CommunitiesState {
    list: Community[]
}

export interface ProfilesState {
    list: Profile[]
}

export interface AuthState {

    isLoggedIn: boolean

    user?: AuthUser,
    session?: AuthSession
}