import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NativeBaseProvider, Box } from "native-base";

import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import GetStarted from '../screens/getstarted';
import Homepage from '../screens/LoginSuccessScreens/Home';

export default function LoginNavigations() {
    const Tab = createBottomTabNavigator();
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            if (route.name === 'Home') {
                                return (
                                    <Ionicons
                                        name={
                                            focused
                                                ? 'home'
                                                : 'home-outline'
                                        }
                                        size={size}
                                        color={color}
                                    />
                                );
                            } else if (route.name === 'Post a Job') {
                                return (
                                    <AntDesign
                                        name={focused ? 'upload' : 'UploadOutlined'}
                                        size={size}
                                        color={color}
                                    />
                                );
                            }
                        },
                        tabBarInactiveTintColor: 'gray',
                        tabBarActiveTintColor: 'tomato',
                    })}>
                    <Tab.Screen name="GetStarted" component={GetStarted} />
                    <Tab.Screen name="Homepage" component={Homepage} />

                

                </Tab.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}