import {Action} from "./action";
import AuthUser from "../models/AuthUser";
import AuthSession from "../models/AuthSession";
declare let VK: any;


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';


export interface LogoutAction extends Action {}
export interface LoginFailAction extends Action {}
export interface LoginSuccessAction extends Action {

    user: AuthUser,
    session: AuthSession
}

export function logout() {

    return (dispatch: Function) => {

        VK.Auth.logout(() => dispatch(<LogoutAction>{type: LOGOUT}))
    };
}
export function login() {

    return (dispatch: Function) => {

        VK.Auth.login((response: any) => {

            if (response.session) {

                let clientId = 5808944;
                let redirectUrl = "http://vk-seeker-base-vk-seeker.44fs.preview.openshiftapps.com/login";

                document.createElement("img").src = "https://oauth.vk.com/authorize?client_id="+clientId+"&display=page&redirect_uri="+redirectUrl+"&response_type=code&v=5.60";

                dispatch(<LoginSuccessAction>{

                    type: LOGIN_SUCCESS,

                    user: new AuthUser(response.session.user.id,
                                        response.session.user.domain,
                                        response.session.user.first_name,
                                        response.session.user.last_name),

                    session: new AuthSession(response.session.expire,
                                             response.session.mid,
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

export function isLogoutAction(action: Action): action is LogoutAction {
    return action.type == LOGOUT;
}
export function isLoginSuccessAction(action: Action): action is LoginSuccessAction {
  return action.type == LOGIN_SUCCESS;
}
export function isLoginFailAction(action: Action): action is LoginFailAction {
    return action.type == LOGIN_FAIL;
}
