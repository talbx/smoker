import React, {Component} from "react";
import {Text, View} from "react-native";
import {connect} from "react-redux";

class LevelsOverview extends Component {
    render() {
        return (
            <View>
                <Text>Moin</Text>
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        profile: state.settings.profile
    }
};


export default connect(mapStateToProps)(LevelsOverview);