import React, {cloneElement} from 'react';
import {View} from 'react-native';
import {Avatar, Layout, Text} from "@ui-kitten/components";
import styles from "./styles";

const ProfileAvatar = (props) => {

    const renderEditButtonElement = () => {
        const buttonElement = props.editButton();

        return cloneElement(buttonElement, {
            style: [buttonElement.props.style, styles.editButton],
        })
    }

    const {style, editButton, ...restProps} = props;

    return(
        <View style={style}>
            <Avatar
                style={[style, styles.avatar]}
                {...restProps}
            />
            {renderEditButtonElement()}
        </View>
    );
};

export default ProfileAvatar;
