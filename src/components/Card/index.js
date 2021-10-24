import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Card = ({name}) => {
    return(
        <View>
            <Image style={styles.image} source={require('../../assets/images/sander_cat.jpg')}/>
            <Text>{name}'s Cat</Text>
        </View>
    );
};

export default Card;
