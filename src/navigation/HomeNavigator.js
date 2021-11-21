import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import MenuDrawerContent from "../components/MenuDrawerContent";
import TransportListScreen from "../screens/TransportListScreen";

const { Navigator, Screen } = createDrawerNavigator();

const HomeNavigator = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={props => <MenuDrawerContent {...props} />}
        >
            <Screen name={'Users'} component={HomeScreen} />
            <Screen name={'Orders'} component={DetailsScreen} />
            <Screen name={'TransportList'} component={TransportListScreen} />
        </Navigator>
    );
}

export default HomeNavigator;
