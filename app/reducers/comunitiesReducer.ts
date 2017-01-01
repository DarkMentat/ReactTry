import { Action } from '../actions/action'
import { isAddComunityAction, AddComunityAction } from '../actions/comunitiesActions'

import Comunity from "../models/Comunity"


interface ComunitiesState {
    list: Comunity[]
}

const initState: ComunitiesState = {

    list: []
}

export default function comunitiesReducer(state: ComunitiesState = initState, action: Action): any {

    if (isAddComunityAction(action)) {
        if(!state.list.some(x => x.url == action.comunityUrl)) {

            return {...state, list: [...state.list, new Comunity(action.comunityUrl) ]}
        }
    }

    return state;
}
