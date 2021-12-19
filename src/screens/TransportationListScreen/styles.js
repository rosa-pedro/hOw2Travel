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
    header: {
        padding: '3%',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    icon: {
        width: 28,
        height: 28,
    },
    title: {
        paddingLeft: 8,
    },
    titleLabel: {
    },
    titleContainer: {

    },
    topNavigationContainer: {
        backgroundColor: COLOR_SUCCESS,
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
    emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '75%',
    },
});

export default styles;
