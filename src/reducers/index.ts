import {combineReducers} from "redux";
import communities from "./communitiesReducer";
import profiles from "./profilesReducer";
import auth from "./authReducer";

export default combineReducers({
    communities,
    profiles,
    auth
})
