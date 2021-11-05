import React from 'react';
import {Button} from "@ui-kitten/components";
import styles from "./styles";

const SettingsButton = () => {
    return(
        <Button style={styles.container} onPress={onPress} appearance={'ghost'} size={'medium'} status={'basic'} accessoryLeft={icon} >
            {name}
        </Button>
    );
};

export default SettingsButton;
