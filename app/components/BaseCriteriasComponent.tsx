import * as React from "react";


export interface BaseCriteriasProps {

}

export default class BaseCriteriasComponent extends React.Component<BaseCriteriasProps, undefined> {
    render() {
        return (
            <div>
                <form>
                    <div>Location:</div>
                    <div>
                        <p><input type="text" value="Country"/></p>
                        <p><input type="text" value="City"/></p>
                    </div>
                    <div>Age:</div>
                    <div>
                        <input type="text" value="From"/>
                        <input type="text" value="To"/>
                    </div>
                </form>
            </div>
        );
    }
}
