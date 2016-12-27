import * as React from "react";

import Profile from "../models/Profile"


export interface ProfleProps {
    profile: Profile;
}

export default class ProfileComponent extends React.Component<ProfleProps, undefined> {
    render() {
        return <p>{this.props.profile.url}</p>;
    }
}
