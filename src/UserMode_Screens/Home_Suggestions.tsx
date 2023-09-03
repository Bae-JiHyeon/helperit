import React from 'react';
import {View, Text} from 'react-native';
import {Box, Button, Heading, HStack, Spacer, VStack} from 'native-base';

const Home_Suggestions = () => {
    return (
        <Box>
            <Heading fontSize="xl" p="4" pb="3">
                이런 일거리 어떠세요?
            </Heading>
            <HStack space={20} justifyContent={'center'} paddingTop={3}>
                <VStack space={5}>
                    <Button w={100} h={100} rounded={15}></Button>
                    <Text>1층에서 3층까지{'\n'}무거운 짐 옮기기</Text>
                    <Button w={100} h={100} rounded={15}></Button>
                    <Text>1층에서 3층까지{'\n'}무거운 짐 옮기기</Text>
                </VStack>
                <VStack space={5}>
                    <Button w={100} h={100} rounded={15}></Button>
                    <Text>1층에서 3층까지{'\n'}무거운 짐 옮기기</Text>
                    <Button w={100} h={100} rounded={15}></Button>
                    <Text>1층에서 3층까지{'\n'}무거운 짐 옮기기</Text>
                </VStack>
            </HStack>
        </Box>
    );
};

export default Home_Suggestions;
