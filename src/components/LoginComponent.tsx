import * as React from "react";
import AuthUser from "../models/AuthUser";


export interface ProfileProps {

    onLogin: () => void;
    onLogout: () => void;
    authUser?: AuthUser;
}

export default class LoginComponent extends React.Component<ProfileProps, undefined> {

    render() {
        return (
                <div>
                    {this.props.authUser!=null && <p>Hi {this.props.authUser.firstName} {this.props.authUser.lastName}!</p> }
                    {this.props.authUser!=null && <button onClick={(e) => this.props.onLogout() }>Logout</button> }
                    {this.props.authUser==null && <button onClick={(e) => this.props.onLogin() }>Login</button> }
                </div>
        )
    }
}
