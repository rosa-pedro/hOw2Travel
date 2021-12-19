import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '40%'
    },
});

export default styles;
