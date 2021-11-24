import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, COLOR_SECONDARY, COLOR_SUCCESS, COLOR_TERTIARY, TEXT_HINT_COLOR} from "../../assets/theme";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
    },
    container: {
        flex: 1,
        backgroundColor: COLOR_SUCCESS,
    },
    titleLabel: {
        marginLeft: '5%',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topNavigationContainer: {
        backgroundColor: COLOR_SUCCESS,
        paddingLeft: '5%',
        paddingTop: '5%',
    },
    menuContainer: {
        marginTop: 5,
    },
    searchBarContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: '5%'
    },
    transportationTypesRowContainer: {
        flex: 1,
        marginBottom: '5%'
    },
    favouriteTransportationListContainer : {
        flex: 7,
        backgroundColor: COLOR_SECONDARY,
    },
});

export default styles;
