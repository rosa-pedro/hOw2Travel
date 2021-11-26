import React, {useState} from 'react';
import { View } from 'react-native';
import {Button, Icon, Input, Layout, Text, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import styles from './styles';
import EmailIcon from "../../components/Icons/EmailIcon";
import BackIcon from "../../components/Icons/BackIcon";
import {SafeAreaView} from "react-native-safe-area-context";
import BusIcon from "../../components/Icons/BusIcon";
import RateBar from '../../components/RateBar';
import TransportationMeasurementsCard from "../../components/TransportationMeasurementsCard";


const TransportationScreen = ({navigation}) => {

    const [quality, setQuality] = useState('');

    const onFollowButtonPress = () => {
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
            > Details </Text>
        </View>
    );

    const BackAction = () => (
        <TopNavigationAction icon={<BackIcon fill={'white'} />} onPress={navigateBack}/>
    );

    const navigateBack = () => {
        navigation.goBack();
    };

    const MeasurementIcon = (props) => (
        <Icon {...props} name={'activity-outline'} />
    );

    return(

        <SafeAreaView style={styles.screen}>

            <TopNavigation title={renderTitle} alignment={'center'} status={'control'} accessoryLeft={BackAction} style={styles.topNavigationContainer}/>

            <Layout style={styles.container} level={'3'} >

                <Layout
                    style={styles.header}
                    level={'1'}
                >
                    <View style={styles.transportationContainer}>
                        <BusIcon style={styles.transportationIcon}/>
                        <View style={styles.transportationDetailsContainer}>
                            <Text category={'h4'}>
                                Bus Nr. 1
                            </Text>
                            <Text
                                category={'s1'}
                                appearance={'hint'}
                            >
                                Heverlee - Leuven
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
                        onPress={onFollowButtonPress}
                    >
                        FOLLOW
                    </Button>
                </Layout>

                <View style={styles.transportationMeasurementsSection}>
                    <TransportationMeasurementsCard
                        style={styles.transportationMeasurement}
                        hint={'PM 2.5'}
                        value={'25.5'}
                        icon={MeasurementIcon}
                    />
                    <TransportationMeasurementsCard
                        style={styles.transportationMeasurement}
                        hint={'Temperature'}
                        value={'17º'}
                        icon={MeasurementIcon}
                    />
                </View>
                <View style={styles.transportationMeasurementsSection}>
                    <TransportationMeasurementsCard
                        style={styles.transportationMeasurement}
                        hint={'PM 10'}
                        value={'35.6'}
                        icon={MeasurementIcon}
                    />
                    <TransportationMeasurementsCard
                        style={styles.transportationMeasurement}
                        hint={'Humidity'}
                        value={'84'}
                        icon={MeasurementIcon}
                    />

                </View>
            </Layout>
        </SafeAreaView>
    );
};

export default TransportationScreen;
