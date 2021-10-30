import React from 'react';
import styles from './styles';
import Card from '../../components/Card';
import { Button, Divider, Layout, Text, TopNavigation } from "@ui-kitten/components";
import LoginButton from "../../components/LoginButton";
import { View } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";

const HomeScreen = ({navigation}) => {

    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    return(
        <SafeAreaView style={styles.screen}>
            <TopNavigation title={'hOw2Travel'} alignment={'center'} />
            <Divider />
            <Layout style={styles.container}>
                <SearchBar />
                {/*<Text category={'h1'}>HOME</Text>
                <Button onPress={navigateDetails} >OPEN DETAILS</Button>*/}
            </Layout>
        </SafeAreaView>
    );
};

export default HomeScreen;
