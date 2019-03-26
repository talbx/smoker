import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux";
import {createCleanSince} from "../../utils/TimerUtils";

class DashboardScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cleanSince: createCleanSince(new Date(), this.props.settings.stopSmokingDate)};
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick2(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick2() {
        this.setState({
            counter: this.state.cleanSince = createCleanSince(new Date(), this.props.settings.stopSmokingDate)
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.welcome}>Moin moin {this.props.settings.username}!</Text>
                    <Text style={styles.instructions}>You are clean since{"\n"}
                        {this.state.cleanSince.months} Months{"\n"}
                        {this.state.cleanSince.weeks} Weeks{"\n"}
                        {this.state.cleanSince.days} Days{"\n"}
                        {this.state.cleanSince.hours} Hours{"\n"}
                        {this.state.cleanSince.minutes} Minutes and{"\n"}
                        {this.state.cleanSince.seconds} Seconds
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#95D3BF',
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