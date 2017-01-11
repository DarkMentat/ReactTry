import {Action} from "../actions/action";
import {AddCommunityAction} from "../actions/comunitiesActions";
import Community from "../models/Community";
import {CommunitiesState} from "../state/state";
import {SearchInCommunityFailAction, SearchInCommunitySuccessAction} from "../actions/vkActions";


const initState: CommunitiesState = {

    list: []
};

export default function communitiesReducer(state: CommunitiesState = initState, action: Action): CommunitiesState {

    if (AddCommunityAction.typeOf(action)) {
        if(!state.list.some(x => x.url == action.communityUrl)) {

            return {...state, list: [...state.list, new Community(action.communityUrl) ]}
        }
    }

    if (SearchInCommunitySuccessAction.typeOf(action)) {

        alert(action.result)
    }

    if (SearchInCommunityFailAction.typeOf(action)) {

        alert("fail")
    }

    return state;
}
