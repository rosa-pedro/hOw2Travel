import React, {useState} from 'react';
import { View } from 'react-native';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import styles from './styles';
import EmailIcon from "../../components/Icons/EmailIcon";
import {SafeAreaView} from "react-native-safe-area-context";



const ForgotPasswordScreen = ({navigation}) => {

    const [email, setEmail] = useState('');

    const onResetPasswordButtonPress = () => {
        navigation && navigation.goBack();
    }

    const onGoBackButtonPress = () => {
        navigation && navigation.goBack();
    };

    return(

        <SafeAreaView style={styles.screen}>
            <Layout style={styles.container} level={'1'} >

                <View style={styles.headerContainer}>
                    <Text
                        category={'h1'}
                        status={'control'}
                    >
                        Forgot Password
                    </Text>
                    <Text
                        style={styles.enterEmailLabel}
                        category={'s1'}
                        status={'control'}
                    >
                        Please enter your email address
                    </Text>
                </View>

                <Layout
                    style={styles.formContainer}
                        level={'1'}
                >
                    <Input
                        autoCapitalize={'none'}
                        placeholder={'Email'}
                        accessoryRight={EmailIcon}
                        value={email}
                        onChangeText={setEmail}
                    />
                </Layout>

                <Button
                    style={styles.resetPasswordButton}
                    size='giant'
                    status={'success'}
                    onPress={onResetPasswordButtonPress}
                >
                    RESET PASSWORD
                </Button>

                <Button
                    style={styles.backButton}
                    appearance={'ghost'}
                    status={'basic'}
                    onPress={onGoBackButtonPress}
                >
                    Did you remember the password? Sign In
                </Button>

            </Layout>
        </SafeAreaView>
    );
};

export default ForgotPasswordScreen;
