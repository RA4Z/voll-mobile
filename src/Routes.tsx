import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Login from './Login';
import Cadastro from './Cadastro';
import Tabs from './Tabs';

export default function Routes(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login} options={{headerShown: false}}/>
                <Tab.Screen name='Cadastro' component={Cadastro} options={{headerShown: false}}/>
                <Tab.Screen name='Tabs' component={Tabs} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}