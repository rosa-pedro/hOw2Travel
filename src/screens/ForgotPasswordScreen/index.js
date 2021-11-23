import React, {useState} from 'react';
import { View } from 'react-native';
import {Button, Input, Layout, Text, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import styles from './styles';
import EmailIcon from "../../components/Icons/EmailIcon";
import BackIcon from "../../components/Icons/BackIcon";
import {SafeAreaView} from "react-native-safe-area-context";



const ForgotPasswordScreen = ({navigation}) => {

    const [email, setEmail] = useState('');

    const onResetPasswordButtonPress = () => {
        navigation && navigation.goBack();
    }

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    return(

        <SafeAreaView style={styles.screen}>
            <Layout style={styles.container}>

                <TopNavigation title={''} alignment={'center'} accessoryLeft={BackAction}/>


                <Text
                    style={styles.forgotPasswordLabel}
                    category={'h4'}
                    status={'basic'}
                >
                    Forgot Password
                </Text>

                <Text
                    style={styles.enterEmailLabel}
                    status={'basic'}
                >
                    Please enter your email address
                </Text>

                <View style={styles.formContainer}>
                    <Input
                        status={'basic'}
                        placeholder={'Email'}
                        accessoryRight={EmailIcon}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <Button
                    size='giant'
                    onPress={onResetPasswordButtonPress}
                >
                    RESET PASSWORD
                </Button>

            </Layout>
        </SafeAreaView>
    );
};

export default ForgotPasswordScreen;
