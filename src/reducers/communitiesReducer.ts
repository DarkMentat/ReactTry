import {Action} from "../actions/action";
import {isAddCommunityAction} from "../actions/comunitiesActions";
import Community from "../models/Community";
import {CommunitiesState} from "../state/state";
import {isSearchInCommunitySuccessAction, isSearchInCommunityFailAction} from "../actions/vkActions";


const initState: CommunitiesState = {

    list: []
};

export default function communitiesReducer(state: CommunitiesState = initState, action: Action): CommunitiesState {

    if (isAddCommunityAction(action)) {
        if(!state.list.some(x => x.url == action.communityUrl)) {

            return {...state, list: [...state.list, new Community(action.communityUrl) ]}
        }
    }

    if (isSearchInCommunitySuccessAction(action)) {

        alert(action.result)
    }

    if (isSearchInCommunityFailAction(action)) {

        alert("fail")
    }

    return state;
}
