import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import TransportListScreen from "../screens/TransportListScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            {/*<Screen name={'Home'} component={HomeScreen} />
            <Screen name={'Details'} component={DetailsScreen} />*/}
            <Screen name={'TransportList'} component={TransportListScreen} />
        </Navigator>
    );
}

export default HomeNavigator;
