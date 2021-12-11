import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import {Button, Divider, List, ListItem, Text} from "@ui-kitten/components";
import styles from "./styles";
import favouriteTransportation from "../../assets/data/favouriteTransportation";
import BusIcon from "../Icons/BusIcon";
import StarIcon from "../Icons/StarIcon";
import {useAuth} from "../../contexts/AuthContext";
import {useFavorites} from "../../hooks/useFavorites";
import CompassIcon from "../Icons/CompassIcon";
import {useNavigation} from "@react-navigation/native";

const FavouriteTransportationList = () => {

    /*const [data, setData] = useState(favouriteTransportation);*/

    const auth = useAuth();
    const {data, isLoading, isSuccess} = useFavorites(auth.authData[0].email);
    const navigation = useNavigation();


    const checkType = (item) => {
        switch (item.type_id) {
            case 1:
                return 'Bus';
            default:
                return 'unknown';
        };
    };

    const renderItemLeftIcon = (item) => {
        switch (item.type_id) {
            case 1:
                return <BusIcon />;
            default:
                return < CompassIcon />;
        };
    };

    const renderItem = ({item}) => (
        <ListItem
          title={`${checkType(item)} Nr. ${item.number}`}
          description={`${item.initial_stop} - ${item.final_stop}`}
          accessoryLeft={renderItemLeftIcon(item)}
          onPress={() => onItemPress(item)}
        />
    );

    const onItemPress = (item) => {

        navigation && navigation.navigate('Transportation', {
            id: item.line_id,
            type: checkType(item),
            number: item.number,
            initialStop: item.initial_stop,
            finalStop: item.final_stop
        });

    };

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <StarIcon fill={'#8F9BB3'} style={styles.icon} />
                <Text style={styles.title} category={'h5'}>Favourites:</Text>
            </View>

            <Divider />

            {isSuccess && (
                <List
                    data={data}
                    renderItem={renderItem}
                />
            )}

        </View>
    );
};

export default FavouriteTransportationList;
