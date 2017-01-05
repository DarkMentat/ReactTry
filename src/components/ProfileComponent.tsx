import * as React from "react";
import Profile from "../models/Profile";


export interface ProfileProps {
    profile: Profile;
}

export default class ProfileComponent extends React.Component<ProfileProps, undefined> {
    render() {
        return <p>{this.props.profile.url}</p>;
    }
}
