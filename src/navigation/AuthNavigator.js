import React from 'react';
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import RootNavigator from "./HomeNavigator";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen name={'SignIn'} component={SignInScreen} />
            <Screen name={'ForgotPassword'} component={ForgotPasswordScreen} />
            <Screen name={'SignUp'} component={SignUpScreen} />
            <Screen name={'Root'} component={RootNavigator} />
        </Navigator>
    );
}

export default AuthNavigator;
