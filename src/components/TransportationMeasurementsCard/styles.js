import { StyleSheet } from 'react-native';
import {COLOR_PRIMARY} from "../../assets/theme";

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    valueLabel: {
        marginTop: 20,
    },
    icon: {
        width: 20,
        height: 20,
        /*tintColor: COLOR_PRIMARY,*/
    },
});

export default styles;
