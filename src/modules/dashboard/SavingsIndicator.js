import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {getStopSmokingDate} from "../../state/selectors";
import {calculateCigarettes, calculatePacks, calculateSavedMoney} from "../../utils/Savings";

class SavingsIndicator extends Component {

    static propTypes = {
        savedMoney: PropTypes.number.isRequired,
        nonSmokedCigars: PropTypes.number.isRequired,
        nonBoughtPacks: PropTypes.number.isRequired
    };

    render() {
        return (
            <View>
                <Text style={styles.instructions}>You did not smoke a total of{"\n"}
                    {this.props.cigs} Cigarettes, did not buy{"\n"}
                    {this.props.packs} Packs of Cigarettes and saved{"\n"}
                    {this.props.price} $$$.{"\n"}
                    Your stop smoking date = {this.props.stopSmokingDate.toDateString()}
                </Text>
            </View>
        );
    }

    recalculate(){
        
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
    const statex =
    {
        stopSmokingDate: getStopSmokingDate(state),
        cigsPerDay: state.settings.smoking.cigarettesPerDay,
        cigsPerPack: state.settings.smoking.cigarettesPerPack,
        pricePerPack: state.settings.smoking.pricePerPack
    };

    const cigs= calculateCigarettes(statex.stopSmokingDate, statex.cigsPerDay)
    const packs = calculatePacks(cigs, statex.cigsPerPack);
    const price = calculateSavedMoney(packs, statex.pricePerPack);

    return {
        stopSmokingDate: getStopSmokingDate(state),
        cigs: cigs,
        packs: packs,
        price: price
    };
};

export default connect(mapStateToProps)(SavingsIndicator);