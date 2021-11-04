import React from 'react';
import styles from './styles';
import Card from '../../components/Card';
import {Button, Divider, Icon, Layout, Text, TopNavigation} from "@ui-kitten/components";
import LoginButton from "../../components/LoginButton";
import { View } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";

const HomeScreen = ({navigation}) => {

    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    const carIcon = (props) => (
        <Icon {...props} name={'car-outline'} />
    );

    return(
        <SafeAreaView style={styles.screen}>
            <TopNavigation title={'hOw2Travel'} alignment={'center'} />
            {/*<Divider />*/}
            <Layout style={styles.container}>
                <SearchBar />

                <View>

                    <Button accessoryLeft={carIcon}/>

                </View>

                <Text category={'h1'}>hOw2Travel</Text>
                <Button onPress={navigateDetails} >OPEN DETAILS</Button>
            </Layout>
        </SafeAreaView>
    );
};

export default HomeScreen;
