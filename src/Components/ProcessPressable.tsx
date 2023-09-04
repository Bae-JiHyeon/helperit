//수행시 수행중 스크린에 나올 pressable 버튼(누르면 진행중인 심부름 화면)
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Badge, Box, Flex, HStack, NativeBaseProvider, Pressable, Spacer, Text } from "native-base";
import axios from 'axios';

const ProcessPressable: React.FC = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // 외부 API에서 데이터를 가져옵니다.
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then((response) => {
              setUsers(response.data);
          })
          .catch((error) => {
              console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
          });
    }, []);

    const renderItem = ({ item }) => {
        return (
          <NativeBaseProvider>
              <Box alignItems="center" marginTop="7%">
                  <Pressable onPress={() => console.log(`누른 항목:`)} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="80" shadow="3" bg="coolGray.100" p="5">
                      <Box>
                          <HStack alignItems="center">
                              <Badge colorScheme="darkBlue" _text={{
                                  color: "white"
                              }} variant="solid" rounded="4">
                                  {item.name}
                              </Badge>
                              <Spacer />
                              <Text fontSize={10} color="coolGray.800">
                                  1 month ago
                              </Text>
                          </HStack>
                          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                              {item.address.city}
                          </Text>
                          <Text mt="2" fontSize="sm" color="coolGray.700">
                              {item.company.catchPhrase}
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
    };

    return (
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
};

export default ProcessPressable;
