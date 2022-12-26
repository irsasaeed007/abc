import * as React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Heading, VStack, FormControl, Icon, Input, Select, CheckIcon, WarningOutlineIcon, Button, Box, Center, TextArea } from "native-base"
import { FontAwesome } from '@expo/vector-icons';


export default function PostJob() {
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
                            Post A Job
                        </Heading>
                        <VStack space={3} mt="5">
                            <FormControl>
                                <FormControl.Label isRequired>Enter the title of your job</FormControl.Label>
                                <Input />
                            </FormControl>
                            <FormControl isRequired>
                                <FormControl.Label>Enter the description of the Position</FormControl.Label>
                                <TextArea h={20} placeholder="Text Area Placeholder" w="100%" maxW="300" />
                            </FormControl>
                            <FormControl w="3/4" maxW="300" isRequired isInvalid>
                                <FormControl.Label>Choose a Category</FormControl.Label>
                                <Select minWidth="200" accessibilityLabel="Choose a Category" placeholder="Choose a Category" _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size={5} />
                                }} mt="1">
                                    <Select.Item label="UX Research" value="ux" />
                                    <Select.Item label="Web Development" value="web" />
                                    <Select.Item label="Cross Platform Development" value="cross" />
                                    <Select.Item label="UI Designing" value="ui" />
                                    <Select.Item label="Backend Development" value="backend" />
                                </Select>

                            </FormControl>
                            <FormControl>
                                <FormControl.Label isRequired>Salary</FormControl.Label>
                                <Input
                                    InputLeftElement={<Icon as={<FontAwesome name="dollar" size={24} color="black" />} size={5} ml="2" color="muted.400" />} />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label isRequired>Contract Duration</FormControl.Label>
                                <Input />
                            </FormControl>
                            <Button mt="2" colorScheme="indigo">
                                Post
                            </Button>
                        </VStack>
                    </Box>
                </Center>
            </View>
        </ScrollView>
    );
}

