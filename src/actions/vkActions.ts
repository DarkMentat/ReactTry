import {Action} from "./action";
import AuthSession from "../models/AuthSession";


export const SEARCHING_COMMUNITY = 'SEARCHING_COMMUNITY';
export const SEARCH_COMMUNITY_SUCCESS = 'SEARCH_COMMUNITY_SUCCESS';
export const SEARCH_COMMUNITY_FAIL = 'SEARCH_COMMUNITY_FAIL';


export interface SearchInCommunityFailAction extends Action {}
export interface SearchInCommunitySuccessAction extends Action {
    result: string
}
export interface SearchingInCommunityAction extends Action {}

export function searchCommunity(url: string, session: AuthSession) {

    return (dispatch: Function) => {

        dispatch(<SearchingInCommunityAction>{type: SEARCHING_COMMUNITY});

        let request = new XMLHttpRequest();
        request.open("GET", "http://vk-seeker-base-vk-seeker.44fs.preview.openshiftapps.com/vk/search?communityId="+url, true);
        request.setRequestHeader("vk-auth-mid", session.mid.toString());
        request.setRequestHeader("vk-auth-expire", session.expire.toString());
        request.setRequestHeader("vk-auth-sid", session.sid);
        request.setRequestHeader("vk-auth-sig", session.sig);
        request.onreadystatechange = function() {
            if (request.readyState == 4) {  //DONE
                if(request.status == 200) { //OK

                    dispatch(<SearchInCommunitySuccessAction>{
                        type: SEARCH_COMMUNITY_SUCCESS,
                        result: request.responseText
                    })
                }else{

                    dispatch(<SearchInCommunityFailAction>{
                        type: SEARCH_COMMUNITY_FAIL
                    })
                }
            }
        };
        request.send(null);
    }
}

export function isSearchingInCommunityAction(action: Action): action is SearchingInCommunityAction {
  return action.type == SEARCHING_COMMUNITY;
}
export function isSearchInCommunitySuccessAction(action: Action): action is SearchInCommunitySuccessAction {
    return action.type == SEARCH_COMMUNITY_SUCCESS;
}
export function isSearchInCommunityFailAction(action: Action): action is SearchInCommunityFailAction {
    return action.type == SEARCH_COMMUNITY_FAIL;
}
