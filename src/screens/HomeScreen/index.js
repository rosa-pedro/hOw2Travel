import React, {useState} from 'react';
import styles from './styles';
import {
    Avatar,
    Layout, MenuItem,
    OverflowMenu,
    Text,
    TopNavigation,
    TopNavigationAction
} from "@ui-kitten/components";
import { View } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";
import TransportationTypesRow from "../../components/TransportationTypesRow";
import FavouriteTransportationList from "../../components/FavouriteTransportationList";
import MenuIcon from "../../components/Icons/MenuIcon";
import InfoIcon from "../../components/Icons/InfoIcon";
import PersonIcon from "../../components/Icons/PersonIcon";
import LogoutIcon from "../../components/Icons/LogoutIcon";
import {useAuth} from "../../contexts/AuthContext";

const HomeScreen = ({navigation}) => {

    const auth = useAuth();
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const onAboutButtonPress = () => {
        navigation && navigation.navigate('About');
        toggleMenu()
    };

    const onLogoutButtonPress = () => {
        auth.signOut();
        toggleMenu()
    };

    const onEditProfileButtonPress = () => {
        navigation && navigation.navigate('EditProfile');
        toggleMenu()
    };

    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} appearance={'control'} onPress={toggleMenu} />
    );

    const renderRightActions = () => (
        <View>
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}
                style={styles.menuContainer}
            >
                <MenuItem accessoryLeft={InfoIcon} title={'About'} onPress={onAboutButtonPress}/>
                <MenuItem accessoryLeft={PersonIcon} title={'Edit Profile'} onPress={onEditProfileButtonPress} />
                <MenuItem accessoryLeft={LogoutIcon} title={'Logout'} onPress={onLogoutButtonPress} />
            </OverflowMenu>
        </View>
    );

    const renderTitle = (props) => (
        <View style={styles.titleContainer}>
            <Avatar
                source={require('../../assets/images/hOw2TravelLogo.png')}
                resizeMode={'contain'}
            />
            <Text
                {...props}
                style={styles.titleLabel}
                category={'h4'}
                status={'control'}
            > hOw2Travel </Text>
        </View>
    );


    return(
        <SafeAreaView style={styles.screen}>

            <TopNavigation title={renderTitle} accessoryRight={renderRightActions} style={styles.topNavigationContainer} />

            <Layout style={styles.container}>

                <View style={styles.searchBarContainer}>
                    <SearchBar navigation={navigation}/>
                </View>

                <View style={styles.transportationTypesRowContainer}>
                    <TransportationTypesRow navigation={navigation}/>
                </View>

                <View style={styles.favouriteTransportationListContainer}>
                    <FavouriteTransportationList />
                </View>

            </Layout>
        </SafeAreaView>
    );
};

export default HomeScreen;
