import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import MenuDrawerContent from "../components/MenuDrawerContent";

const { Navigator, Screen } = createDrawerNavigator();

const HomeNavigator = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={props => <MenuDrawerContent {...props} />}
        >
            <Screen name={'Users'} component={HomeScreen} />
            <Screen name={'Orders'} component={DetailsScreen} />
        </Navigator>
    );
}

export default HomeNavigator;
