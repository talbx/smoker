import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import {connect} from "react-redux";
import {createCleanSince} from "../../utils/TimerUtils";
import SavingsIndicator from "./SavingsIndicator";
import {getStopSmokingDate} from "../../state/selectors";
import {calculateCigarettes, calculateLifetime, calculatePacks, calculateSavedMoney} from "../../utils/Savings";

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
                        {this.state.cleanSince.seconds} Seconds{"\n"}
                    </Text>
                    <SavingsIndicator savedMoney={this.props.price}
                                      nonBoughtPacks={this.props.packs}
                                      nonSmokedCigars={this.props.cigs}
                                      brand={this.props.brand}
                                      lifetime={this.props.lifetime}/>
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
                        {this.state.cleanSince.seconds} Seconds{"\n"}
                    </Text>
                    <SavingsIndicator savedMoney={this.props.price}
                                      nonBoughtPacks={this.props.packs}
                                      nonSmokedCigars={this.props.cigs}
                                      brand={this.props.brand}
                                      lifetime={this.props.lifetime}/>
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
                        {this.state.cleanSince.seconds} Seconds{"\n"}
                    </Text>
                    <SavingsIndicator savedMoney={this.props.price}
                                      nonBoughtPacks={this.props.packs}
                                      nonSmokedCigars={this.props.cigs}
                                      brand={this.props.brand}
                                      lifetime={this.props.lifetime}/>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
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
    }
});
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
export default connect(mapStateToProps)(DashboardScreen);