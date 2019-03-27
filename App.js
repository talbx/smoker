import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import {smokerReducer} from "./src/modules/state/reducer";
import {createAppContainer} from 'react-navigation';
import tabNavigator from "./src/modules/Navigator/Navigator";


export const initialState = {
    settings: {
        username: 'Hansi',
        stopSmokingDate: new Date(2018, 11, 14),
        cigarettesPerDay: 20,
        cigarettesPerPack: 21,
        cigaretteBrand: "Gauloises",
        pricePerPack: "2.50"
    }
};

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
