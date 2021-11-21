import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: '2%',
        /*backgroundColor: 'white',*/
        /*backgroundColor: 'red',*/
        /*margin: '2%',*/
        alignContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex:1,
        resizeMode: 'contain',
        width: '100%',
        borderColor: 'red'
        /*height: '80%'*/
    },
    title: {
        fontWeight: "bold",
        paddingBottom: '2%',
    }
});

export default styles;
