import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import SmokerTimer from "./SmokerTimer";
import ProgressIndicator from "./components/ProgressIndicator";

class DashboardScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <SmokerTimer/>
                <ProgressIndicator/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    }
});
const mapStateToProps = state => {
    return {
        settings: state.settings,
    };
};
export default connect(mapStateToProps)(DashboardScreen);