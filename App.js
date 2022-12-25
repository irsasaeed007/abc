import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import Signin from './screens/Signin';
import SignUp from './screens/SignUp';
import getstarted from './screens/getstarted';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();


const App = () => {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen
name="Get Started"
component={getstarted}
/>
<Stack.Screen
name="Sign In"
component={Signin}
/>
<Stack.Screen
name="Sign Up"
component={SignUp}
/>
<Stack.Screen
name="Confirm Email"
component={ConfirmEmailScreen}
/>

<Stack.Screen
name="Forget Password"
component={ForgotPasswordScreen}
/>
<Stack.Screen
name="New Password"
component={NewPasswordScreen}
/>
</Stack.Navigator>
</NavigationContainer>
);
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
