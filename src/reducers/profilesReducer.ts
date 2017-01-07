import {Action} from "../actions/action";
import {ProfilesState} from "../state/state";


const initState: ProfilesState = {

    list: []
};

export default function profilesReducer(state = initState, action: Action): ProfilesState {

    return state;
}
