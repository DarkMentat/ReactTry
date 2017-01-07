import {Action} from "../actions/action";
import {isLoginFailAction, isLoginSuccessAction} from "../actions/authActions";
import {AuthState} from "../state/state";


const initState: AuthState = {
    isLoggedIn: false
};

export default function authReducer(state: AuthState = initState, action: Action): AuthState {

    if(isLoginSuccessAction(action)) {

        return {...state, isLoggedIn: true, user: action.user, session: action.session }
    }

    if(isLoginFailAction(action)) {

        return {...state, isLoggedIn: false, user: null, session: null }
    }


    return state;
}
