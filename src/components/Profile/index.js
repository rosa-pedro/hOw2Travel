import React from 'react';
import {View} from 'react-native';
import {Avatar, Layout, Text} from "@ui-kitten/components";
import styles from "./styles";

const Profile = (props) => {
    return(
        <View style={styles.container}>
            <Avatar size={'giant'} source={{uri: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59ad1ed15bafe8f8baace87f/gato-naranja-sentado_0.jpg'}} />
            <Text style={styles.name} category={'h6'} > Pedro Rosa</Text>
        </View>
    );
};

export default Profile;
