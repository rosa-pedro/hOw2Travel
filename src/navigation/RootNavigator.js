import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import MenuDrawerContent from "../components/MenuDrawerContent";
import TransportListScreen from "../screens/TransportListScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
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
            <Screen name={'Orders'} component={DetailsScreen} />
            <Screen name={'TransportList'} component={TransportListScreen} />
            <Screen name={'SignIn'} component={SignInScreen} />
            <Screen name={'SignUp'} component={SignUpScreen} />
            <Screen name={'EditProfile'} component={EditProfileScreen} />
            <Screen name={'About'} component={AboutScreen} />
            <Screen name={'TransportationList'} component={TransportationListScreen} />
            <Screen name={'Transportation'} component={TransportationScreen} />
        </Navigator>
    );
}

export default HomeNavigator;
