import React, {useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import {Button, Card, Layout, Text} from "@ui-kitten/components";
import styles from "./styles";

const Header = (props) => (
    <View {...props}>
        <Text style={styles.title} category='h6'>GENERAL INFO</Text>
    </View>
);

const graphCard = () => {


    return(
        <View style={styles.container}>
            <Header />
            <Image style={styles.image} source={require('../../assets/images/graph.jpg')}/>
        </View>
    );
};

export default graphCard;
