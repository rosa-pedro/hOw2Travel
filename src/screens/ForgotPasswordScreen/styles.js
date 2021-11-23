import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 24,
    },
    forgotPasswordLabel: {
        alignSelf: 'center',
        marginTop: 24,
    },
    enterEmailLabel: {
        alignSelf: 'center',
        marginTop: 64,
    },
});

export default styles;
