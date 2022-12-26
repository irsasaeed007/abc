import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useAuthContext } from './Context/AuthWrapper'

import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import Signin from './screens/Signin';
import SignUp from './screens/SignUp';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './screens/getstarted';
;
import PostJob from './screens/PostJob';
import LoginSuccessNavigation from './components/LoginSuccessNavigation';
import React, { useState } from 'react';



export default function MainApp() {
    const Stack = createNativeStackNavigator();
    let { token, setToken } = useAuthContext();

    const [routesArr, setRouteArray] = useState([
        {
            key: "Signin",
            value: Signin
        },
        {
            key: "SignUp",
            value: SignUp
        },
    ])



    return (
        <><NavigationContainer>

            {
                token ?
                    <LoginSuccessNavigation />
                    :
                    <Stack.Navigator initialRouteName="Signin" >
                        {routesArr.map((e, i) => { return <Stack.Screen name={e.key} key={i} component={e.value} /> })}
                    </Stack.Navigator>

            }
        </NavigationContainer>
        </>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
