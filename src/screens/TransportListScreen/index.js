import React from 'react';
import styles from './styles';
import {Image, SafeAreaView, View} from "react-native";
import SearchBarBuses from "../../components/SearchBarBuses";
import {Button, Divider, Icon, Layout, List, ListItem, Text, TopNavigation} from "@ui-kitten/components";
import GraphCard from '../../components/graphCard'
import {busData} from '../../assets/data/transportation'

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
        <Button size='tiny'>FOLLOW</Button>
    );

    const renderItemIcon = (props) => (
        <Icon {...props} name='person'/>
    );

    const renderItem = ({ item, index }) => (
        <ListItem
            title={`${item.title}`}
            description={`${item.hour}`}
            accessoryLeft={renderItemIcon}
            /*accessoryRight={renderItemAccessory}*/
        />
    );

    return(
        <SafeAreaView style={styles.screen}>
            <TopNavigation title={'Buses'} alignment={'center'} />
            <Divider/>
            {/*<View style={styles.titleContainer}>
                <Text style={styles.title} category='h4'>BUSES</Text>
            </View>*/}
            <Layout style={styles.container}>


                <View style={styles.generalCard}>
                    <GraphCard />
                </View>
                <View style={styles.search}>
                    <SearchBarBuses />
                </View>
            </Layout>
            <View style={styles.list}>
                <List
                    data={busData}
                    renderItem={renderItem}
                />
            </View>


        </SafeAreaView>
    );
};

export default TransportListScreen;
