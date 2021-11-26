import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, COLOR_SUCCESS} from "../../assets/theme";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
    },
    container: {
        flex: 1,
    },
    topNavigationContainer: {
        backgroundColor: COLOR_SUCCESS,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 216,
        backgroundColor: COLOR_SUCCESS,
    },
    header: {
        padding: 16,
    },
    transportationContainer: {
        flexDirection: 'row',
    },
    transportationIcon: {
        width: 48,
        height: 48,
        marginHorizontal: 8,
        marginTop: 6,
    },
    transportationDetailsContainer: {
        flex: 1,
        marginHorizontal: 8,
    },
    rateBar: {
        marginTop: 24,
    },
    followButton: {
        marginTop: 24,
    },
    formContainer: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 16,
    },
    enterEmailLabel: {
        marginTop: 16,
    },
    resetPasswordButton: {
        marginHorizontal: 16,
    },
    backButton: {
        marginVertical: 12,
        marginHorizontal: 16,
    },
    transportationMeasurementsSection: {
        flexDirection: 'row',
        marginTop: 16,
        marginHorizontal: 8,
    },
    transportationMeasurement: {
        flex: 1,
        marginHorizontal: 8,
    },
});

export default styles;
