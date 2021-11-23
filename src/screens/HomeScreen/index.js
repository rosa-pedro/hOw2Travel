import React from 'react';
import styles from './styles';
import Card from '../../components/Card';
import {Button, Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import LoginButton from "../../components/LoginButton";
import { View } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";
import TransportationTypesRow from "../../components/TransportationTypesRow";
import FavouriteTransportationList from "../../components/FavouriteTransportationList";
import MenuIcon from "../../components/Icons/MenuIcon";

const HomeScreen = ({navigation}) => {

    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    const MenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={() => {navigation.toggleDrawer()}}/>
    );


    return(
        <SafeAreaView style={styles.screen}>
            <TopNavigation title={'hOw2Travel'} alignment={'center'} accessoryLeft={MenuAction}/>
            <Divider />
            <Layout style={styles.container}>

                <View style={styles.searchBarContainer}>
                    <SearchBar navigation={navigation}/>
                </View>

                <View style={styles.transportationTypesRowContainer}>
                    <TransportationTypesRow navigation={navigation}/>
                </View>

                <View style={styles.favouriteTransportationListContainer}>
                    <FavouriteTransportationList />
                </View>

                {/*<Text category={'h1'}>hOw2Travel</Text>
                <Button onPress={navigateDetails} >OPEN DETAILS</Button>*/}
            </Layout>
        </SafeAreaView>
    );
};

export default HomeScreen;
