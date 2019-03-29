import React from 'react';
import {Button, Footer, FooterTab, Icon,} from 'native-base';
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import {dashboardScreen} from "./dashboard/DashboardScreen";
import {aboutScreen} from "./about/AboutScreen";
import {settingsScreen} from "./settings/SettingsScreen";

import {profileSettings} from "./settings/ProfileSettings";
import {smokingSettings} from "./settings/SmokingSettings";

const DASHBOARD = "Dashboard";
const SETTINGS = "Settings";
const ABOUT = "About";

export const settingsStack = createStackNavigator({
        SettingsOverview: {screen: settingsScreen},
        ProfileSettings: {screen: profileSettings},
        SmokingSettings: {screen: smokingSettings}
    },
    {
        order: ['SettingsOverview', 'ProfileSettings', 'SmokingSettings'],
    });

export const tabNavigator = createBottomTabNavigator({
        Dashboard: {screen: dashboardScreen},
        Settings: {screen: settingsStack},
        About: {screen: aboutScreen}
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            active={props.navigation.state.index === 0}
                            onPress={() => props.navigation.navigate(DASHBOARD)}>
                            <Icon type="MaterialCommunityIcons" name="smoking"/>
                        </Button>
                        <Button
                            active={props.navigation.state.index === 1}
                            onPress={() => props.navigation.navigate(SETTINGS)}>
                            <Icon type="Ionicons" name="ios-options"/>
                        </Button>
                        <Button
                            active={props.navigation.state.index === 2}
                            onPress={() => props.navigation.navigate(ABOUT)}>
                            <Icon type="MaterialIcons" name="info-outline"/>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    });
export default tabNavigator;