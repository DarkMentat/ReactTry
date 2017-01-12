import {Action} from "../actions/action";
import {AddCommunityAction} from "../actions/comunitiesActions";
import Community from "../models/Community";
import {CommunitiesState} from "../state/state";
import {SearchInCommunityFailAction, SearchInCommunitySuccessAction} from "../actions/vkActions";


const initState: CommunitiesState = {

    list: []
};

export default function communitiesReducer(state: CommunitiesState = initState, action: Action): CommunitiesState {

    console.log("addComunityRed");

    if (AddCommunityAction.typeOf(action)) {

        console.log("addComunityRed1");

        if(!state.list.some(x => x.url == action.communityUrl)) {

            console.log("addComunityRed2");
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
