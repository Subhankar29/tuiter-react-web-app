import React from "react";
import hello from "./reducers/hello";
import {Provider} from "react-redux";
import HelloReduxExampleComponent from "./reducers/hello-redux-example-component";
import todos from "./reducers/todo-reducer";
import { configureStore } from '@reduxjs/toolkit';
import Todos from "./todos-component";

const store = configureStore({
    reducer: {hello, todos}
});


const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;