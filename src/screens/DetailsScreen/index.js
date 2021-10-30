import React from 'react';
import styles from './styles';
import Card from '../../components/Card';
import {Button, Divider, Layout, Text, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import LoginButton from "../../components/LoginButton";
import {View} from 'react-native';
import BackIcon from "../../components/BackIcon";
import {SafeAreaView} from "react-native-safe-area-context";

const DetailsScreen = ({navigation}) => {

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    return (
        <SafeAreaView style={styles.screen}>
            <TopNavigation title={'MyApp'} alignment={'center'} accessoryLeft={BackAction}/>
            <Divider/>
            <Layout style={styles.container}>
                <Text category={'h1'}>DETAILS</Text>
                <LoginButton/>
            </Layout>
        </SafeAreaView>
    );
};

export default DetailsScreen;
