import React, {Component} from "react";
import {Text} from "native-base";
import {StyleSheet, View} from "react-native";
import {createCleanSince} from "../../utils/TimerUtils";
import {getStopSmokingDate, getUsername} from "../../state/selectors";
import {connect} from "react-redux";

class SmokerTimer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cleanSince: createCleanSince(new Date(), this.props.stopSmokingDate),
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
            counter: this.state.cleanSince = createCleanSince(new Date(), this.props.stopSmokingDate)
        });
    }

    render() {
        return (
            <View>
                <Text style={styles.instructions}>{this.props.username}, you are clean since{"\n"}</Text>
                <Text style={styles.welcome}>{this.state.cleanSince.months}M&nbsp;
                    {this.state.cleanSince.days}d&nbsp;
                    {this.state.cleanSince.hours}h&nbsp;
                    {this.state.cleanSince.minutes}min&nbsp;
                    {this.state.cleanSince.seconds}s</Text>
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
    },
    instructions: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 24,
        marginRight: 24,
        fontSize: 16,
        lineHeight: 30
    }
});
const mapStateToProps = state => {
    return {
        username: getUsername(state),
        stopSmokingDate: getStopSmokingDate(state),
    };
};

export default connect(mapStateToProps)(SmokerTimer)