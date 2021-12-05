import React from 'react';
import { View } from 'react-native';
import { Card, Text} from "@ui-kitten/components";
import styles from "./styles";
import QualityTag from "../QualityTag";
const TransportationMeasurementsCard = (props) => {

    const {hint, value, quality, ...restProps} = props;

    return (
        <Card {...restProps}>
            <View style={styles.topContainer}>
                <Text appearance={'hint'}>
                    {hint}
                </Text>
                <QualityTag title={quality}/>
            </View>
            <Text
                style={styles.valueLabel}
                category={'h5'}
            >
                {value}
            </Text>
        </Card>
    );
};

export default TransportationMeasurementsCard;
