import {Action} from "./action";
import AuthUser from "../models/AuthUser";
import AuthSession from "../models/AuthSession";


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';


export interface LoginFailAction extends Action {}
export interface LoginSuccessAction extends Action {

    user: AuthUser,
    session: AuthSession
}


declare let VK: any;

export function login() {

    return (dispatch: Function) => {

        VK.Auth.login((response: any) => {

            if (response.session) {

                dispatch(<LoginSuccessAction>{

                    type: LOGIN_SUCCESS,

                    user: new AuthUser(response.session.user.id,
                                        response.session.user.domain,
                                        response.session.user.first_name,
                                        response.session.user.last_name),

                    session: new AuthSession(response.session.mid,
                                             response.session.secret,
                                             response.session.sid,
                                             response.session.sig)
                });

            } else {
                dispatch(<LoginFailAction>{type: LOGIN_FAIL});
            }
        })
    };
}

export function isLoginSuccessAction(action: Action): action is LoginSuccessAction {
  return action.type == LOGIN_SUCCESS;
}
export function isLoginFailAction(action: Action): action is LoginFailAction {
    return action.type == LOGIN_FAIL;
}
