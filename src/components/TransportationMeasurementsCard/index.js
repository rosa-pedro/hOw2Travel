import React from 'react';
import { View } from 'react-native';
import { Card, Text} from "@ui-kitten/components";
import styles from "./styles";
const TransportationMeasurementsCard = (props) => {

    const {hint, value, icon, ...restProps} = props;

    return (
        <Card {...restProps}>
            <View style={styles.topContainer}>
                <Text appearance={'hint'}>
                    {hint}
                </Text>
                {icon(styles.icon)}
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
