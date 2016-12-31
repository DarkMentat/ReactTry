import * as React from "react";


export interface ImportFromComunitiesProps {

    text?: string;
}

export interface ImportFromComunitiesState {

    text: string;
    comunities: string[];
}

export default class ImportFromComunitiesComponent extends React.Component<ImportFromComunitiesProps, ImportFromComunitiesState> {

    constructor(props: ImportFromComunitiesProps) {
      super(props);

      this.state = {
        text: this.props.text || '',
        comunities: []
      };
    }

    onTextChange(e: any) {
      this.setState({ ...this.state, text: e.target.value });
    }
    onAddComunity(e: any) {
      e.preventDefault();

      if(!this.state.comunities.some(x => x == this.state.text)) {

        this.setState({ ...this.state, text: "", comunities: [...this.state.comunities, this.state.text]})
      } else {
        this.setState({ ...this.state, text: ""});
      }
    }

    render() {

        let form = (
          <form onSubmit={(e) => this.onAddComunity(e) } >
              <input type="text" placeholder="Comunity name" value={this.state.text} onChange={ e => this.onTextChange(e) }/>
              <button onClick={(e) => this.onAddComunity(e) } >+</button>
          </form>
        )

        let comunityNames = this.state.comunities.map( name =>

            <div key={name}>{name}</div>
        )

        return (
          <div className="import-from-comunities">
            {form}
            {comunityNames}
          </div>
        )
    }
}
