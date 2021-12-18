import {StyleSheet} from "react-native";
import {BACKGROUND_COLOR, COLOR_SUCCESS} from "../../assets/theme";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
    },
    container: {
        flex: 1,
        /*backgroundColor: 'red',*/
        /*justifyContent: 'space-between'*/
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 275,
        backgroundColor: COLOR_SUCCESS,
    },
    formContainer: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 16,
    },
    enterEmailLabel: {
        marginVertical: 16,
    },
    resetPasswordButton: {
        marginHorizontal: 16,
    },
    backButton: {
        marginBottom: 24,
        marginHorizontal: 16,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
    },
    image: {
        height: '100%',
        width: '100%',
    }
});

export default styles;
