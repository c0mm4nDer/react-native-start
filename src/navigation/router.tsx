import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home';
import { LoginScreen } from '../screens/login';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HomeTitle' }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'LoginTitle' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;