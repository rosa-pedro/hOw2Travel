import React, {useState} from 'react';
import styles from './styles';
import {Button, Card, Icon, Input, Layout, Modal, Text} from "@ui-kitten/components";
import { View, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import PersonIcon from "../../components/Icons/PersonIcon";
import {useAuth} from "../../contexts/AuthContext";

const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [visible, setVisible] = useState(false);

    const auth = useAuth();

    const onSignInButtonPress = () => {

        auth.signIn(email, password).then((response) => setVisible(response)).catch(() => setVisible(true));

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
            <Layout style={styles.container} level={'1'} >

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

                    <Modal
                        style={styles.invalidInputModal}
                        visible={visible}
                        backdropStyle={styles.backdrop}
                        onBackdropPress={() => setVisible(false)}
                    >
                        <Card
                            status={'success'}
                            styles={styles.invalidInputModalCard}
                            header={<Text category={'h5'} >Sign In Failed!</Text>}
                        >
                            <Text
                                category={'s1'}
                            >The username or password that you entered are invalid, please try again.</Text>
                            <Button
                                style={styles.invalidInputModalButton}
                                /*size={'large'}*/
                                onPress={() => setVisible(false)}
                            >
                                DISMISS
                            </Button>
                        </Card>
                    </Modal>

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
