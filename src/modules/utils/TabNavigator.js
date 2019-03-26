import {createBottomTabNavigator} from 'react-navigation';
import {AboutScreen} from "../screens/about/AboutScreen";
import React from 'react';
import {dashboardScreen} from "../screens/dashboard/DashboardScreen";

export const TabNavigator = createBottomTabNavigator(
    {
        Dashboard: {screen: dashboardScreen},
        About: {screen: AboutScreen}
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    });

