import * as React from 'react';
import { Text, View,Image, TouchableOpacity,StyleSheet,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {Heading,VStack,FormControl,Icon,Input,Select,CheckIcon,WarningOutlineIcon,Button,Box,Center,TextArea} from "native-base"
import { FontAwesome } from '@expo/vector-icons'; 


export default function Bid() {
  return (
    <ScrollView>
   <View>
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome User Name
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Send a proposal
        </Heading>
        <VStack space={3} mt="5">
        <FormControl isRequired>
            <FormControl.Label>Cover Letter</FormControl.Label>
            <TextArea h={20} placeholder="Text Area Placeholder" w="100%" maxW="300" />
          </FormControl>
          <FormControl>
            <FormControl.Label isRequired>Enter your Portfolio</FormControl.Label>
            <Input />
          </FormControl>
     
          <Button mt="2" colorScheme="indigo">
          Submit Bid
          </Button>
        </VStack>
      </Box>
    </Center>
   </View>
   </ScrollView>
  );
}

