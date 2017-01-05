import * as React from "react";
import {Jumbotron} from "react-bootstrap";
import ProfileComponent from "./ProfileComponent";
import Profile from "../models/Profile";


export interface ProfileListProps {

    profiles: Profile[];
}

export default class ProfileListComponent extends React.Component<ProfileListProps, undefined> {
    render() {

        let content = this.props.profiles.map(prof =>
            <ProfileComponent key={prof.url} profile={prof}/>
        );

        return <div><Jumbotron className="profile-list">{ content }</Jumbotron></div>
    }
}
