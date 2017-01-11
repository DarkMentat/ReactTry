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
import AuthSession from "../models/AuthSession";
import SearchComponent from "./SearchComponent";
import {searchCommunity} from "../actions/vkActions";


interface AppProps {
    profiles: Profile[],
    communities: Community[],
    authUser: AuthUser,
    authSession: AuthSession,
    onSearch: (url: string, session: AuthSession) => void,
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
                <SearchComponent onSearchClick={() => this.props.onSearch(this.props.communities[0].url, this.props.authSession)}/>
                <ProfileListComponent profiles={this.props.profiles}/>
            </div>
        );
    }
}

function mapStateToProps(state: AppState) {

    return {
        communities: state.communities.list,
        profiles: state.profiles.list,
        authUser: state.auth.user,
        authSession: state.auth.session,
    };
}
function mapDispatchToProps(dispatch: Function) {

    return {
        onAddCommunity: (name: string) => dispatch(addCommunity(name)),
        onLogin: () => dispatch(login()),
        onLogout: () => dispatch(logout()),
        onSearch: (url: string, session: AuthSession) => dispatch(searchCommunity(url, session))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
