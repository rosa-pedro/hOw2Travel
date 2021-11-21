import React from 'react';
import styles from './styles';
import Card from '../../components/Card';
import {Button, Divider, Layout, Text, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import LoginButton from "../../components/LoginButton";
import {View, Image } from 'react-native';
import BackIcon from "../../components/Icons/BackIcon";
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
            <TopNavigation title={'DetailsScreen'} alignment={'center'} accessoryLeft={BackAction}/>
            <Divider/>
            <Layout style={styles.container}>
                <Image  source={{uri: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59ad1ed15bafe8f8baace87f/gato-naranja-sentado_0.jpg'}} style={{height: 300, width: 200}}/>
                <Text category={'h1'}>DETAILS</Text>
                <LoginButton/>
            </Layout>
        </SafeAreaView>
    );
};

export default DetailsScreen;
