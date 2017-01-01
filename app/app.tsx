import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import vkSeeker from "./reducers";
import AppComponent from "./components/AppComponent";


let store = createStore(vkSeeker);

ReactDOM.render(
    <Provider store={store}>
        <AppComponent />
    </Provider>,
    document.getElementById("reactRoot")
);
