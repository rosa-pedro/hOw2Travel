import React, {useEffect} from 'react';
import styles from './styles';
import {
    Divider,
    Layout, List, ListItem,
    Text,
    TopNavigation,
    TopNavigationAction
} from "@ui-kitten/components";
import { View } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import BusIcon from "../../components/Icons/BusIcon";
import CompassIcon from "../../components/Icons/CompassIcon";
import BackIcon from "../../components/Icons/BackIcon";
import {useAuth} from "../../contexts/AuthContext";
import useTypeLines from "../../hooks/useTypeLines";

const TransportationListScreen = ({navigation, route}) => {

    const {title, typeNumber} = route && route.params;
    const {data, isLoading, isSuccess} = useTypeLines(typeNumber);

    useEffect(() => {
        if(isSuccess) {
            console.log(data);
        }
    }, [isSuccess]);

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


    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={<BackIcon fill={'white'} />} onPress={navigateBack}/>
    );

    const renderTitle = (props) => (
        <View style={styles.titleContainer}>
            <Text
                {...props}
                style={styles.titleLabel}
                category={'h5'}
                status={'control'}
            > {title} </Text>
        </View>
    );


    return(
        <SafeAreaView style={styles.screen}>
            <TopNavigation title={renderTitle} alignment={'center'} status={'control'} accessoryLeft={BackAction} style={styles.topNavigationContainer}/>
            <Layout style={styles.container}>

                <Divider />

                <List
                    data={data}
                    renderItem={renderItem}
                />

            </Layout>
        </SafeAreaView>
    );
};

export default TransportationListScreen;
