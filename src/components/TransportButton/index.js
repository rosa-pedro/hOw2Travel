import React from 'react';
import {Button} from "@ui-kitten/components";
import styles from "./styles";

const TransportButton = ({name, icon, onPress}) => {
    return(
        <Button style={styles.container} onPress={onPress} appearance={'ghost'} size={'medium'} status={'control'} accessoryLeft={icon} >
            {name}
        </Button>
    );
};

export default TransportButton;
