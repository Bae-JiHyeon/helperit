import React from "react";
import {Badge, Box, Flex, HStack, NativeBaseProvider, Pressable, Spacer, Text} from "native-base";
import {View} from "react-native";

const ProcessPressable=()=>{
    return(
        <NativeBaseProvider>
            <Box alignItems="center" marginTop="7%">
                <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="80" shadow="3" bg="coolGray.100" p="5">
                    <Box>
                        <HStack alignItems="center">
                            <Badge colorScheme="darkBlue" _text={{
                                color: "white"
                            }} variant="solid" rounded="4">
                                Business
                            </Badge>
                            <Spacer />
                            <Text fontSize={10} color="coolGray.800">
                                1 month ago
                            </Text>
                        </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            Marketing License
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            Unlock powerfull time-saving tools for creating email delivery and
                            collecting marketing data
                        </Text>
                        <Flex>
                            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                                Read More
                            </Text>
                        </Flex>
                    </Box>
                </Pressable>
            </Box>
        </NativeBaseProvider>
    );
}
export default ProcessPressable;
