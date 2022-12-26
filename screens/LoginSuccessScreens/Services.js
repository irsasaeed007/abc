import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { Text, NativeBaseProvider, Box, Center, Container, Heading, VStack, HStack } from "native-base";
// You can import from local files
import { FontAwesome5 } from '@expo/vector-icons';


export default function Services() {

    return (
        <ScrollView>
            <View>
                <Center>
                    <Container>
                        <Heading>
                            What are
                            <Text color="emerald.500"> You</Text> Looking for ?
                        </Heading>
                        <Text mt="3" fontWeight="medium">
                            Here are some Fields where you can hire skilled personals
                        </Text>
                    </Container>
                </Center>

                <VStack space={4} alignItems="center">
                    <HStack>
                        <TouchableOpacity style={{ height: 30, width: 30, padding: 70, margin: 10, alignItems: "center", backgroundColor: "#DDDDDD", borderRadius: 10 }} ><Image
                            source={require('./Pics/plumbing-icon.png')}
                            style={{ width: 50, height: 50 }}
                        /><Text style={{ fontWeight: "bold" }}>Plumber</Text></TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, width: 30, padding: 70, margin: 10, alignItems: "center", backgroundColor: "#DDDDDD", borderRadius: 10 }} ><Image
                            source={require('./Pics/electrician.png')}
                            style={{ width: 50, height: 50 }}
                        /><Text>Electrician</Text></TouchableOpacity>
                    </HStack>
                    <HStack>
                        <TouchableOpacity style={{ height: 40, width: 30, padding: 70, margin: 10, alignItems: "center", backgroundColor: "#DDDDDD", borderRadius: 10 }} ><Image
                            source={require('./Pics/painting.png')}
                            style={{ width: 50, height: 50 }}
                        /><Text>Painter</Text></TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, width: 30, padding: 70, margin: 10, alignItems: "center", backgroundColor: "#DDDDDD", borderRadius: 10 }} ><Image
                            source={require('./Pics/architect.png')}
                            style={{ width: 50, height: 50 }}
                        /><Text>Architect</Text></TouchableOpacity>
                    </HStack>
                    <HStack>
                        <TouchableOpacity style={{ height: 40, width: 30, padding: 70, margin: 10, alignItems: "center", backgroundColor: "#DDDDDD", borderRadius: 10 }} ><Image
                            source={require('./Pics/engineer.png')}
                            style={{ width: 50, height: 50 }}
                        /><Text>Engineer</Text></TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, width: 30, padding: 70, margin: 10, alignItems: "center", backgroundColor: "#DDDDDD", borderRadius: 10 }} ><Image
                            source={require('./Pics/swd.png')}
                            style={{ width: 50, height: 50 }}
                        /><Text>Software Developer</Text></TouchableOpacity>
                    </HStack>
                </VStack>

            </View>
        </ScrollView>
    );
}

