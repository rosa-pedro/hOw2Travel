import React from 'react';
import  { View, ActivityIndicator } from "react-native";
import styles from './styles';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={'#000'} animating={true} size={'small'} />
        </View>
    );
};

export default Loading;
