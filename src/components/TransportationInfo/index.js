import React from 'react';
import { View } from 'react-native';
import { Card, Text} from "@ui-kitten/components";
import styles from "./styles";
import QualityTag from "../QualityTag";

const TransportationInfo = (props) => {

    const {style, hint, value, ...viewProps} = props;

    return (
        <View
            {...viewProps}
            style={[styles.container, style]}
        >
            <Text category={'s2'}>
                {value}
            </Text>
            <Text
                appearance={'hint'}
                category={'c2'}
            >
                {hint}
            </Text>
        </View>
    );
};

export default TransportationInfo;
