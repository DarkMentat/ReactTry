import { Action } from './action'

export const ADD_COMUNITY = 'ADD_COMUNITY';


export interface AddComunityAction extends Action {
    comunityUrl: string;
}

export function addComunity(url: string) {
    return {
        type: ADD_COMUNITY,
        comunityUrl: url
    }
}

export function isAddComunityAction(action: Action): action is AddComunityAction {
  return action.type == ADD_COMUNITY;
}
