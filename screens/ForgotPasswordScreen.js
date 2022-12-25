import React, {useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from "react-native";
import Customnput from '../components/Customnput';
import CustomButton from '../components/Customnput';
import SocialSignInButtons from '../components/SocialSignInButtons';

const ForgotPasswordScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
  

    const onConfirmPressed = () => {
        console.warn('onConfirmPressed');
    };

    const onSigninPressed = ()=> {
        console.warn('onSignUpPressed');
    };

    const onSendPressed = () => {
        console.warn('onSendPressed');
    }
    return (
        <>
        <View style = {styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        
        <Customnput
        placeholder="Username" 
        value={username} 
        setValue={setUsername} 
         />

         <CustomButton 
         text="Send" 
         bgColor='#E7EAF4'
         onPress={()=> navigation.navigate('Email Confirmation')}
         />
         <Text style={styles.text}/>

         <CustomButton
        text="Back to Sign in"
        onPress={()=> navigation.navigate('Sign In')}
        type="TERTIARY"
        />

        </View>
        </>
    );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'Black',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical:  10,
    },
    link:{
        color: 'FDB075'
    },


})