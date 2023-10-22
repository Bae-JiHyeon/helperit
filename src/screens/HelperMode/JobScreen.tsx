import JobSelect from "../Job/JobSelect";

{/*헬퍼 모드 처음 진입시 실시간 일거리 요청 리스트 페이지*/}

import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Modal,Alert, Pressable
} from "react-native";
import { Text, Avatar, Box, Heading, HStack, Spacer, VStack, NativeBaseProvider,  Checkbox } from "native-base";
import axios from "axios/index";
import { useFocusEffect } from "@react-navigation/native";
import TermsModal from "../JoinHelper/TermsModal";

const JobScreen = ({navigation}) => {
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://10.0.2.2:8000/request/list');
      setList(res.data);
    } catch (error) {
      console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
    }
  };

  //화면 이동시 데이터를 다시 GET
  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );
  //위로 스크롤시 새로 고침
  const onRefresh = useCallback(() => {
    // 여기에서 데이터를 다시 불러오거나 원하는 작업을 수행합니다.
    fetchData();
    setRefreshing(false);
  }, []);

  // 데이터를 id 내림차순으로 정렬(최신화)
  const sortedData = list.slice().sort((a, b) => b.id - a.id);
  const slicedData = sortedData.slice(0, 1);

  const extractPlaceName = (requestPlace) => {
    //주소를 공백 단위로 끊어서 내가 표현하고 싶은 주소까지만 표현
    const parts = requestPlace.split(' ');
    return parts.slice(1, 5).join(' ');
  };

  {/*
    const handlePostPress = () => {
      setModalVisible(true);
    };
  */}
   //원래 누르면 일거리 페이지 가는 함수
    const handlePostPress = (post) => {
      navigation.navigate("JobSelect", { post });
    };


  return (
    <ScrollView
      refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
    }>
      <NativeBaseProvider>
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
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            data={slicedData}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handlePostPress(item)}>
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
                      size="60px"
                      source={{uri: item.avatarUrl}}
                    />
                  </Box>
                  <VStack>
                    <Text color="black" _dark={{color: 'warmGray.50'}}>
                      {item.category}
                    </Text>
                    <Text color="black" _dark={{color: 'warmGray.200'}}>
                      {extractPlaceName(item.request_place)}
                    </Text>
                    <Text fontSize="xs" color="black" _dark={{color: 'warmGray.50'}} alignSelf="flex-start">
                      비용: {item.total_money} 원
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </Box>
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                style={{textAlign: 'center'}}
              >헬퍼 가입을 해야만 볼 수 있습니다. {"\n"}가입하시겠습니까?</Text>
              <HStack>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text>닫기           </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.replace('JoinHelper')}>
                  <Text>가입 하기</Text>
                </TouchableOpacity>
              </HStack>
            </View>
          </View>
        </Modal>
      </NativeBaseProvider>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default JobScreen;
