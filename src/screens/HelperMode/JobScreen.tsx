import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import { FlatList, StyleSheet, View } from "react-native";
import axios from "axios";

const JobScreen = () => {
  const [data, setData] = useState([]);
  const baseURL = 'https://jsonplaceholder.typicode.com';

  const getAPI = () => {
    axios({
      method: 'GET',
      url: `${baseURL}/posts`,
    })
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <Box>
      <HStack>
        <Heading fontSize="xl" p="4" pb="3">
          실시간 일거리 요청
        </Heading>
        <Spacer />
        <Box paddingRight={7} justifyContent={'center'}>
          <Text>전체보기 {'>'}</Text>
        </Box>
      </HStack>
      <FlatList
        data={data}
        ListEmptyComponent={() => (
          <Text
            style={{
              fontSize: 40,
              color: 'black',
              textAlign: 'center',
            }}>
            No Data
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{fontSize: 10, color: 'black'}}>Id: {item.id}</Text>
            <Text style={{fontSize: 10, color: 'black'}} numberOfLines={1}>Title: {item.title}</Text>
            <Text style={{fontSize: 10, color: 'black'}} numberOfLines={1}>Body: {item.body}</Text>
          </View>
        )}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
});

export default JobScreen;
