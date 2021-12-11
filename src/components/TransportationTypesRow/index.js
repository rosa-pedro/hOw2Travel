import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import BusIcon from "../Icons/BusIcon";
import TrainIcon from "../Icons/TrainIcon";
import TramIcon from '../Icons/TramIcon';
import SubwayIcon from "../Icons/SubwayIcon";
import FerryIcon from "../Icons/FerryIcon";
import TransportButton from "../TransportButton";

const TransportationTypesRow = ({navigation}) => {
    return(
        <View style={styles.container}>
            <TransportButton name={'Bus'} icon={BusIcon} onPress={() => navigation.navigate('TransportationList', {title: 'Buses',typeNumber: 1})} />
            <TransportButton name={'Train'} icon={TrainIcon} onPress={() => navigation.navigate('TransportationList', {title: 'Trains', typeNumber: 2})} />
            <TransportButton name={'Tram'} icon={TramIcon} onPress={() => navigation.navigate('TransportationList', {title: 'Trams', typeNumber: 3})} />
            <TransportButton name={'Subway'} icon={SubwayIcon} onPress={() => navigation.navigate('TransportationList', {title: 'Subways', typeNumber: 4})} />
            <TransportButton name={'Ferry'} icon={FerryIcon} onPress={() => navigation.navigate('TransportationList', {title: 'Ferries', typeNumber: 5})} />
        </View>
    );
};

export default TransportationTypesRow;
