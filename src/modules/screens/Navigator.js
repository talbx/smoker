import React from 'react';
import {Button, Footer, FooterTab, Icon, Text,} from 'native-base';
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import {dashboardScreen} from "./DashboardScreen";
import {aboutScreen} from "./AboutScreen";
import {settingsScreen} from "./SettingsScreen";
import {Screens} from "./Screens";
import {profileSettings} from "./ProfileSettings";


export const settingsStack = createStackNavigator({
        SettingsOverview: {screen: settingsScreen},
        ProfileSettings: {screen: profileSettings}
    },
    {
        order: ['SettingsOverview', 'ProfileSettings', 'CigaretteSettings'],
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
                            vertical
                            active={props.navigation.state.index === 0}
                            onPress={() => props.navigation.navigate(Screens.DASHBOARD.title)}>
                            <Icon name={Screens.DASHBOARD.icon}/>
                            <Text>Dashboard</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 1}
                            onPress={() => props.navigation.navigate(Screens.SETTINGS.title)}>
                            <Icon name={Screens.SETTINGS.icon}/>
                            <Text>Settings</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 2}
                            onPress={() => props.navigation.navigate(Screens.ABOUT.title)}>
                            <Icon name={Screens.ABOUT.icon}/>
                            <Text>About</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    });
export default tabNavigator;