import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {getStopSmokingDate} from "../../state/selectors";

class SavingsIndicator extends Component {

    static propTypes = {
        savedMoney: PropTypes.number.isRequired,
        nonSmokedCigars: PropTypes.number.isRequired,
        nonBoughtPacks: PropTypes.number.isRequired,
        brand: PropTypes.string.isRequired
    };

    render() {
        return (
            <View>
                <Text style={styles.instructions}>You did not smoke a total of{"\n"}
                    {this.props.nonSmokedCigars} {this.props.brand} Cigarettes, did not buy{"\n"}
                    {this.props.nonBoughtPacks} Packs of Cigarettes and saved{"\n"}
                    {this.props.savedMoney} $$$.{"\n"}
                    Your stop smoking date = {this.props.stopSmokingDate.toDateString()}
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    instructions: {
        color: '#225344',
        textAlign: 'center',
        marginLeft: 24,
        marginRight: 24,
        fontSize: 16,
        lineHeight: 30
    }
});
const mapStateToProps = state => {
    return {
        stopSmokingDate: getStopSmokingDate(state),
    };
};

export default connect(mapStateToProps)(SavingsIndicator);