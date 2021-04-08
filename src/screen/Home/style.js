import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    renderView: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15
    },
    cityName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    descTxt: {
        fontSize: 14
    },
    celsiusTxt: {
        fontSize: 25, marginLeft: 10
    },
    emptyListStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})