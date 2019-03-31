import {createStackNavigator} from "react-navigation";
import {settingsScreen} from "./settings/SettingsScreen";
import {profileSettings} from "./settings/ProfileSettings";
import {smokingSettings} from "./settings/SmokingSettings";
import {aboutScreen} from "./about/AboutScreen";

export const settingsStack = createStackNavigator({
    SettingsOverview: {screen: settingsScreen},
    ProfileSettings: {screen: profileSettings},
    SmokingSettings: {screen: smokingSettings}
});

export const aboutStack = createStackNavigator({
    About: {screen: aboutScreen}
});