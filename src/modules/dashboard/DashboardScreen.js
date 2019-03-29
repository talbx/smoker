import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux";
import {createCleanSince} from "../../utils/TimerUtils";
import {calculateCigarettes, calculatePacks, calculateSavedMoney} from "../../utils/Savings";
import {SavingsIndicator} from "./SavingsIndicator";

class DashboardScreen extends React.Component {

    constructor(props) {
        super(props);
        const cigs = calculateCigarettes(this.props.settings.smoking.stopSmokingDate, this.props.settings.smoking.cigarettesPerDay);
        const packs = calculatePacks(cigs, this.props.settings.smoking.cigarettesPerPack);
        const money = calculateSavedMoney(packs, this.props.settings.smoking.pricePerPack);
        console.log(cigs, packs, money);
        this.state = {
            cleanSince: createCleanSince(new Date(), this.props.settings.smoking.stopSmokingDate),
            cigSavings: cigs,
            packSavings: packs,
            moneySavings: money
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
                    <SavingsIndicator savedMoney={this.state.moneySavings}
                                      nonBoughtPacks={this.state.packSavings}
                                      nonSmokedCigars={this.state.cigSavings}/>
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
                    <SavingsIndicator savedMoney={this.state.moneySavings}
                                      nonBoughtPacks={this.state.packSavings}
                                      nonSmokedCigars={this.state.cigSavings}/>
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
                    <SavingsIndicator savedMoney={this.state.moneySavings}
                                      nonBoughtPacks={this.state.packSavings}
                                      nonSmokedCigars={this.state.cigSavings}/>
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
    return {
        settings: state.settings
    }
};

export const dashboardScreen = connect(mapStateToProps)(DashboardScreen);