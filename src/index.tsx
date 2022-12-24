import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()}
             addPost={store.addPost.bind(store)}
             changeNewText={store.changeNewText.bind(store)}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)