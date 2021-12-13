import React from 'react';
import  { View, ActivityIndicator } from "react-native";
import styles from './styles';
import {Spinner} from "@ui-kitten/components";
import {SafeAreaView} from "react-native-safe-area-context";

const Loading = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.loading}>
                <Spinner status={'success'} size={'giant'} />
            </View>
        </SafeAreaView>
    );

};

export default Loading;
