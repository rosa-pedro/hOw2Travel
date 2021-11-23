import React from 'react';
import styles from './styles';
import {Image, SafeAreaView, View} from "react-native";
import SearchBarBuses from "../../components/SearchBarBuses";
import {Button, Divider, Icon, Layout, List, ListItem, Text, TopNavigation} from "@ui-kitten/components";
import GraphCard from '../../components/graphCard'
import {busData} from '../../assets/data/transportation'
import BusIcon from "../../components/Icons/BusIcon";

import Svg from 'react-native-svg';

const TransportListScreen = ({navigation, route}) => {


    const { title } = route.params;

    console.log(busData)
    // console.warn(`this is: ${title}`)

    /*const getData = () => {
        if (title==='bus'){
            return busData
        }else if (title==='ferry'){
            return busData
        }else if (title==='train'){
            return busData
        }else if (title==='metro'){
            return busData
        }return busData
    }*/

    const topTitle = () => {
        if (title==='Bus'){
            return 'Buses'
        }else if (title==='Ferry'){
            return 'Ferries'
        }else if (title==='Train'){
            return 'Trains'
        }else if (title==='Subway'){
            return 'Subways'
        }return 'Trams'
    }

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
            title={`${title} nº ${item.title}`}
            description={`Time: ${item.hour}`}
            accessoryLeft={BusIcon}
            accessoryRight={renderItemAccessory(item)}
        />
    );

    return(
        <SafeAreaView style={styles.screen}>
            <TopNavigation title={topTitle()} alignment={'center'} />
            <Divider/>
            <Layout style={styles.container}>
                <View style={styles.generalCard}>
                    <GraphCard />
                </View>
                {/*<View style={styles.search}>
                    <SearchBarBuses />
                </View>*/}
                <Divider/>

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
