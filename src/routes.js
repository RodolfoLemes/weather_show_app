import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Weather from './screens/Weather'

const Stack = createStackNavigator()

StatusBar.setBarStyle('light-content')

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#457b9d',
              elevation: 0,
            },
            headerTintColor: '#fff',
          })}
        />
        <Stack.Screen name="Weather" component={Weather}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#457b9d',
              elevation: 0,
            },
            headerTintColor: '#fff',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
