import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import Signin from './screens/Signin';
import SignUp from './screens/SignUp';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './screens/getstarted';
import { useAuthContext } from './Context/AuthWrapper';


export default function MainApp() {
    const Stack = createNativeStackNavigator();
    let {token,setToken}=useAuthContext();
    if(token=='')
    {
        return (
            <>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Login" >
                        <Stack.Screen name="Signin" component={Signin} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                    </Stack.Navigator>
                </NavigationContainer>
            </>
        )
    }
    else {
        return(
            <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="GetStarted" >
                    <Stack.Screen name="GetStarted" component={GetStarted} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
        )
    }
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});