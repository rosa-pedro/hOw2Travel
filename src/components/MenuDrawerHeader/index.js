import React from 'react';
import {View} from 'react-native';
import {Avatar, Layout, Text} from "@ui-kitten/components";
import Profile from "../Profile";
import styles from "./styles";

const MenuDrawerHeader = (props) => {
    return(
        <Layout style={styles.container} level={'4'} >
            <Profile />
        </Layout>
    );
};

export default MenuDrawerHeader;
