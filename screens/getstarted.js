import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';




export default function GetStarted() {
  const Note = React.useState('WELCOME TO THE SKILL FINDER APP');
  return (
    <View style={styles.container2}>
      <View>
        <Image style={styles.img} source={require('../assets/logo.jpg')} />

      </View>
      <View>
        <Text style={styles.text1}>{Note}</Text>
      </View>
      <TouchableOpacity style={styles.text2}><Text>Join as a Skilled person</Text></TouchableOpacity>
      <TouchableOpacity style={styles.text2}><Text>Join as a Customer</Text></TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: 'white',
  },
  text1: {
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    backgroundColor: 'black',
    marginLeft: 50,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    width: 250,
    height: 40,
    maxWidth: 250,
    maxHeight: 40,
    alignItems: 'center',

  },
  img: {
    width: 330,
    height: 200,
  },
});
