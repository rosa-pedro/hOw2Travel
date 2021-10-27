import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name={'Home'} component={HomeScreen} />
            <Screen name={'Details'} component={DetailsScreen} />
        </Navigator>
    );
}

export default HomeNavigator;
