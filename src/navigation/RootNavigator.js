import React from 'react';
import HomeScreen from "../screens/HomeScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AboutScreen from "../screens/AboutScreen";
import TransportationListScreen from "../screens/TransportationListScreen";
import TransportationScreen from "../screens/TransportationScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name={'Home'} component={HomeScreen} />
            <Screen name={'EditProfile'} component={EditProfileScreen} />
            <Screen name={'About'} component={AboutScreen} />
            <Screen name={'TransportationList'} component={TransportationListScreen} />
            <Screen name={'Transportation'} component={TransportationScreen} />
        </Navigator>
    );
}

export default HomeNavigator;
