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
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 216,
        backgroundColor: COLOR_SUCCESS,
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
});

export default styles;
