import * as React from "react";

import Comunity from "../models/Comunity"


export interface ImportFromComunitiesProps {

    text?: string;
    comunities: Comunity[];
    onAddComunity: (name:string) => void;
}

export interface ImportFromComunitiesState {

    text: string;
}

export default class ImportFromComunitiesComponent extends React.Component<ImportFromComunitiesProps, ImportFromComunitiesState> {

    constructor(props: ImportFromComunitiesProps) {
      super(props);

      this.state = {
        text: this.props.text || ''
      };
    }

    onTextChange(e: any) {
      this.setState({ ...this.state, text: e.target.value });
    }
    onAddComunity(e: any) {
      e.preventDefault();

      this.props.onAddComunity(this.state.text);
      this.setState({ ...this.state, text: ""});
    }

    render() {

        let form = (
          <form onSubmit={(e) => this.onAddComunity(e) } >
              <input type="text" placeholder="Comunity name" value={this.state.text} onChange={ e => this.onTextChange(e) }/>
              <button onClick={(e) => this.onAddComunity(e) } >+</button>
          </form>
        )

        let comunityNames = this.props.comunities.map(comunity =>
            <div key={comunity.url}>{comunity.url}</div>
        )

        return (
          <div className="import-from-comunities">
            {form}
            {comunityNames}
          </div>
        )
    }
}
