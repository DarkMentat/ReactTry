import * as React from "react";

import {Jumbotron} from "react-bootstrap";

import ProfileComponent from "./ProfileComponent"

import Profile from "../models/Profile"


export interface ProfileListProps {

    profiles: Profile[];
}

export default class ProfileListComponent extends React.Component<ProfileListProps, undefined> {
    render() {

        let content = this.props.profiles.map(
          (prof, index) => <ProfileComponent key={index} profile={prof}/>
        )

        return <Jumbotron>{ content }</Jumbotron>
    }
}
