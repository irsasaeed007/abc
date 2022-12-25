import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Customnput from '../components/Customnput'
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import { APIGATEWAY } from '../Utils/StaticUtils';


const SignUp = ({ navigation }) => {

    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [accountType, setAccountType] = useState('');


    return (

        <View style={styles.root}>
            <Image
                source={require('../assets/logo.jpg')}
                style={{ height: 100, width: 100 }}
                resizeMode="contain"
            />

            <Text style={{ fontWeight: "600", fontSize: 20 }} >Join <Text style={{ color: "blue" }} >SkillFinder</Text></Text>
            <Text style={{ fontWeight: "100", color: "grey" }}>Explore Oppurtunities</Text>

            <View style={{ marginTop: 20 }} >
                <Customnput placeholder="Username" value={username}  setValue={setUsername} />
                <Customnput placeholder="Email" value={email} setValue={setEmail} />
                <Customnput placeholder="Account Type" value={accountType} setValue={setAccountType} />
                <Customnput placeholder="Password"  value={password} setValue={setPassword} secureTextEntry={true} />
                <Customnput placeholder="Confirm Password"  value={passwordRepeat}  setValue={setPasswordRepeat}  secureTextEntry={true} />
            </View>

            <CustomButton text="Register" bgColor='#E7EAF4'  onPress={() => SignupFunc()} />

            <SocialSignInButtons />

        </View>

    );
};
export default SignUp;
const styles = StyleSheet.create({
    root: {
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
        marginVertical: 10,
    },
    link: {
        color: 'FDB075'
    },
})