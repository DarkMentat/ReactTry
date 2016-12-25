import * as React from "react";
import * as ReactDOM from "react-dom";

import ProfileListComponent from "./components/ProfileListComponent";

import Profile from "./models/Profile"


ReactDOM.render(
    <ProfileListComponent profiles={[{url:"vk.com/darkmentat"}, {url:"vk.com/id0"}]} />,
    document.getElementById("reactRoot")
);
