import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, Platform } from 'react-native';
import styles from './style';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CommonStyles from '../../common/CommonStyles';
import notifee from '@notifee/react-native';

/*
* WeatherDetails screen design
*/

const WeatherDetails = (props) => {

    const [weatherItem, setWeatherItem] = useState();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    async function onDisplayNotification(title, description) {
        // Create a channel
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        // Display a notification
        await notifee.displayNotification({
            id: new Date().toTimeString(),
            title: title,
            body: description,
            android: {
                channelId,
            },
        });
    }

    useEffect(() => {
        const { params } = props.route;
        setWeatherItem(params.item);
        setLatitude(parseFloat(params.item.coord.lat))
        setLongitude(parseFloat(params.item.coord.lon))
        onDisplayNotification(params.item?.name, params.item?.weather[0]?.description);
    }, [])

    return (
        <View style={CommonStyles.flexOne}>
            <SafeAreaView style={CommonStyles.backgroundPrimary} />
            <View style={[CommonStyles.header, CommonStyles.backgroundPrimary]}>
                <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => props.navigation.goBack()}>
                    <Image source={require('../../Images/back.png')} style={{ height: 25, width: 25, paddingTop: 10, paddingBottom: 5, tintColor: 'white' }} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={[CommonStyles.headerTitle, { flex: 1, marginRight: 30 }]}>WeatherApp</Text>
            </View>
            <View style={CommonStyles.flexOne}>
                {
                    (latitude != undefined && longitude != undefined) ?
                        <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={styles.map}
                            region={{
                                latitude: latitude,
                                longitude: longitude,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                        >
                            <MapView.Marker
                                coordinate={{
                                    latitude: latitude,
                                    longitude: longitude
                                }}
                                title={weatherItem?.name}
                                description={weatherItem?.weather[0].description}
                            />
                        </MapView>
                        : <View style={styles.map} />
                }
                <View style={{ padding: 20, flexDirection: 'row' }}>
                    <View style={CommonStyles.flexOne}>
                        <Text style={styles.cityName}>{weatherItem?.name}</Text>
                        <Text style={styles.descTxt}>{weatherItem?.weather[0].description}</Text>
                        <Text style={styles.descTxt}>Humidity: {weatherItem?.main.humidity}</Text>
                        <Text style={styles.descTxt}>Wind Speed: {weatherItem?.wind.speed}</Text>
                        <Text style={styles.descTxt}>Max Temp: {weatherItem?.main.temp_max}</Text>
                        <Text style={styles.descTxt}>Min Temp: {weatherItem?.main.temp_min}</Text>
                    </View>
                    <View style={{ marginLeft: 10, alignItems: 'center' }}>
                        <Text style={styles.celsiusTxt}>
                            {weatherItem?.main.temp} °C
                        </Text>
                        <Image source={require('../../Images/weather.png')} style={{ height: 70, width: 70, marginTop: 2 }} resizeMode='contain' />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default WeatherDetails;