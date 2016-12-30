import * as React from "react";

import ProfileListComponent from "./ProfileListComponent";
import BaseCriteriasComponent from "./BaseCriteriasComponent";
import ImportFromComunitiesComponent from "./ImportFromComunitiesComponent";

export interface AppProps {

}

export default class AppComponent extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div>

                <ImportFromComunitiesComponent />
                <BaseCriteriasComponent />
                <ProfileListComponent profiles={[{url:"vk.com/id1"}, {url:"vk.com/id2"}]} />

            </div>
        );
    }
}
