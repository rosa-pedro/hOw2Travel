import React, {useEffect, useState} from 'react';
import { View, ScrollView } from 'react-native';
import {Button, Divider, Icon, Input, Layout, Text, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
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


const TransportationScreen = ({navigation, route}) => {

    const [quality, setQuality] = useState('');
    const {id, type, number, initialStop, finalStop} = route && route.params;
    const { data, isLoading, isSuccess} = useDataQuality(id);

    useEffect(() => {

        if(isSuccess) {
            console.log(data);
            console.log(data && data.humidity[0].data);
            console.log(number);
        }

    },[isSuccess]);

    const onFavoriteButtonPress = () => {
        console.warn('Following');
    }

    const onGoBackButtonPress = () => {
        navigation && navigation.goBack();
    };

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
                        onPress={onFavoriteButtonPress}
                    >
                        ADD TO FAVORITES
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
                                value={'05/12/2021'}
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
