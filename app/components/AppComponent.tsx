import * as React from "react";
import {connect} from "react-redux";
import {addCommunity} from "../actions/comunitiesActions";
import ProfileListComponent from "./ProfileListComponent";
import BaseCriteriasComponent from "./BaseCriteriasComponent";
import ImportFromCommunitiesComponent from "./ImportFromCommunitiesComponent";
import Community from "../models/Community";
import Profile from "../models/Profile";


export interface AppProps {
    profiles: Profile[],
    communities: Community[],
    onAddCommunity: (url: string) => void
}

class AppComponent extends React.Component<AppProps, undefined> {

    render() {
        return (
            <div>
                <ImportFromCommunitiesComponent communities={this.props.communities} onAddCommunity={(s) => this.props.onAddCommunity(s)} />
                <BaseCriteriasComponent />
                <ProfileListComponent profiles={this.props.profiles} />
            </div>
        );
    }
}

function mapStateToProps (state: any) {

    return {
      communities: state.communities.list,
      profiles: state.profiles.list
    };
}
function mapDispatchToProps(dispatch: any) {

    return {
      onAddCommunity: (name: string) => dispatch(addCommunity(name))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
