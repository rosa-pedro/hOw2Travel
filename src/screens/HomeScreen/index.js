import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Card from '../../components/Card';

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Card name={'Sander'} />
        </View>
    );
};

export default HomeScreen;
