import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import MenuDrawerContent from "../components/MenuDrawerContent";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const { Navigator, Screen } = createDrawerNavigator();

const HomeNavigator = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={props => <MenuDrawerContent {...props} />}
        >
            <Screen name={'Users'} component={HomeScreen} />
            <Screen name={'Orders'} component={DetailsScreen} />
            <Screen name={'SignIn'} component={SignInScreen} />
            <Screen name={'SignUp'} component={SignUpScreen} />
        </Navigator>
    );
}

export default HomeNavigator;
