import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from './style';

/*
* Splash screen design
*/

const Splash = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Home');
        }, 5000)
    },[])

    return (
        <View style={styles.container}>
            <Text style={styles.appNameText}>WeatherApp</Text>
            <ActivityIndicator size='large' color="green" />
        </View>
    )
}

export default Splash;