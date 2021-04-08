import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55
    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    backgroundPrimary: {
        backgroundColor: 'green'
    },
    flexOne: {
        flex: 1
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    centerAlign: {
        alignItems: 'center'
    },
    centerJustify: {
        justifyContent: 'center'
    },
    shadow: {
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'grey',
        shadowOpacity: 0.2,
        shadowRadius: 10
    },
});

export default styles;
