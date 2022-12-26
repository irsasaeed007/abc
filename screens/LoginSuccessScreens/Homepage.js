import * as React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Box, VStack, Center } from "native-base";
import Swiper from 'react-native-swiper';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Homepage({ navigation }) {
    return (
<ScrollView>
        <View>
            <Swiper
                loop
                autoplay
                style={{ height: 250 }}
            >
                <Image
                    source={require('./Pics/5326050.jpg')}
                    resizeMode="center"
                    style={{ flex: 1, justifyContent: "center", alignItems: "center", height: 400, width: 300 }}
                />


                <Image
                    source={require('./Pics/4786.jpg')}
                    resizeMode="center"
                    style={{ flex: 1, justifyContent: "center", alignItems: "center", height: 400, width: 300 }}
                />
            </Swiper>

            <Box bg="#fff" alignItems="center" justifyContent="center">
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Welcome to Skill<Text style={{ color: "blue" }}>Finder
                </Text>App</Text>
            </Box>

            <VStack space={4} style={{ marginTop: 25 }} alignItems="center">

                <TouchableOpacity onPress={() => navigation.navigate("Post a Job")} >
                    <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} >

                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }} >
                            <AntDesign name="upload" size={24} color="black" style={{ marginRight: 10 }} />
                            Post a Job
                        </Text>
                    </Center>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} >
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}><Entypo name="back-in-time" size={24} color="black" style={{ marginRight: 10 }} />
                            Recent Jobs
                        </Text>
                    </Center>
                </TouchableOpacity>
            </VStack>
        </View>
        </ScrollView>
    );
}