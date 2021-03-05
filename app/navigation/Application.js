import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { DarkTheme, LightTheme } from '../theme/ThemeNavigation'
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';

const Stack = createStackNavigator();

export default function Application() {
    return (
        <NavigationContainer theme={LightTheme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
