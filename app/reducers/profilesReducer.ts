import {Action} from "../actions/action";
import Profile from "../models/Profile";


interface CommunitiesState {
    list: Profile[]
}

const initState: CommunitiesState = {

    list: []
};

export default function profilesReducer(state = initState, action: Action): any {

    return state;
}
