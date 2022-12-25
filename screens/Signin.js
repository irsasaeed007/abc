import React from 'react';
import { View, Text, Image,StyleSheet, useWindowDimensions,ScrollView, secureTextEntry } from "react-native";
import { useState } from 'react';

 import Customnput from '../components/Customnput'
 import CustomButton from '../components/CustomButton';
 import SocialSignInButtons from '../components/SocialSignInButtons';

 const  Signin = ({navigation, route}) => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const {height} = useWindowDimensions();

  return (
     
      <ScrollView showsVerticalScrollIndicator = {false}>
      <View style = {styles.root}>
      <Image
       source={require('../assets/logo.jpg')}
       style= {[styles.Logo, {height: height * 0.3}]}
       resizeMode = "contain"
      />
     
      <Customnput
        placeholder="Username"
        value={Username} 
        setValue={setUsername} 
        
      />
      <Customnput
        placeholder="Password" 
        value={password} 
        setValue={setPassword}  
        secureTextEntry={true}
       
        
      />

       <CustomButton text="Sign in"
       bgColor='#E7EAF4'
         onPress={() => navigation.navigate('Sign Up')}
       />
       
       <CustomButton
         text="Forgot password?"
       
         type="TERTIARY"
         onPress={()=> navigation.navigate('Forget Password')}
       />

      <SocialSignInButtons/>

     <CustomButton
       text="Don't have an account? Create One"
       
       type="TERTIARY"
       onPress={() => navigation.navigate('Sign Up')}
      />

      </View>
      </ScrollView>
  );
};

export default Signin;
const styles = StyleSheet.create({
  root:{
      alignItems : 'center',
      padding: 70,
  },
  Logo: {
      width: '90%',
      maxWidth:500,
      maxHeight:800,
  },
})