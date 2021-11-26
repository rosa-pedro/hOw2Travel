import React, {useState} from 'react';
import styles from './styles';
import {
    Avatar,
    Button, Card,
    Divider,
    Icon,
    Layout, List, ListItem, MenuItem,
    OverflowMenu,
    Text,
    TopNavigation,
    TopNavigationAction
} from "@ui-kitten/components";
import { View } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import FavouriteTransportationList from "../../components/FavouriteTransportationList";
import StarIcon from "../../components/Icons/StarIcon";
import favouriteTransportation from "../../assets/data/favouriteTransportation";
import BusIcon from "../../components/Icons/BusIcon";
import {BACKGROUND_COLOR, COLOR_SECONDARY, COLOR_SUCCESS, COLOR_TERTIARY} from "../../assets/theme";
import CompassIcon from "../../components/Icons/CompassIcon";
import BackIcon from "../../components/Icons/BackIcon";
import Svg from "react-native-svg";

const TransportationListScreen = ({navigation}) => {

    const [data, setData] = useState(favouriteTransportation);

    const renderItemAccessory = () => (
        /*<Svg height='60%' width='30%' viewBox='0 1 100 100'>
            <Text>{`Air quality: ${props.humidity}`}</Text>
        </Svg>*/
        <Card style={{backgroundColor: COLOR_SUCCESS, margin: '-5%', marginRight: '1%'}}>
            <Text category={'s1'}>Air Quality: 80%</Text>
        </Card>
    );

    const renderItem = ({item, index}) => (
        <ListItem
            title={`${item.title}`}
            description={`${item.description}`}
            accessoryLeft={BusIcon}
            /*accessoryRight={renderItemAccessory}*/
            onPress={onListItemButtonPress}
        />
    );

    const navigateBack = () => {
        navigation.goBack();
    };

    const onListItemButtonPress = () => {
        navigation && navigation.navigate('Transportation');
    };

    const BackAction = () => (
        <TopNavigationAction icon={<BackIcon fill={'white'} />} onPress={navigateBack}/>
    );

    const renderTitle = (props) => (
        <View style={styles.titleContainer}>
            <Text
                {...props}
                style={styles.titleLabel}
                category={'h5'}
                status={'control'}
            > Buses </Text>
        </View>
    );


    return(
        <SafeAreaView style={styles.screen}>

{/*
            <TopNavigation title={'BUSES'} style={styles.topNavigationContainer} />
*/}
            <TopNavigation title={renderTitle} alignment={'center'} status={'control'} accessoryLeft={BackAction} style={styles.topNavigationContainer}/>

            <Layout style={styles.container}>

                {/*<View style={styles.favouriteTransportationListContainer}>
                    <FavouriteTransportationList />
                </View>*/}
{/*
                <View style={styles.header}>
                    <CompassIcon fill={COLOR_SECONDARY} style={styles.icon} />
                    <Text style={styles.title} status={'control'} category={'h5'}>Buses:</Text>
                </View>*/}

                <Divider />

                <List
                    data={data}
                    renderItem={renderItem}
                />

            </Layout>
        </SafeAreaView>
    );
};

export default TransportationListScreen;
