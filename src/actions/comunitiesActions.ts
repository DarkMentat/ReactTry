import {Action} from "./action";


export const ADD_COMMUNITY = 'ADD_COMMUNITY';

export interface AddCommunityAction extends Action {
    communityUrl: string;
}

export function addCommunity(url: string) {
    return {
        type: ADD_COMMUNITY,
        communityUrl: url
    }
}

export function isAddCommunityAction(action: Action): action is AddCommunityAction {
  return action.type == ADD_COMMUNITY;
}
