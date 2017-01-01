import {combineReducers} from "redux";
import communities from "./communitiesReducer";
import profiles from "./profilesReducer";

export default combineReducers({
    communities,
    profiles
})
