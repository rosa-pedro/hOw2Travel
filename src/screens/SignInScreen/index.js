import React, {useState} from 'react';
import styles from './styles';
import { Button, Icon, Input, Layout, Text } from "@ui-kitten/components";
import { View, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import PersonIcon from "../../components/Icons/PersonIcon";

const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const onSignInButtonPress = () => {
        navigation && navigation.navigate('Root')
    };

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
            <Layout style={styles.container}>

                <View style={styles.headerContainer}>
                    <Text
                        category={'h1'}
                        status={'control'}
                    >
                        Hello
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
                    status={'success'}
                    onPress={onSignInButtonPress}
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

            </Layout>
        </SafeAreaView>
    );
};

export default SignInScreen;
