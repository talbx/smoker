import React from 'react';
import {Button, Footer, FooterTab, Icon,} from 'native-base';
import {createBottomTabNavigator} from "react-navigation";
import DashboardScreen from "./dashboard/DashboardScreen";
import {aboutStack, settingsStack} from "./Stacks";

const DASHBOARD = "Dashboard";
const SETTINGS = "Settings";
const ABOUT = "About";

export const tabNavigator = createBottomTabNavigator({
        Dashboard: {screen: DashboardScreen},
        Settings: {screen: settingsStack},
        About: {screen: aboutStack}
    },
    {
        tabBarPosition: 'bottom',
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