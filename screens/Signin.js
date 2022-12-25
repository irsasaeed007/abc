import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, secureTextEntry, ToastAndroid } from "react-native";
import { useState } from 'react';

import Customnput from '../components/Customnput'
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import { APIGATEWAY } from '../Utils/StaticUtils';
import { useAuthContext } from '../Context/AuthWrapper';

const Signin = ({ navigation, route }) => {

  let {token,setToken}=useAuthContext();

  const { height } = useWindowDimensions();

  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  async function SigninFunc()
  {
    console.log("request ==>",JSON.stringify({ email: Username, password: password }))
      fetch(APIGATEWAY+'Accounts/Login', {
          method: 'POST',
          headers: new Headers({
            "ngrok-skip-browser-warning": "true",
            'Content-Type': 'application/json',
            // 'Authorization':'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImp0aSI6ImM3MGYzZTIwLTE4OTQtNDIyMS1iYzUyLWY5MmQyYjc1ZjQ2NSIsImV4cCI6MTY3MTkxMjQ3M30.drqIfJTxDpZM5HcoqNtFRaxiOGfNk_konIp8_4kQYfw'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }),
          body: JSON.stringify({ email: Username, password: password })
        }).then(async (res) => {
          await res.json().then((suc)=>{
            if(suc.errors)
            {
              if(suc.errors[Object.keys(suc.errors)[0]][0])
              {
                ToastAndroid.showWithGravityAndOffset( suc.errors[Object.keys(suc.errors)[0]][0],  ToastAndroid.LONG,  ToastAndroid.BOTTOM,  25, 50  );
              }
            }else{
              setToken(suc.token)
            }
          }).catch((err)=>{
            ToastAndroid.showWithGravityAndOffset("Invalid Login Attemp!",  ToastAndroid.LONG,  ToastAndroid.BOTTOM,  25, 50  );
          })
        });
  }
  

  return (

    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>

        <Image
          source={require('../assets/logo.jpg')}
          style={[styles.Logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <Customnput placeholder="Username" value={Username} setValue={setUsername} />
        <Customnput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />

        <CustomButton text="Sign in" bgColor='#E7EAF4' onPress={() => SigninFunc()} />
        <CustomButton text="Forgot password?" type="TERTIARY" onPress={() => navigation.navigate('Forget Password')} />

        <SocialSignInButtons />

        <CustomButton text="Don't have an account? Create One" type="TERTIARY" onPress={() => navigation.navigate('SignUp')}/>

      </View>
    </ScrollView>
  );
};

export default Signin;
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 70,
  },
  Logo: {
    width: '90%',
    maxWidth: 500,
    maxHeight: 800,
  },
})