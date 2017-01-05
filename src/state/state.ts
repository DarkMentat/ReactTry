import Community from "../models/Community";
import Profile from "../models/Profile";

export interface AppState {

    communities: CommunitiesState,
    profiles: ProfilesState
}

export interface CommunitiesState {
    list: Community[]
}

export interface ProfilesState {
    list: Profile[]
}