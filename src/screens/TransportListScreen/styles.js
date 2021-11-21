import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        /*justifyContent: 'space-between',*/
        /*backgroundColor: 'blue'*/
    },
    container: {
        flex: 1,
        paddingBottom: '5%',
        /*justifyContent: 'space-evenly',*/
        /*height: '50%',*/
        /*alignItems: 'center',*/
        /*backgroundColor: 'yellow'*/
    },
    list: {
        /*flex:1,*/
        height: '60%',
        /*maxHeight: 192,*/
    },
    generalCard: {
        flex: 1,
        /*height: '100%',
        width: '100%',*/
        paddingVertical: '2%',
        /*backgroundColor: 'green'*/
    },
    search: {
        alignItems: 'center',
        /*paddingBottom: '5%'*/
    },
    titleContainer: {
        alignItems: 'center',
        /*backgroundColor: 'pink',*/
        paddingVertical: '2%',
        /*paddingBottom: '5%'*/
    },
    title: {
        alignItems: 'center',
        /*backgroundColor: 'pink',*/
        fontWeight: 'bold',
        /*paddingBottom: '5%'*/
    }
});

export default styles;
