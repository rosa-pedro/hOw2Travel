import React, {useCallback, useEffect, useState} from 'react';
import {Button, Card, CheckBox, Icon, Input, Layout, Modal, Text} from "@ui-kitten/components";
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import PersonIcon from "../../components/Icons/PersonIcon";
import EmailIcon from "../../components/Icons/EmailIcon";
import {useAuth} from "../../contexts/AuthContext";

const SignUpScreen = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const [invalidModalVisible, setInvalidModalVisible] = useState(false);
    const [successfulModalVisible, setSuccessfulModalVisible] = useState(false);

    const auth = useAuth();

    useEffect(() => {
        return () => {
            setInvalidModalVisible(false);
            setSuccessfulModalVisible(false);
        }
    }, [])

    const onSignUpButtonPress = () => {
        auth.signUp(username, email, password).then(() => setSuccessfulModalVisible(true)).catch(() => setInvalidModalVisible(true));
    };

    const onSignInButtonPress = () => {
        navigation && navigation.goBack();
    };

    const onPasswordIconPress = () => {
        setPasswordVisible(!passwordVisible);
    };

    const renderPasswordIcon = (props) => (
        <TouchableWithoutFeedback onPress={onPasswordIconPress}>
            <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const renderCheckboxLabel = useCallback(
        (evaprops) => (
            <Text {...evaprops} style={styles.termsCheckBoxText}>
                I read and agree to Terms & Conditions
            </Text>
        )
        ,[]);

    return(
        <SafeAreaView style={styles.screen}>
            <View style={styles.headerContainer} level={'1'} >

                <Text
                    category={'h1'}
                    status={'control'}
                >
                    Hello
                </Text>
                <Text
                    style={styles.signUpLabel}
                    category={'s1'}
                    status={'control'}
                >
                    Create your account
                </Text>
            </View>

            <Layout
                style={styles.formContainer}
                level={'1'}
            >
                <Input
                    autoCapitalize={'none'}
                    placeholder={'User Name'}
                    accessoryRight={PersonIcon}
                    value={username}
                    onChangeText={setUsername}
                />
                <Input
                    style={styles.emailInput}
                    autoCapitalize={'none'}
                    placeholder={'Email'}
                    accessoryRight={EmailIcon}
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    style={styles.passwordInput}
                    autoCapitalize={'none'}
                    secureTextEntry={!passwordVisible}
                    placeholder={'Password'}
                    accessoryRight={renderPasswordIcon}
                    value={password}
                    onChangeText={setPassword}
                />
                <CheckBox
                    style={styles.termsCheckBox}
                    checked={termsAccepted}
                    onChange={(checked => setTermsAccepted(checked))}
                >
                    {renderCheckboxLabel}
                </CheckBox>


                <Modal
                    style={styles.invalidInputModal}
                    visible={invalidModalVisible}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => {
                        setInvalidModalVisible(false);
                        setUsername('');
                        setEmail('');
                        setPassword('');
                    }}
                >
                    <Card
                        status={'success'}
                        styles={styles.invalidInputModalCard}
                        header={<Text category={'h5'} >Sign Up Failed!</Text>}
                    >
                        <Text
                            category={'s1'}
                        >The account you tried to create already exists. Please try again.</Text>
                        <Button
                            style={styles.invalidInputModalButton}
                            onPress={() => {
                                setInvalidModalVisible(false);
                                setUsername('');
                                setEmail('');
                                setPassword('');
                            }}
                        >
                            DISMISS
                        </Button>
                    </Card>
                </Modal>

                <Modal
                    style={styles.invalidInputModal}
                    visible={successfulModalVisible}
                    backdropStyle={styles.backdrop}
                >
                    <Card
                        status={'success'}
                        styles={styles.invalidInputModalCard}
                        header={<Text category={'h5'} >Sign Up Successful!</Text>}
                    >
                        <Text
                            category={'s1'}
                        >Please try now to sign in to your new account.</Text>
                        <Button
                            style={styles.invalidInputModalButton}
                            onPress={() => {
                                setSuccessfulModalVisible(false);
                                navigation && navigation.goBack();
                            }}
                        >
                            SIGN IN
                        </Button>
                    </Card>
                </Modal>

            </Layout>
            <Button
                style={styles.signUpButton}
                size={'giant'}
                status={'success'}
                onPress={onSignUpButtonPress}
            >
                SIGN UP
            </Button>
            <Button
                style={styles.signInButton}
                appearance={'ghost'}
                status={'basic'}
                onPress={onSignInButtonPress}
            >
                Already have an account? Sign In
            </Button>
        </SafeAreaView>
    );
};

export default SignUpScreen;
