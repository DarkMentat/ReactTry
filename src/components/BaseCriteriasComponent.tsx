import * as React from "react";


export interface BaseCriteriasProps {

}

export default class BaseCriteriasComponent extends React.Component<BaseCriteriasProps, undefined> {
    render() {
        return (
            <div className="base-criterias">
                <form>
                    <div>Location:</div>
                    <div>
                        <p><input type="text" placeholder="Country"/></p>
                        <p><input type="text" placeholder="City"/></p>
                    </div>
                    <div>Age:</div>
                    <div>
                        <input type="text" placeholder="From"/>
                        <input type="text" placeholder="To"/>
                    </div>
                </form>
            </div>
        );
    }
}
