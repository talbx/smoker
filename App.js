import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import {smokerReducer} from "./src/modules/state/reducer";
import {createAppContainer} from 'react-navigation';
import tabNavigator from "./src/modules/screens/Navigator";
import {initialState} from "./src/modules/state/initial";

const store = createStore(smokerReducer, initialState);
const AppContainer = createAppContainer(tabNavigator);
export default class AppComponent extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        )
    };
}
