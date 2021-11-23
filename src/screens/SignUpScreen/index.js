import React, {useCallback, useState} from 'react';
import { Button, CheckBox, Icon, Input, Layout, Text } from "@ui-kitten/components";
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import PersonIcon from "../../components/Icons/PersonIcon";
import PlusIcon from "../../components/Icons/PlusIcon";
import ProfileAvatar from "../../components/ProfileAvatar";
import EmailIcon from "../../components/Icons/EmailIcon";

const SignUpScreen = ({navigation}) => {

    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const onSignUpButtonPress = () => {
        navigation && navigation.navigate('');
    };

    const onSignInButtonPress = () => {
        navigation && navigation.navigate('SignIn');
    };

    const onPasswordIconPress = () => {
        setPasswordVisible(!passwordVisible);
    };

    const renderPasswordIcon = (props) => (
        <TouchableWithoutFeedback onPress={onPasswordIconPress}>
            <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const renderEditAvatarButton = () => (
        <Button
            style={styles.editAvatarButton}
            status={'basic'}
            accessoryRight={PlusIcon}
        />
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
                    value={userName}
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
            </Layout>
            <Button
                style={styles.signUpButton}
                size={'giant'}
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
