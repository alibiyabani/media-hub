import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import TopMoviesScreen from '../../screens/TopMoviesScreen';
import TopSericeScreens from '../../screens/TopSericeScreens';
import BoxOfficeScreen from '../../screens/BoxOfficeScreen';
import DetailsScreen from '../../screens/DetailsScreen';

const Stack = createStackNavigator(); 

export const MoviesNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'float',
                headerTintColor: '#808080',
                headerStyle: { backgroundColor: '#1d1d1d' },
            }}
        
        >
            <Stack.Screen name={'top250movies'} component={TopMoviesScreen}  options={{ title: 'Media Hub' }}/>
            <Stack.Screen name={'detailsScreen'} component={DetailsScreen} options={{ title: '' }}/>
        </Stack.Navigator>
    )
}

export const SeriesNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'float',
                headerTintColor: '#808080',
                headerStyle: { backgroundColor: '#1d1d1d' },
            }}
        >
            <Stack.Screen name={'top250series'} component={TopSericeScreens} options={{ title: 'Media Hub' }}/>
            <Stack.Screen name={'detailsScreen'} component={DetailsScreen} options={{ title: '' }}/>
        </Stack.Navigator>
    )

}

export const BoxOfficeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'float',
                headerTintColor: '#808080',
                headerStyle: { backgroundColor: '#1d1d1d' },
            }}
        >
            <Stack.Screen name={'boxoffice'} component={BoxOfficeScreen} options={{ title: 'Media Hub' }}/>
            <Stack.Screen name={'detailsScreen'} component={DetailsScreen} options={{ title: '' }}/>
        </Stack.Navigator>
    )

}