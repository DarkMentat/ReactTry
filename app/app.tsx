import * as React from "react";
import * as ReactDOM from "react-dom";

import ProfileListComponent from "./components/ProfileListComponent";

ReactDOM.render(
    <ProfileListComponent profiles={[{url:"vk.com/id1"}, {url:"vk.com/id2"}]} />,
    document.getElementById("reactRoot")
);
