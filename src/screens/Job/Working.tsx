import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import MapView, {PROVIDER_GOOGLE}from "react-native-maps";
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  NativeBaseProvider,
  Spacer,
  Stack,
  Text,
  TextArea,
  VStack
} from "native-base";
import axios from "axios";

const Working=({navigation})=>{
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [purchaseCost, setPurchaseCost] = useState(0);

  const getAPI = () =>{
    axios.get('https://10.0.2.2:8000/request/list')
      .then(res => {
        const resData = res.data;
        const userName = resData.id;
        const userPurchaseCost = resData.purchaseFee;

        setName(userName);
        setPurchaseCost(userPurchaseCost);
          });
  };
  useEffect(() => {
    getAPI();
  }, []);


  return(
    <NativeBaseProvider>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 35.1208085, // 임의로 동명대로 설정, 추후 userLatitude, userLongitude로 바꾸기
          longitude: 129.1012215,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
      </MapView>
      <ScrollView style={styles.container}>
        <VStack alignItems={'flex-start'}>
          <Box w={75} h={50} paddingLeft={5} paddingTop={3}>
            <Badge variant={'solid'} bg={'#0066ff'}>
              <Text color={'#fff'} bold>
                #배달
              </Text>
            </Badge>
          </Box>
          <HStack>
            <Heading paddingLeft={5} size={'sm'}>
              구매대행 해주세요 {purchaseCost}
            </Heading>
            <Spacer />
            <TouchableOpacity>
              <Text paddingRight={5}>신고하기</Text>
            </TouchableOpacity>
          </HStack>
          <HStack paddingLeft={5} paddingY={3}>
            <Text>
              수행일시 {/*등록 날짜 데이터 추가*/} {/*수행 일시 데이터 추가*/}{'\n'}
              <Text color="red.500">
                헬퍼 비용 {/*비용 데이터 추가*/}
              </Text>
            </Text>
          </HStack>
          <Box alignItems={'center'}></Box>
        </VStack>
        <HStack justifyContent={'space-between'} p={5}>
          <VStack>
            <Box>
              <Image
                source={require('../../Assets/userIcon.png')}
                resizeMode={'contain'}
                style={{width: 70, height: 70}}
              />
            </Box>
            <Button backgroundColor={'#0066ff'}>
              <Text color={'#fff'}>진행 전</Text>
            </Button>
          </VStack>
          <Box justifyContent={'center'}>
            <Image
              source={require('../../Assets/arrow.png')}
              resizeMode={'contain'}
              style={{width: 40, height: 70}}
            />
          </Box>
          <VStack>
            <Box>
              <Image
                source={require('../../Assets/userIcon.png')}
                resizeMode={'contain'}
                style={{width: 70, height: 70}}
              />
            </Box>
            <Button backgroundColor={'#0066ff'}>
              <Text color={'#fff'}>수행확인</Text>
            </Button>
          </VStack>
          <Box justifyContent={'center'}>
            <Image
              source={require('../../Assets/arrow.png')}
              resizeMode={'contain'}
              style={{width: 40, height: 70}}
            />
          </Box>
          <VStack>
            <Box>
              <Image
                source={require('../../Assets/userIcon.png')}
                resizeMode={'contain'}
                style={{width: 70, height: 70}}
              />
            </Box>
            <Button backgroundColor={'#0066ff'}>
              <Text color={'#fff'}>완료확인</Text>
            </Button>
          </VStack>
        </HStack>
        <Box w={'100%'} alignItems={'center'}>
          <Button w={'90%'} backgroundColor={'#34BEBA'}>
            <Text color={'#fff'}>완료 확인</Text>
          </Button>
        </Box>
        <Text paddingLeft={5} paddingTop={10} paddingBottom={3}>
          물품 음식 비용
        </Text>
        <Box w={'100%'} alignItems={'center'}>
          <TextArea editable={false} w={'90%'} h={'50'}>
            {purchaseCost}
          </TextArea>
        </Box>
        <Text paddingLeft={5} paddingTop={10} paddingBottom={3}>
          일거리 요청 내용
        </Text>
        <Box w={'100%'} alignItems={'center'}>
          <TextArea editable={false} w={'90%'} h={'50'}>
            {purchaseCost}
          </TextArea>
        </Box>
        <Text paddingLeft={5} paddingTop={10} paddingBottom={3}>
          경유지
        </Text>
        <Box w={'100%'} alignItems={'center'}>
          <TextArea editable={false} w={'90%'} h={'50'}>
            {/*axios get 경유지 주소*/}
          </TextArea>
        </Box>
        <Text paddingLeft={5} paddingTop={10} paddingBottom={3}>
          도착지
        </Text>
        <Box w={'100%'} alignItems={'center'}>
          <TextArea editable={false} w={'90%'} h={'50'}>
            {/*axios get 도착지 주소*/}
          </TextArea>
        </Box>
        <Text paddingLeft={5} paddingTop={10}>
          신청인</Text>
        <Box alignItems="center"
             paddingTop={3}>
          <Box
            w={'90%'}
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700',
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: 'gray.50',
            }}>
            <HStack>
              <Box backgroundColor={'coolGray.300'} w={'20%'}>
                <Stack justifyContent={'center'} alignItems={'center'}>
                  <Image
                    source={require('../../Assets/userIcon.png')}
                    resizeMode={'contain'}
                    style={{width: 65, height: 75}}
                  />
                </Stack>
              </Box>
              <Box>
                <HStack p={3} justifyContent={'space-between'} space={5}>
                  <VStack>
                    <Text fontSize={'xl'}>{name}</Text>
                    <Text>30대 남</Text>
                  </VStack>
                  <VStack>
                    <Text>여기에 별점 넣기</Text>
                    <Text fontSize={'xs'} color={'coolGray.500'}>
                      수행 횟수 15건
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </HStack>
          </Box>
        </Box>
        <HStack
          justifyContent={'center'}
          space={'25%'}
          paddingX={5}
          paddingY={10}>
          <Button w={'24%'} bg={'#0066ff'}>
            <Text color={'#fff'} bold>
              전화하기
            </Text>
          </Button>
          <Button w={'26%'} bg={'#0066ff'} onPress={getAPI}>
            <Text color={'#fff'} bold>
              헬퍼톡하기
            </Text>
          </Button>
        </HStack>
      </ScrollView>
    </NativeBaseProvider>

  )
}
const styles =StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    flex:0.35,
  }
})
export default Working
