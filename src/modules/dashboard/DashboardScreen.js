import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux";
import SmokerTimer from "./SmokerTimer";
import ProgressIndicator from "./components/ProgressIndicator";

class DashboardScreen extends Component {

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

export default connect(mapStateToProps)(DashboardScreen);