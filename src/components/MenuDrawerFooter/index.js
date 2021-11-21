import React from 'react';
import {View} from 'react-native';
import {Avatar, Button, Layout, Text} from "@ui-kitten/components";
import styles from "./styles";
import SettingsIcon from "../Icons/SettingsIcon";

const MenuDrawerFooter = (props) => {
    return(
        <View style={styles.container} >
            <Button style={styles.button} onPress={() => {console.warn('Settings Pressed')}} appearance={'ghost'} size={'giant'} status={'basic'} accessoryLeft={SettingsIcon} >
                Settings
            </Button>
        </View>
    );
};

export default MenuDrawerFooter;
