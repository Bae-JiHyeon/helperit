import React, { useEffect, useState } from "react";
import {View,  FlatList,StyleSheet, StatusBar} from 'react-native';
import { Text, Avatar, Box, Heading, HStack, Spacer, VStack, NativeBaseProvider } from "native-base";
import axios from "axios/index";

const Home_FindTalent = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    // 외부 API에서 데이터를 가져옵니다.
    axios.get('http://10.0.2.2:8000/request/list')
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
      });
  }, []);
    // 데이터를 id 내림차순으로 정렬합니다.
    const sortedData = list.slice().sort((a, b) => b.id - a.id);
    const slicedData = sortedData.slice(0, 4);

  return (
    <NativeBaseProvider>
      <Box>
        <HStack>
          <Heading fontSize="xl" p="4" pb="3">
            헬퍼 재능 찾기
          </Heading>
          <Spacer />
          <Box paddingRight={7} justifyContent={'center'}>
            <Text>전체보기 {'>'}</Text>
          </Box>
        </HStack>
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          data={slicedData}
          renderItem={({item}) => (
            <Box
              _dark={{borderColor: 'muted.50'}}
              borderColor="muted.800"
              pl={['0', '4']}
              pr={['0', '5']}
              py="2">
              <HStack space={[2, 3]} justifyContent="space-between">
                <Box paddingLeft={5}>
                  <Avatar
                    rounded={10}
                    size="48px"
                    source={{uri: item.avatarUrl}}
                  />
                </Box>
                <VStack>
                  <Text _dark={{color: 'warmGray.50'}} color="coolGray.800" bold>
                    {item.id}
                  </Text>
                  <Text color="coolGray.600" _dark={{color: 'warmGray.200'}}>
                    {item.request}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{color: 'warmGray.50'}}
                  color="coolGray.800"
                  alignSelf="flex-start">
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={item => item.id}
        />
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
});
export default Home_FindTalent;
