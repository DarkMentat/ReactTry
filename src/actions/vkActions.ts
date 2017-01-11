import {Action} from "./action";
import AuthSession from "../models/AuthSession";


export class SearchInCommunityStartAction extends Action {

    static typeOf(action: Action): action is SearchInCommunityStartAction{
        return action.type == "SearchInCommunityStartAction"
    }
}

export class SearchInCommunityFailAction extends Action {

    static typeOf(action: Action): action is SearchInCommunityFailAction{
        return action.type == "SearchInCommunityFailAction"
    }
}

export class SearchInCommunitySuccessAction extends Action {

    static typeOf(action: Action): action is SearchInCommunitySuccessAction{
        return action.type == "SearchInCommunitySuccessAction"
    }

    result: string;

    constructor(result: string) {
        super();

        this.result = result;
    }
}


export function searchCommunity(url: string, session: AuthSession) {

    return (dispatch: Function) => {

        dispatch(new SearchInCommunityStartAction().plain());

        let request = new XMLHttpRequest();
        request.open("GET", "http://vk-seeker-base-vk-seeker.44fs.preview.openshiftapps.com/vk/search?communityId="+url, true);
        request.setRequestHeader("vk-auth-mid", session.mid.toString());
        request.setRequestHeader("vk-auth-expire", session.expire.toString());
        request.setRequestHeader("vk-auth-sid", session.sid);
        request.setRequestHeader("vk-auth-sig", session.sig);
        request.onreadystatechange = function() {
            if (request.readyState == 4) {  //DONE
                if(request.status == 200) { //OK

                    dispatch(new SearchInCommunitySuccessAction(request.responseText).plain())
                }else{

                    dispatch(new SearchInCommunityFailAction().plain())
                }
            }
        };
        request.send(null);
    }
}