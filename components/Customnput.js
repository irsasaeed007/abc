import React from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";
const Customnput = ({value, setValue, placeholder}) => {
    return(
        <View style={StyleSheet.container}>
        <TextInput
        value ={value}
        onChangeText={setValue} 
        placeholder={placeholder}
        style={{margin:5,padding:10,height:40,width:250,borderColor: 'black', borderWidth: 1,borderRadius:10}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'White',
        width : '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {},
});
export default Customnput;