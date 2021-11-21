import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import BusIcon from "../Icons/BusIcon";
import TrainIcon from "../Icons/TrainIcon";
import TramIcon from '../Icons/TramIcon';
import SubwayIcon from "../Icons/SubwayIcon";
import FerryIcon from "../Icons/FerryIcon";
import TransportButton from "../TransportButton";

const TransportationTypesRow = () => {
    return(
        <View style={styles.container}>
            <TransportButton name={'Bus'} icon={BusIcon} onPress={() => {console.warn('Bus Pressed')}} />
            <TransportButton name={'Train'} icon={TrainIcon} onPress={() => {console.warn('Train Pressed')}} />
            <TransportButton name={'Tram'} icon={TramIcon} onPress={() => {console.warn('Tram Pressed')}} />
            <TransportButton name={'Subway'} icon={SubwayIcon} onPress={() => {console.warn('Subway Pressed')}} />
            <TransportButton name={'Ferry'} icon={FerryIcon} onPress={() => {console.warn('Ferry Pressed')}} />
        </View>
    );
};

export default TransportationTypesRow;
