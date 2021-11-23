import React, {useCallback, useState} from 'react';
import themedStyles from './styles';
import {
    Button,
    CheckBox,
    Divider,
    Icon,
    Input,
    Layout,
    Text,
    TopNavigation, TopNavigationAction,
    useStyleSheet
} from "@ui-kitten/components";
import { View, TouchableWithoutFeedback } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import PersonIcon from "../../components/Icons/PersonIcon";
import PlusIcon from "../../components/Icons/PlusIcon";
import ProfileAvatar from "../../components/ProfileAvatar";
import EmailIcon from "../../components/Icons/EmailIcon";
import MenuIcon from "../../components/Icons/MenuIcon";
import BackIcon from "../../components/Icons/BackIcon";

const EditProfileScreen = ({navigation}) => {

    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const styles = useStyleSheet(themedStyles);

    const onSignUpButtonPress = () => {
        navigation.goBack();
    };

    const onSignInButtonPress = () => {
        navigation.navigate('SignIn');
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

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );;

    return(
        <SafeAreaView style={styles.screen}>

            {/*<View style={styles.headerContainer}>

            </View>*/}

            <TopNavigation title={'Edit Profile'} alignment={'center'} accessoryLeft={BackAction}/>
            <Divider />

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
            </Layout>
            <Button
                style={styles.signUpButton}
                size={'giant'}
                onPress={onSignUpButtonPress}
            >
                DONE
            </Button>
        </SafeAreaView>
    );
};

export default EditProfileScreen;
