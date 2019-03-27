import React from 'react';
import {Button, Footer, FooterTab, Icon, Text, View, } from 'native-base';
import {createBottomTabNavigator} from "react-navigation";
import {dashboardScreen} from "../screens/dashboard/DashboardScreen";
import {AboutScreen} from "../screens/about/AboutScreen";
import SettingsScreen, {settingsScreen} from "../screens/settings/SettingsScreen";

class Lucy extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Lucy</Text>
            </View>
        );
    }
}

class Nine extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Nine</Text>
            </View>
        );
    }
}

class Jade extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Jade</Text>
            </View>
        );
    }
}

let tabNavigator = createBottomTabNavigator({
        Dashboard: {screen: dashboardScreen},
        Settings: {screen: settingsScreen},
        About: {screen: AboutScreen}
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigation.state.index === 0}
                            onPress={() => props.navigation.navigate("Dashboard")}>
                            <Icon name="ios-speedometer"/>
                            <Text>Dashboard</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 1}
                            onPress={() => props.navigation.navigate("Settings")}>
                            <Icon name="ios-options"/>
                            <Text>Settings</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 2}
                            onPress={() => props.navigation.navigate("About")}>
                            <Icon name="ios-information"/>
                            <Text>About</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    });
export default tabNavigator;