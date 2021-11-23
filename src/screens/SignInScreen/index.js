import React, {useState} from 'react';
import themedStyles from './styles';
import {Button, Divider, Icon, Input, Layout, Text, useStyleSheet} from "@ui-kitten/components";
import { View, TouchableWithoutFeedback } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import PersonIcon from "../../components/Icons/PersonIcon";

const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const styles = useStyleSheet(themedStyles);

    const onSignUpButtonPress = () => {
        navigation && navigation.navigate('SignUp')
    };

    const onForgotPasswordButtonPress = () => {
        navigation && navigation.navigate('ForgotPassword');
    };

    const onPasswordIconPress = () => {
        setPasswordVisible(!passwordVisible);
    };

    const renderPasswordIcon = (props) => (
        <TouchableWithoutFeedback onPress={onPasswordIconPress}>
            <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    return(
        <SafeAreaView style={styles.screen}>

            <View style={styles.headerContainer}>
                <Text
                    category={'h1'}
                    status={'control'}
                >
                    hOw2Travel
                </Text>
                <Text
                    style={styles.signInLabel}
                    category={'s1'}
                    status={'control'}
                >
                    Sign in to your account
                </Text>
            </View>

            <Layout
                style={styles.formContainer}
                level={'1'}
            >
                <Input
                    placeholder={'Email'}
                    accessoryRight={PersonIcon}
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    style={styles.passwordInput}
                    placeholder={'Password'}
                    accessoryRight={renderPasswordIcon}
                    value={password}
                    secureTextEntry={!passwordVisible}
                    onChangeText={setPassword}
                />
                <View style={styles.forgotPasswordContainer}>
                    <Button
                        style={styles.forgotPasswordButton}
                        appearance={'ghost'}
                        status={'basic'}
                        onPress={onForgotPasswordButtonPress}
                    >
                        Forgot your password?
                    </Button>
                </View>
            </Layout>
            <Button
                style={styles.signInButton}
                size={'giant'}
            >
                SIGN IN
            </Button>
            <Button
                style={styles.signUpButton}
                appearance={'ghost'}
                status={'basic'}
                onPress={onSignUpButtonPress}
            >
                Don't have an account? Create
            </Button>
        </SafeAreaView>
    );
};

export default SignInScreen;
