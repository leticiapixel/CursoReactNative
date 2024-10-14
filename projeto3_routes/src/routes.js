import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Hello from './pages/hello';
import Home from './pages/home';

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home"component={Home} />
            <Stack.Screen name="Hello"component={Hello} />
        </Stack.Navigator>      
        </NavigationContainer>
    );
}