import * as React from "react";
import {connect} from "react-redux";
import {addCommunity} from "../actions/comunitiesActions";
import ProfileListComponent from "./ProfileListComponent";
import BaseCriteriasComponent from "./BaseCriteriasComponent";
import ImportFromCommunitiesComponent from "./ImportFromCommunitiesComponent";
import Community from "../models/Community";
import Profile from "../models/Profile";
import {AppState} from "../state/state";
import LoginComponent from "./LoginComponent";
import {login, logout} from "../actions/authActions";
import AuthUser from "../models/AuthUser";


interface AppProps {
    profiles: Profile[],
    communities: Community[],
    authUser: AuthUser
    onLogin: () => void,
    onLogout: () => void,
    onAddCommunity: (url: string) => void
}

class AppComponent extends React.Component<AppProps, undefined> {

    render() {
        return (
            <div>
                <LoginComponent onLogin={() => this.props.onLogin()}
                                onLogout={() => this.props.onLogout()}
                                authUser={this.props.authUser}/>
                <ImportFromCommunitiesComponent communities={this.props.communities}
                                                onAddCommunity={(s) => this.props.onAddCommunity(s)}/>
                <BaseCriteriasComponent />
                <ProfileListComponent profiles={this.props.profiles}/>
            </div>
        );
    }
}

function mapStateToProps(state: AppState) {

    return {
        communities: state.communities.list,
        profiles: state.profiles.list,
        authUser: state.auth.user
    };
}
function mapDispatchToProps(dispatch: Function) {

    return {
        onAddCommunity: (name: string) => dispatch(addCommunity(name)),
        onLogin: () => dispatch(login()),
        onLogout: () => dispatch(logout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
