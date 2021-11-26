import React from 'react';
import { View } from 'react-native';
import { Button, Icon, Text } from "@ui-kitten/components";
import styles from './styles';

const RateBar = (props) => {

    const StarIcon = (props) => (
        <Icon {...props} name={'star'} />
    );

    const renderRateButtonElement = (value) => {

        const status =  value <= props.value ? 'warning' : 'basic';

        return (
            <Button
            key={value}
            style={styles.iconButton}
            appearance={'ghost'}
            size={'tiny'}
            status={status}
            accessoryLeft={StarIcon}
            onPress={() => props.onValueChange(value)}
            />
        );
    };

    const { hint, ...restProps} = props;

    return(
        <View
            {...restProps}
            style={[styles.container, restProps.style]}
        >
            <Text
                style={styles.hint}
                appearance={'hint'}
            >
                {hint}
            </Text>
            {[1, 2, 3, 4, 5].map(renderRateButtonElement)}
        </View>
    );
};

export default RateBar;
