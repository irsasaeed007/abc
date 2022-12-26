import * as React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Heading, VStack, FormControl, Icon, Input, Select, CheckIcon, WarningOutlineIcon, Button, Box, Center, TextArea } from "native-base"
import { FontAwesome } from '@expo/vector-icons';


export default function PostJob() {
  return (

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
              <FormControl.Label isRequired>Enter the title of job</FormControl.Label>
              <Input />
            </FormControl>

            <FormControl isRequired>
              <FormControl.Label>Enter the description of Required Job</FormControl.Label>
              <TextArea h={20} placeholder="Text Here" w="100%" maxW="300" />
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

  );
}




{/* <FormControl w="3/4" maxW="300" isRequired isInvalid>
<FormControl.Label>Choose a Category</FormControl.Label>
<Select minWidth="200" accessibilityLabel="Choose a Category" placeholder="Choose a Category" _selectedItem={{
  bg: "teal.600",
  endIcon: <CheckIcon size={5} />
}} mt="1">
  <Select.Item label="Plumber" value="ux" />
  <Select.Item label="Electrician" value="web" />
  <Select.Item label="Gardener" value="cross" />
  <Select.Item label="Architecture" value="ui" />
  <Select.Item label="Carpenter" value="backend" />
</Select>

</FormControl> */}