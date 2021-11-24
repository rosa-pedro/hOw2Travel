import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import TransportListScreen from "../screens/TransportListScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import MenuDrawerContent from "../components/MenuDrawerContent";

const { Navigator, Screen } = createDrawerNavigator();

const HomeNavigator = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={props => <MenuDrawerContent {...props} />}
        >
            <Screen name={'Home'} component={HomeScreen} />
            <Screen name={'Orders'} component={DetailsScreen} />
            <Screen name={'TransportList'} component={TransportListScreen} />
            <Screen name={'SignIn'} component={SignInScreen} />
            <Screen name={'SignUp'} component={SignUpScreen} />
            <Screen name={'EditProfile'} component={EditProfileScreen} />
        </Navigator>
    );
}

export default HomeNavigator;
