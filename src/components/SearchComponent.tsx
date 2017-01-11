import * as React from "react";


export interface SearchProps {

    onSearchClick: () => void;
}

export default class SearchComponent extends React.Component<SearchProps, undefined> {
    render() {
        return (
            <div>
                <button onClick={(e) => this.props.onSearchClick() } >Search</button>
            </div>
        );
    }
}
