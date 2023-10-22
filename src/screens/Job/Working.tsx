import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, Button } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  Badge,
  Box,
  Heading,
  HStack,
  NativeBaseProvider,
  Spacer,
  Stack,
  Text,
  TextArea,
  VStack,
  Button as NBButton
} from "native-base";
import axios from "axios";

const Working=({navigation})=>{
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [purchaseCost, setPurchaseCost] = useState(0);
  const [category, setCategory] = useState('');

  const [buttonText1, setButtonText1] = useState('시작'); // 첫 번째 버튼의 초기 텍스트
  const [buttonText2, setButtonText2] = useState('수행중');
  const [buttonText3, setButtonText3] = useState('완료'); // 첫 번째 버튼의 초기 텍스트
  const [buttonText4, setButtonText4] = useState('완료 확인 요청');

  {/*
    const getAPI = () => {
      axios.get("https://10.0.2.2:8000/request/list")
        .then(res => {
          const resData = res.data;
          const userName = resData.id;
          const userPurchaseCost = resData.purchaseFee;
          const userCategory = resData.category;

          setName(userName);
          setPurchaseCost(userPurchaseCost);
          setCategory(userCategory);
        });
    };
    useEffect(() => {
      getAPI();
    }, []);
  */}
  const changeText1 = () => {
    setButtonText1('완료'); // 첫 번째 버튼의 텍스트 변경
  };

  const changeText2 = () => {
    setButtonText2('수행 완료'); // 두 번째 버튼의 텍스트 변경
  };
  const changeText3 = () => {
    setButtonText3('완료'); // 세 번째 버튼의 텍스트 변경
  };

  const changeText4 = () => {
    setButtonText4('고객 확인 요청중'); // 네 번째 버튼의 텍스트 변경
  };


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
        <Marker
          coordinate={{latitude: 35.1208085, longitude: 129.1012215}} // 임의로 동명대로 설정, 추후 userLatitude, userLongitude로 바꾸기
          title="내 위치"
        />
        <Marker
          coordinate={{latitude: 35.1208085, longitude: 129.1012215}}
          title="출발지"
          description="출발지"
        />
        <Marker
          coordinate={{latitude: 35.1397716, longitude: 129.0984966}}
          title="도착지"
          description="도착지"
        />
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
              일거리 요청
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
            <Button title={buttonText1} onPress={changeText1}/>
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
            <Button title={buttonText2} onPress={changeText2}/>
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
            <Button title={buttonText3} onPress={changeText3}/>
          </VStack>
        </HStack>
        <Box w={'100%'} alignItems={'center'}>
          <TouchableOpacity onPress={changeText4}
                            style={{ width: '80%',padding: 10, borderRadius: 6, backgroundColor: '#34BEBA'}}>
            <Text style={{textAlign: 'center'}}>{buttonText4}</Text>
          </TouchableOpacity>
        </Box>
        <Text paddingLeft={5} paddingTop={10} paddingBottom={3}>
          물품 음식 비용
        </Text>
        <Box w={'100%'} alignItems={'center'}>
          <TextArea editable={false} w={'90%'} h={'60'}>
            0
          </TextArea>
        </Box>
        <Text paddingLeft={5} paddingTop={10} paddingBottom={3}>
          일거리 요청 내용
        </Text>
        <Box w={'100%'} alignItems={'center'}>
          <TextArea editable={false} w={'90%'} h={'60'}>
            Test
          </TextArea>
        </Box>
        <Text paddingLeft={5} paddingTop={10} paddingBottom={3}>
          경유지
        </Text>
        <Box w={'100%'} alignItems={'center'}>
          <TextArea editable={false} w={'90%'} h={'60'}>
            <Text>3428 Sinseon-ro, Nam-gu, Busan, South Korea 동명대학교</Text>{/*axios get 경유지 주소*/}
          </TextArea>
        </Box>
        <Text paddingLeft={5} paddingTop={10} paddingBottom={3}>
          도착지
        </Text>
        <Box w={'100%'} alignItems={'center'}>
          <TextArea editable={false} w={'90%'} h={'60'}>
            <Text>309 Suyeong-ro, Nam-gu, Busan, South Korea 경성대학교</Text>{/*axios get 도착지 주소*/}
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
                    <Text fontSize={'xl'}>Test 핼퍼님</Text>

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
          <NBButton w={'24%'} bg={'#0066ff'}>
            <Text color={'#fff'} bold>
              전화하기
            </Text>
          </NBButton>
          <NBButton w={'26%'} bg={'#0066ff'} >
            <Text color={'#fff'} bold>
              헬퍼톡하기
            </Text>
          </NBButton>
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
