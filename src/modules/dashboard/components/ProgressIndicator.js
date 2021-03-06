import React, {Component} from 'react';
import ProgressCircle from 'react-native-progress-circle'
import {StyleSheet, Text, View} from "react-native";
import {Label} from 'native-base'
import {getStopSmokingDate} from "../../../state/selectors";
import {connect} from "react-redux";
import {calculateCigarettes, calculateLifetime, calculatePacks, calculateSavedMoney} from "../../../utils/Savings";
import {evaluateLevel} from "../../levels/Level";

class ProgressIndicator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let cigarettePercentage = (this.props.cigs / evaluateLevel(this.props.cigs, this.props.price).cigarettesGoal) * 100;
        let cashPercentage = (this.props.price / evaluateLevel(this.props.cigs, this.props.price).cashGoal) * 100;

        return (
            <View style={styles.container}>
                <View style={styles.progressContainer}>
                    <View style={styles.progress}>
                        <ProgressCircle
                            percent={cashPercentage}
                            radius={50}
                            borderWidth={8}
                            color={yellow}
                            shadowColor="gainsboro"
                            bgColor="white">
                            <Text style={{fontSize: 18}}>{this.props.price}€</Text>
                        </ProgressCircle>
                        <Label>Cash</Label>
                    </View>
                    <View style={styles.progress}>
                        <ProgressCircle
                            percent={13}
                            radius={50}
                            borderWidth={8}
                            color={red}
                            shadowColor="gainsboro"
                            bgColor="white">
                            <Text style={{fontSize: 18}}>{this.props.packs} Packs</Text>
                        </ProgressCircle>
                        <Label>Packs</Label>
                    </View>
                    <View style={styles.progress}>
                        <ProgressCircle
                            percent={cigarettePercentage}
                            radius={50}
                            borderWidth={8}
                            color={green}
                            shadowColor="gainsboro"
                            bgColor="white">
                            <Text style={{fontSize: 18}}>{this.props.cigs}</Text>
                        </ProgressCircle>
                        <Label>Cigarettes</Label>
                    </View>
                </View>
                <Text style={styles.level}>You are on level {evaluateLevel(this.props.cigs, this.props.price).name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    progressContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: "5%",
        marginEnd: "2%",
        marginStart: "2%",
        bottom: 0,
        position: 'relative',
        margin: 0
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        bottom: 0,
        position: 'relative',
        margin: 0
    },
    progress: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: "space-between",
        marginBottom: "20%"
    },
    level: {
        textAlign: 'center'
    }
});

const yellow = 'khaki';
const green = 'limegreen';
const red = 'tomato';

const mapStateToProps = state => {
    const statex = {
        settings: state.settings,
        stopSmokingDate: getStopSmokingDate(state),
        cigsPerDay: state.settings.smoking.cigarettesPerDay,
        cigsPerPack: state.settings.smoking.cigarettesPerPack,
        pricePerPack: state.settings.smoking.pricePerPack,
        gender: state.settings.profile.gender
    };

    const cigs = calculateCigarettes(statex.stopSmokingDate, statex.cigsPerDay);
    const packs = calculatePacks(cigs, statex.cigsPerPack);
    const price = calculateSavedMoney(packs, statex.pricePerPack);
    const lifetime = calculateLifetime(cigs, statex.gender);

    return {
        settings: state.settings,
        cigs: cigs,
        packs: packs,
        price: price,
        brand: state.settings.smoking.cigaretteBrand,
        lifetime: lifetime
    };
};

export default connect(mapStateToProps)(ProgressIndicator);