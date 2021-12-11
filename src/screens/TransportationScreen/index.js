import React, {useEffect, useState} from 'react';
import { View, ScrollView } from 'react-native';
import {
    Button,
    Divider,
    Icon,
    Input,
    Layout, Spinner,
    Text,
    TopNavigation,
    TopNavigationAction
} from '@ui-kitten/components';
import styles from './styles';
import EmailIcon from "../../components/Icons/EmailIcon";
import BackIcon from "../../components/Icons/BackIcon";
import {SafeAreaView} from "react-native-safe-area-context";
import BusIcon from "../../components/Icons/BusIcon";
import RateBar from '../../components/RateBar';
import TransportationMeasurementsCard from "../../components/TransportationMeasurementsCard";
import useData from "../../hooks/useData";
import useDataQuality from "../../hooks/useDataQuality";
import TransportationInfo from "../../components/TransportationInfo";
import {useAuth} from "../../contexts/AuthContext";
import axios from "axios";
import {useMutation, useQueryClient} from "react-query";
import safeAreaView from "react-native-web/dist/exports/SafeAreaView";
import {useFavorites, addFavorite, removeFavorite} from "../../hooks/useFavorites";


const TransportationScreen = ({navigation, route}) => {

    const auth = useAuth();
    const {id, type, number, initialStop, finalStop} = route && route.params;

    const { data, isLoading, isSuccess} = useDataQuality(id);
    const transportationData = useData(id);
    const [quality, setQuality] = useState('');
    const favorites = useFavorites(auth.authData[0].email);
    const postFavorite = addFavorite(auth.authData[0].email, id);
    const deleteFavorite = removeFavorite(auth.authData[0].email, id);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [date, setDate] = useState('');

    useEffect(() => {

        const myFavorite = favorites.data.find(element => element.line_id === id);

        if(myFavorite) {
            setIsFavorite(true);
        }

        setIsDataLoaded(true);

        return () => {
            setIsFavorite(false);
            setIsDataLoaded(false);
        }
    },[]);


    useEffect(() => {

        if(transportationData.isSuccess) {
            const lastDate = new Date(transportationData.data[0].date);
            setDate(`${lastDate.getDate()}/${lastDate.getMonth() + 1}/${lastDate.getFullYear()}`);
        }

    }, [transportationData.isSuccess]);


    const onFavoriteButtonPress = () => {
        if(!isFavorite) {
            postFavorite.mutate({});
            setIsFavorite(true);
        } else {
            deleteFavorite.mutate({});
            setIsFavorite(false);
        }
    }

    const renderTitle = (props) => (
        <View style={styles.titleContainer}>
            <Text
                {...props}
                style={styles.titleLabel}
                category={'h5'}
                status={'control'}
            > Transport Information </Text>
        </View>
    );

    const BackAction = () => (
        <TopNavigationAction icon={<BackIcon fill={'white'} />} onPress={navigateBack}/>
    );

    const navigateBack = () => {
        navigation.goBack();
    };

    if(isLoading || favorites.isLoading || !isDataLoaded) {
        return(
            <SafeAreaView style={styles.screen}>
                <View style={styles.loading}>
                    <Spinner status={'success'} size={'giant'} />
                </View>
            </SafeAreaView>
        );
    }

    return(

        <SafeAreaView style={styles.screen}>

            <TopNavigation title={renderTitle} alignment={'center'} status={'control'} accessoryLeft={BackAction} style={styles.topNavigationContainer}/>
            <Layout
                style={styles.container}
                level={'2'}
            >
                <Layout
                    style={styles.header}
                    level={'1'}
                >
                    <View style={styles.transportationContainer}>
                        <BusIcon style={styles.transportationIcon}/>
                        <View style={styles.transportationDetailsContainer}>
                            <Text category={'h4'}>
                                {type} Nr. {number}
                            </Text>
                            <Text
                                category={'s1'}
                                appearance={'hint'}
                            >
                                {initialStop} - {finalStop}
                            </Text>
                            <RateBar
                                style={styles.rateBar}
                                hint={'Air Quality'}
                                value={quality}
                                onValueChange={setQuality}
                            />
                        </View>
                    </View>
                    <Button
                        style={styles.followButton}
                        status={!isFavorite ? 'primary' : 'danger'}
                        onPress={onFavoriteButtonPress}
                    >
                        {!isFavorite ? 'ADD TO FAVORITES' : 'REMOVE FROM FAVORITES'}
                    </Button>
                </Layout>


                {isSuccess && (
                    <View style={styles.transportationMeasurementsContainer}>

                        <View style={styles.transportationInfoSection}>
                            <TransportationInfo
                                style={styles.transportationInfoContainer}
                                hint={'Followers'}
                                value={'4'}
                            />

                            <TransportationInfo
                                style={styles.transportationInfoContainer}
                                hint={'Last Data'}
                                value={date}
                            />
                            <TransportationInfo
                                style={styles.transportationInfoContainer}
                                hint={'Vehicles'}
                                value={'1'}
                            />
                        </View>

                        <Divider style={styles.transportationMeasurementsSectionsDivider} />

                        <ScrollView style={styles.transportationMeasurementsSection} showsVerticalScrollIndicator={false} >
                            <TransportationMeasurementsCard
                                style={styles.transportationMeasurement}
                                hint={'PM 2.5'}
                                value={data.pm_25[0].data}
                                quality={data.pm_25[0].quality}
                            />
                            <TransportationMeasurementsCard
                                style={styles.transportationMeasurement}
                                hint={'PM 10'}
                                value={data.pm_10[0].data}
                                quality={data.pm_10[0].quality}
                            />
                            <TransportationMeasurementsCard
                                style={styles.transportationMeasurement}
                                hint={'Temperature'}
                                value={`${data.temperature[0].data}ºC`}
                                quality={data.temperature[0].quality}
                            />
                            <TransportationMeasurementsCard
                                style={styles.transportationMeasurement}
                                hint={'Humidity'}
                                value={`${data.humidity[0].data}%`}
                                quality={data.humidity[0].quality}
                            />
                        </ScrollView>

                    </View>
                )}

            </Layout>
        </SafeAreaView>
    );
};

export default TransportationScreen;
