import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import RootNavigator from "./HomeNavigator";

const { Navigator, Screen } = createDrawerNavigator();

const AuthNavigator = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen name={'SignIn'} component={SignInScreen} />
            <Screen name={'SignUp'} component={SignUpScreen} />
            <Screen name={'Root'} component={RootNavigator} />
        </Navigator>
    );
}

export default AuthNavigator;
