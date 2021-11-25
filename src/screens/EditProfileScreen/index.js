import React, {useCallback, useState} from 'react';
import styles from './styles';
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


    const onEditProfileButtonPress = () => {
        navigation.goBack();
    };

    const onGoBackButtonPress = () => {
        navigation.goBack();
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
                        Edit Profile
                    </Text>
                    <Text
                        style={styles.editProfileLabel}
                        category={'s1'}
                        status={'control'}
                    >
                        Please edit the fields you want
                    </Text>
                </View>


                <Layout style={styles.formContainer} level={'1'} >
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
                    style={styles.editProfileButton}
                    size={'giant'}
                    status={'success'}
                    onPress={onEditProfileButtonPress}
                >
                    EDIT PROFILE
                </Button>
                <Button
                    style={styles.backButton}
                    appearance={'ghost'}
                    status={'basic'}
                    onPress={onGoBackButtonPress}
                >
                    Have you changed your mind? Go back
                </Button>

            </Layout>
        </SafeAreaView>
    );
};

export default EditProfileScreen;
