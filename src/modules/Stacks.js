import {createStackNavigator} from "react-navigation";
import SettingsScreen from "./settings/SettingsScreen";
import ProfileSettings from "./settings/components/ProfileSettings";
import SmokingSettings from "./settings/components/SmokingSettings";
import AboutScreen from "./about/AboutScreen";

export const settingsStack = createStackNavigator({
    SettingsOverview: {screen: SettingsScreen},
    ProfileSettings: {screen: ProfileSettings},
    SmokingSettings: {screen: SmokingSettings}
});

export const aboutStack = createStackNavigator({
    About: {screen: AboutScreen}
});