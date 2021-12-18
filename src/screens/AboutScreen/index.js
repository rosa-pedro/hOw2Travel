import React from 'react';
import { View, Image } from 'react-native';
import {Button, Layout, Text} from '@ui-kitten/components';
import styles from './styles';
import {SafeAreaView} from "react-native-safe-area-context";


const AboutScreen = ({navigation}) => {

    const onGoBackButtonPress = () => {
        navigation && navigation.goBack();
    };

    return(

        <SafeAreaView style={styles.screen}>
            <Layout style={styles.container} level={'1'} >

                <View style={styles.headerContainer}>
                    <Text
                        category={'h1'}
                        status={'control'}
                    >
                        ABOUT
                    </Text>
                    <Text
                        style={styles.enterEmailLabel}
                        category={'s1'}
                        status={'control'}
                    >
                        High-grade project by the amazing Group 2 students:
                    </Text>
                    <Text
                        category={'s1'}
                        status={'control'}
                    >
                        Pedro Rosa
                    </Text>
                    <Text
                        category={'s1'}
                        status={'control'}
                    >
                        Hysa Alcântara
                    </Text>
                    <Text
                        category={'s1'}
                        status={'control'}
                    >
                        Sander Verbeken
                    </Text>
                    <Text
                        category={'s1'}
                        status={'control'}
                    >
                        Karabo Madiba
                    </Text>
                    <Text
                        style={styles.enterEmailLabel}
                        category={'s1'}
                        status={'control'}
                    >
                        and a special thanks for helping Sander's cat.
                    </Text>
                </View>

                <View
                style={styles.imageContainer}>

                    <Image
                        style={styles.image}
                        resizeMode={'contain'}
                        source={require('../../assets/images/sander_cat.jpg')}
                    />

                </View>


                <Button
                    style={styles.backButton}
                    size='giant'
                    status={'success'}
                    onPress={onGoBackButtonPress}
                >
                    GO BACK
                </Button>

            </Layout>
        </SafeAreaView>
    );
};

export default AboutScreen;
