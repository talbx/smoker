import React, {Component} from 'react';
import {AsyncStorage, ImageBackground, StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import SmokerTimer from "./SmokerTimer";
import ProgressIndicator from "./components/ProgressIndicator";
import {LOAD_STATE} from "../../state/actions";
import {fakeState} from "../../state/fake.state";

class DashboardScreen extends Component {

    async componentDidMount() {
        console.log("setting fake state");
        AsyncStorage.setItem('state', JSON.stringify(fakeState));
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('./../../bg2.jpg')}
                                 style={{width: '100%', height: '70%'}}>
                    <View style={styles.container}>
                        <SmokerTimer/>
                        <ProgressIndicator/>
                    </View>
                </ImageBackground>
            </View>
        );
    }

    async load() {
        let item = await AsyncStorage.getItem('state');
        if (item) {
            let parse = JSON.parse(item);
            console.log("state from storeage.");
            console.log(parse);
            this.props.loadState(item);
        }
    }

    fetch() {
        console.log(this.props.settings.profile.username)
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingTop: 50,
    }
});
const mapStateToProps = state => {
    return {
        settings: state.settings,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadState: (state) => dispatch({type: LOAD_STATE, payload: state}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);