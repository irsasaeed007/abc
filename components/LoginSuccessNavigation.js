import { AntDesign, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react'
import GetStarted from '../screens/getstarted';
import Bid from '../screens/LoginSuccessScreens/Bid';
import FindJobs from '../screens/LoginSuccessScreens/FindJobs';
import Homepage from '../screens/LoginSuccessScreens/Homepage';
import Services from '../screens/LoginSuccessScreens/Services';
import PostJob from '../screens/PostJob';

export default function LoginSuccessNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            if (route.name === 'Homepage') {
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
                    <Tab.Screen name="Homepage" component={Homepage} />
                    <Tab.Screen name="Services" component={Services} />
                    <Tab.Screen name="PostJob" component={PostJob} />
                    <Tab.Screen name="FindJobs" component={FindJobs} />
                    <Tab.Screen name="Bid" component={Bid} />

                </Tab.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
