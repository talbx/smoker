import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux";
import {createCleanSince} from "../../utils/TimerUtils";
import {calculateCigarettes, calculatePacks, calculateSavedMoney} from "../../utils/Savings";
import SavingsIndicator from "./SavingsIndicator";
import {getStopSmokingDate} from "../../state/selectors";

class DashboardScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cleanSince: createCleanSince(new Date(), this.props.settings.smoking.stopSmokingDate),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick2(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick2() {
        this.setState({
            counter: this.state.cleanSince = createCleanSince(new Date(), this.props.settings.smoking.stopSmokingDate)
        });
    }

    render() {
        if (this.state.cleanSince.years > 0) {
            return this.years();
        }
        return this.state.cleanSince.months > 0 ? this.months() : this.days();
    }

    years() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.welcome}>Moin moin {this.props.settings.profile.username}!</Text>
                    <Text style={styles.instructions}>You are clean since{"\n"}
                        {this.state.cleanSince.years} Years{"\n"}
                        {this.state.cleanSince.months} Months{"\n"}
                        {this.state.cleanSince.days} Days{"\n"}
                        {this.state.cleanSince.hours} Hours{"\n"}
                        {this.state.cleanSince.minutes} Minutes and{"\n"}
                        {this.state.cleanSince.seconds} Seconds
                    </Text>
                    <SavingsIndicator savedMoney={this.props.price}
                                      nonBoughtPacks={this.props.packs}
                                      nonSmokedCigars={this.props.cigs}/>
                </ScrollView>
            </View>
        );
    }


    months() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.welcome}>Moin moin {this.props.settings.profile.username}!</Text>
                    <Text style={styles.instructions}>You are clean since{"\n"}
                        {this.state.cleanSince.months} Months{"\n"}
                        {this.state.cleanSince.days} Days{"\n"}
                        {this.state.cleanSince.hours} Hours{"\n"}
                        {this.state.cleanSince.minutes} Minutes and{"\n"}
                        {this.state.cleanSince.seconds} Seconds
                    </Text>
                    <SavingsIndicator savedMoney={this.props.price}
                                      nonBoughtPacks={this.props.packs}
                                      nonSmokedCigars={this.props.cigs}/>
                </ScrollView>
            </View>
        );
    }

    days() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.welcome}>Moin moin {this.props.settings.profile.username}!</Text>
                    <Text style={styles.instructions}>You are clean since{"\n"}
                        {this.state.cleanSince.days} Days{"\n"}
                        {this.state.cleanSince.hours} Hours{"\n"}
                        {this.state.cleanSince.minutes} Minutes and{"\n"}
                        {this.state.cleanSince.seconds} Seconds
                    </Text>
                    <SavingsIndicator savedMoney={this.props.price}
                                      nonBoughtPacks={this.props.packs}
                                      nonSmokedCigars={this.props.cigs}/>
                </ScrollView>
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
    const statex = {
            settings: state.settings,
            stopSmokingDate: getStopSmokingDate(state),
            cigsPerDay: state.settings.smoking.cigarettesPerDay,
            cigsPerPack: state.settings.smoking.cigarettesPerPack,
            pricePerPack: state.settings.smoking.pricePerPack
        };

    const cigs= calculateCigarettes(statex.stopSmokingDate, statex.cigsPerDay);
    const packs = calculatePacks(cigs, statex.cigsPerPack);
    const price = calculateSavedMoney(packs, statex.pricePerPack);

    return {
        settings: state.settings,
        cigs: cigs,
        packs: packs,
        price: price
    };
};

export const dashboardScreen = connect(mapStateToProps)(DashboardScreen);