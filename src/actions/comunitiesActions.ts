import {Action} from "./action";


export class AddCommunityAction extends Action {

    static typeOf(action: Action): action is AddCommunityAction{
        return action.type == "AddCommunityAction"
    }

    communityUrl: string;

    constructor(communityUrl: string) {
        super("AddCommunityAction");
        this.communityUrl = communityUrl;
    }
}

export function addCommunity(url: string) {
    return new AddCommunityAction(url).plain()
}
