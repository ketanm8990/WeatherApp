import React, { useEffect, useState } from 'react';
import { Alert, View, FlatList, Text, SafeAreaView, Platform, TouchableOpacity, ActivityIndicator, BackHandler } from 'react-native';
import styles from './style';
import CommonStyles from '../../common/CommonStyles';
import Geolocation from 'react-native-geolocation-service';
import { request, check, PERMISSIONS, openSettings } from 'react-native-permissions';
import { useFocusEffect } from '@react-navigation/native';

/*
* Home screen design
*/

const Home = (props) => {

    // exit app dialog
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                Alert.alert('Hold on!', 'Are you sure you want to exit app?', [
                    {
                        text: 'Cancel',
                        onPress: () => null,
                        style: 'cancel',
                    },
                    { text: 'YES', onPress: () => BackHandler.exitApp() },
                ]);
                // Return true to stop default back navigaton
                // Return false to keep default back navigaton
                return true;
            };

            // Add Event Listener for hardwareBackPress
            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () => {
                // Once the Screen gets blur Remove Event Listener
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
            };
        }, [])
    );

    useEffect(() => {
        request(
            Platform.OS === 'ios'
                ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                : PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        ).then((result) => {
            if (result == 'granted') {
                getLocation();
            } else {
                Alert.alert('Weather App', 'Please allow location permisson as open setting!', [
                    {
                        text: 'Cancel',
                        onPress: () => null,
                        style: 'cancel',
                    },
                    { text: 'YES', onPress: () => openSettings().catch(() => console.warn('cannot open settings')) },
                ]);
            }
        }).catch(() => {
        });
    }, [])

    const getLocation = async () => {
        await Geolocation.getCurrentPosition(
            async (position) => {
                props.getWeather(position?.coords?.latitude?.toFixed(4), position?.coords?.longitude?.toFixed(4))
            },
            (error) => {
                props.getWeather("21.1702", "72.8311")
            },
            { enableHighAccuracy: false, timeout: 36000, maximumAge: 1000 }
        );
    }

    const renderItem = (item, index) => {
        return (
            <TouchableOpacity key={index} style={styles.renderView} onPress={() => props.navigation.navigate('WeatherDetails', { item })}>
                <View style={CommonStyles.flexOne}>
                    <Text style={styles.cityName}>{item.name}</Text>
                    <Text style={styles.descTxt}>{item.weather[0].description}</Text>
                </View>
                <Text style={styles.celsiusTxt}>
                    {item.main.temp} °C
                </Text>
            </TouchableOpacity>
        );
    };

    const flatListItemSeparator = () => {
        return (
            <View  style={{ height: 1, backgroundColor: "gray" }}  />
        );
    }

    return (
        <View style={CommonStyles.flexOne}>
            <SafeAreaView style={CommonStyles.backgroundPrimary} />
            <View style={[CommonStyles.header, CommonStyles.backgroundPrimary]}>
                <Text style={[CommonStyles.headerTitle, { flex: 1 }]}>WeatherApp</Text>
            </View>
            <View style={CommonStyles.flexOne}>
                {
                    props.loading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator color='green' size='large' />
                        </View>
                        :
                        props.weatherData && props.weatherData.length > 0 ?
                            <FlatList
                                data={props.weatherData}
                                renderItem={({ item, index }) => renderItem(item, index)}
                                keyExtractor={(item, index) => index.toString()}
                                ItemSeparatorComponent={flatListItemSeparator}
                            />
                            :
                            <View style={styles.emptyListStyle}>
                                <Text>No Weather Data Found</Text>
                            </View>
                }
            </View>
        </View>
    )
}

export default Home;