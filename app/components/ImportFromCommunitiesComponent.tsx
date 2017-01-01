import * as React from "react";
import Community from "../models/Community";


export interface ImportFromCommunitiesProps {

    text?: string;
    communities: Community[];
    onAddCommunity: (name:string) => void;
}

export interface ImportFromCommunitiesState {

    text: string;
}

export default class ImportFromCommunitiesComponent extends React.Component<ImportFromCommunitiesProps, ImportFromCommunitiesState> {

    constructor(props: ImportFromCommunitiesProps) {
      super(props);

      this.state = {
        text: this.props.text || ''
      };
    }

    onTextChange(e: any) {
      this.setState({ ...this.state, text: e.target.value });
    }
    onAddCommunity(e: any) {
      e.preventDefault();

      this.props.onAddCommunity(this.state.text);
      this.setState({ ...this.state, text: ""});
    }

    render() {

        let form = (
          <form onSubmit={(e) => this.onAddCommunity(e) } >
              <input type="text" placeholder="Community name" value={this.state.text} onChange={ e => this.onTextChange(e) }/>
              <button onClick={(e) => this.onAddCommunity(e) } >+</button>
          </form>
        );

        let communityNames = this.props.communities.map(community =>
            <div key={community.url}>{community.url}</div>
        );

        return (
          <div className="import-from-communities">
            {form}
            {communityNames}
          </div>
        )
    }
}
