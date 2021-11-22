import React from 'react';
import styles from './styles';
import {Image, SafeAreaView, View} from "react-native";
import SearchBarBuses from "../../components/SearchBarBuses";
import {Button, Divider, Icon, Layout, List, ListItem, Text, TopNavigation} from "@ui-kitten/components";
import GraphCard from '../../components/graphCard'
import {busData} from '../../assets/data/transportation'
import BusIcon from "../../components/Icons/BusIcon";

import Svg from 'react-native-svg';
/*const data = new Array(BusData).fill({
    title: this.title,
    hour: this.hour,
});*/



const TransportListScreen = ({navigation}) => {

    console.log(busData)



    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    const renderItemAccessory = (props) => (
        <Svg height='60%' width='30%' viewBox='0 1 100 100'>
            <Text>{`Air quality: ${props.humidity}`}</Text>
        </Svg>
    );

    const renderItemIcon = (props) => (
        <Icon {...props} name='person'/>
    );

    const renderItem = ({ item, index }) => (
        <ListItem
            title={`Bus nº ${item.title}`}
            description={`Time: ${item.hour}`}
            accessoryLeft={BusIcon}
            accessoryRight={renderItemAccessory(item)}
        />
    );

    return(
        <SafeAreaView style={styles.screen}>
            <TopNavigation title={'Buses'} alignment={'center'} />
            <Divider/>
            <Layout style={styles.container}>
                <View style={styles.generalCard}>
                    <GraphCard />
                </View>
                <View style={styles.search}>
                    <SearchBarBuses />
                </View>

                <View style={styles.list}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} category='h5'>All</Text>
                    </View>
                    <Divider/>
                    <List
                        data={busData}
                        renderItem={renderItem}/>
                </View>
            </Layout>



        </SafeAreaView>
    );
};

export default TransportListScreen;
