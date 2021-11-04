import React, {useState} from 'react';
import { View } from 'react-native';
import {Button, Divider, List, ListItem, Text} from "@ui-kitten/components";
import styles from "./styles";
import favouriteTransportation from "../../assets/data/favouriteTransportation";
import BusIcon from "../Icons/BusIcon";
import StarIcon from "../Icons/StarIcon";

const FavouriteTransportationList = () => {

    const [data, setData] = useState(favouriteTransportation);

    const renderItem = ({item, index}) => (
        <ListItem
          title={`${item.title}`}
          description={`${item.description}`}
          accessoryLeft={BusIcon}
        />
    );

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <StarIcon fill={'#8F9BB3'} style={styles.icon} />
                <Text style={styles.title} category={'h5'}>Favourites:</Text>
            </View>

            <Divider />

            <List
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
};

export default FavouriteTransportationList;
