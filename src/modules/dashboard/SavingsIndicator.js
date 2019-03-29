import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";

export class SavingsIndicator extends Component {

    static propTypes = {
        savedMoney: PropTypes.number.isRequired,
        nonSmokedCigars: PropTypes.number.isRequired,
        nonBoughtPacks: PropTypes.number.isRequired
    };

    render() {
        return (
            <View>
                <Text style={styles.instructions}>You did not smoke a total of{"\n"}
                    {this.props.nonSmokedCigars} Cigarettes, did not buy{"\n"}
                    {this.props.nonBoughtPacks} Packs of Cigarettes and saved{"\n"}
                    {this.props.savedMoney} $$$.
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        //backgroundColor: '#95D3BF',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
    },
    instructions: {
        color: '#225344',
        textAlign: 'center',
        marginLeft: 24,
        marginRight: 24,
        fontSize: 16,
        lineHeight: 30
    },

    boardicon: {
        alignItems: 'center',
        marginTop: 50
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },
    startButton: {
        width: 300,
        height: 45,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    }
});
const mapStateToProps = state => {
    return {
        smoking: state.settings.smoking
    }
};

export const savingsIndicator = connect(mapStateToProps)(SavingsIndicator);