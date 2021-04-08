import React, { Component, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Splash from './container/Splash';
import Home from './container/Home';
import WeatherDetails from './screen/WeatherDetails';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" headerMode="none">
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="WeatherDetails" component={WeatherDetails} />
        </Stack.Navigator>
    );
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
};

export default AppNavigator;