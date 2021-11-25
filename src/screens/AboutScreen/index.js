import React, {useState} from 'react';
import { View } from 'react-native';
import {Button, Input, Layout, Text, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import styles from './styles';
import EmailIcon from "../../components/Icons/EmailIcon";
import BackIcon from "../../components/Icons/BackIcon";
import {SafeAreaView} from "react-native-safe-area-context";


const AboutScreen = ({navigation}) => {

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
                        INFO SCREEN
                    </Text>
                    <Text
                        style={styles.enterEmailLabel}
                        category={'s1'}
                        status={'control'}
                    >
                        Info about the App
                    </Text>
                </View>


                <Button
                    style={styles.resetPasswordButton}
                    size='giant'
                    status={'success'}
                    onPress={onResetPasswordButtonPress}
                >
                    INFORMED
                </Button>

            </Layout>
        </SafeAreaView>
    );
};

export default AboutScreen;
