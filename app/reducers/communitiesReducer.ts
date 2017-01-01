import {Action} from "../actions/action";
import {isAddCommunityAction} from "../actions/comunitiesActions";
import Community from "../models/Community";
import {CommunitiesState} from "../state/state";


const initState: CommunitiesState = {

    list: []
};

export default function communitiesReducer(state: CommunitiesState = initState, action: Action): any {

    if (isAddCommunityAction(action)) {
        if(!state.list.some(x => x.url == action.communityUrl)) {

            return {...state, list: [...state.list, new Community(action.communityUrl) ]}
        }
    }

    return state;
}
