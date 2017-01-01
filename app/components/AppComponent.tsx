import * as React from "react";

import { connect } from 'react-redux'

import { addComunity } from '../actions/comunitiesActions';

import ProfileListComponent from "./ProfileListComponent";
import BaseCriteriasComponent from "./BaseCriteriasComponent";
import ImportFromComunitiesComponent from "./ImportFromComunitiesComponent";

import Comunity from "../models/Comunity"
import Profile from "../models/Profile"


export interface AppProps {
    profiles: Profile[],
    comunities: Comunity[],
    onAddComunity: (url: string) => void
}

class AppComponent extends React.Component<AppProps, undefined> {

    render() {
        return (
            <div>
                <ImportFromComunitiesComponent comunities={this.props.comunities} onAddComunity={(s) => this.props.onAddComunity(s)} />
                <BaseCriteriasComponent />
                <ProfileListComponent profiles={this.props.profiles} />
            </div>
        );
    }
}

function mapStateToProps (state: any) {

    return {
      comunities: state.comunities.list,
      profiles: state.profiles.list
    };
};
function mapDispatchToProps(dispatch: any) {

    return {
      onAddComunity: (name: string) => dispatch(addComunity(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
