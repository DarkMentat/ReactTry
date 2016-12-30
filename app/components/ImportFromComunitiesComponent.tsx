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
      this.setState({ ...this.state, text: "", comunities: [...this.state.comunities, this.state.text]})

    }

    render() {

        let comunityNames = this.state.comunities.map( name =>

            <div>{name}</div>
        )

        return (
          <div className="import-from-comunities">
            <form onSubmit={(e) => this.onAddComunity(e) } >
                <input type="text" value={this.state.text} onChange={ e => this.onTextChange(e) }/>
                <button onClick={(e) => this.onAddComunity(e) } />
            </form>
            {comunityNames}
          </div>
        )
    }
}
