import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    container: {
        flex: 1,
        /*paddingVertical: '5%',*/
        /*justifyContent: 'space-between',*/
        /*alignItems: 'center',*/
        /*backgroundColor: 'red',*/
    },
    searchBarContainer: {
        flex: 1,
       /* backgroundColor: 'green',*/
        justifyContent: 'center',
        paddingHorizontal: '5%'
    },
    transportationTypesRowContainer: {
        flex: 1,
        /*backgroundColor: 'blue',*/
    },
    favouriteTransportationListContainer : {
        flex: 7,
        /*backgroundColor: 'yellow',*/
        /*paddingLeft: '5%'*/
    },
});

export default styles;
