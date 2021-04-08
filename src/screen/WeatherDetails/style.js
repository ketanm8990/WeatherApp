import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loaderText: {
        fontSize: 16,
        marginTop: 15
    },
    appNameText: {
        fontSize: 25,
        marginBottom: 20,
        color: 'green'
    },
    map: {
        flex: 1,
    },
    cityName: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    descTxt: {
        fontSize: 18
    },
    celsiusTxt: {
        fontSize: 25
    }
})