import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, COLOR_SUCCESS, TEXT_HINT_COLOR} from "../../assets/theme";

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
    signUpLabel: {
        marginTop: 16,
    },
    formContainer: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 16,
    },
    emailInput: {
        marginTop: 16,
    },
    passwordInput: {
        marginTop: 16,
    },
    termsCheckBox: {
        marginTop: 24,
    },
    termsCheckBoxText: {
        color: TEXT_HINT_COLOR,
        marginLeft: 10,
    },
    signUpButton: {
        marginHorizontal: 16,
    },
    signInButton: {
        marginVertical: 12,
        marginHorizontal: 16,
    },
    invalidInputModal: {
        paddingHorizontal: '10%',
    },
    invalidInputModalCard: {
        margin: 2,
    },
    invalidInputModalButton: {
        marginTop: '8%',
        marginHorizontal: '20%',
    },
});

export default styles;
