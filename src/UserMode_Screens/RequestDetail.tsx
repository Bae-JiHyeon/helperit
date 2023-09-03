//1. 지도에 사용자의 위치를 받아 지도의 중심에 놓이도록 하기. (시뮬레이터 상에서 위치정보 제공하는 방법 찾아야함)
//2. 지도 확대/축소 버튼 달기
//3. 구글 맵을 사용하고 싶은데 애플 맵으로 설정되는 문제.
//4. 스크롤 뷰 안에 지도를 넣을 수 없음 > 지도가 위에 고정되고 아래쪽 화면만 어색하게 스크롤됨.
//5. 매칭 헬퍼 부분에 헬퍼 정보를 얻어와서 내용 채울 수 있도록 해야함.

import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
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
    VStack,
} from 'native-base';

const MapScreen = ({route}) => {
    const {
        totalCost,
        startLatitude,
        startLongitude,
        endLatitude,
        endLongitude,
        selectedTiming,
        request,
        purchaseFee,
        isNeed,
        startLocName,
        endLocName,
        otherInfo,
    } = route.params;
    const [userLatitude, setUserLatitude] = useState(null);
    const [userLongitude, setUserLongitude] = useState(null);

    const formatTotalCost = totalCost => {
        return totalCost.toLocaleString();
    };

    useEffect(() => {
        const markers = [
            {latitude: 35.1208085, longitude: 129.1012215}, // 임의로 동명대로 설정, 추후 userLatitude, userLongitude로 바꾸기
            {latitude: startLatitude, longitude: startLongitude},
            {latitude: endLatitude, longitude: endLongitude},
        ];

        if (mapRef.current) {
            mapRef.current.fitToCoordinates(markers, {
                edgePadding: {top: 35, right: 35, bottom: 15, left: 35}, // 마커와 지도의 경계 간격 설정
                animated: true, // 애니메이션 적용 여부
            });
        }
    }, [
        userLongitude,
        userLatitude,
        startLatitude,
        startLongitude,
        endLatitude,
        endLongitude,
    ]);

    const mapRef = useRef();

    return (
      <NativeBaseProvider>
          <MapView
            ref={mapRef}
            style={styles.map}
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
                coordinate={{latitude: startLatitude, longitude: startLongitude}}
                title="출발지"
                description="출발지"
              />
              <Marker
                coordinate={{latitude: endLatitude, longitude: endLongitude}}
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
                          구매대행 해주세요
                      </Heading>
                      <Spacer />
                      <TouchableOpacity>
                          <Text paddingRight={5}>신고하기</Text>
                      </TouchableOpacity>
                  </HStack>
                  <HStack paddingLeft={5} paddingY={3}>
                      <Text>
                          수행일시 {selectedTiming} {'\n'}
                          <Text color="red.500">
                              헬퍼 비용 {formatTotalCost(totalCost)}원
                          </Text>
                      </Text>
                  </HStack>
                  <Box alignItems={'center'}></Box>
              </VStack>
              <Text paddingLeft={5} paddingBottom={3}>
                  매칭 헬퍼
              </Text>
              <Box alignItems="center">
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
                                    source={require('../Assets/userIcon.png')}
                                    resizeMode={'contain'}
                                    style={{width: 65, height: 75}}
                                  />
                              </Stack>
                          </Box>
                          <Box>
                              <HStack p={3} justifyContent={'space-between'} space={5}>
                                  <VStack>
                                      <Text fontSize={'xl'}>김헬퍼 헬퍼님</Text>
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
              <HStack justifyContent={'space-between'} p={5}>
                  <VStack>
                      <Box>
                          <Image
                            source={require('../Assets/userIcon.png')}
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
                        source={require('../Assets/arrow.png')}
                        resizeMode={'contain'}
                        style={{width: 40, height: 70}}
                      />
                  </Box>
                  <VStack>
                      <Box>
                          <Image
                            source={require('../Assets/userIcon.png')}
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
                        source={require('../Assets/arrow.png')}
                        resizeMode={'contain'}
                        style={{width: 40, height: 70}}
                      />
                  </Box>
                  <VStack>
                      <Box>
                          <Image
                            source={require('../Assets/userIcon.png')}
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
                  {isNeed === '구매 필요' ? (
                    <TextArea editable={false} w={'90%'}>
                        {isNeed}, {purchaseFee}원
                    </TextArea>
                  ) : (
                    <TextArea editable={false} w={'90%'}>
                        {isNeed}
                    </TextArea>
                  )}
              </Box>
              <Text paddingLeft={5} paddingY={3}>
                  일거리 요청 내용
              </Text>
              <Box w={'100%'} alignItems={'center'}>
                  <TextArea editable={false} w={'90%'}>
                      {request}
                  </TextArea>
              </Box>
              <Text paddingLeft={5} paddingY={3}>
                  경유지
              </Text>
              <Box w={'100%'} alignItems={'center'}>
                  <TextArea editable={false} w={'90%'} h={'50'}>
                      {startLocName}
                  </TextArea>
              </Box>
              <Text paddingLeft={5} paddingY={3}>
                  도착지
              </Text>
              <Box w={'100%'} alignItems={'center'}>
                  <TextArea editable={false} w={'90%'} h={'50'}>
                      {endLocName}
                  </TextArea>
              </Box>
              <Text paddingLeft={5} paddingY={3}>
                  기타 정보
              </Text>
              <Box w={'100%'} alignItems={'center'}>
                  <TextArea
                    value={otherInfo}
                    editable={false}
                    w={'90%'}
                    h={'50'}></TextArea>
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
                  <Button w={'26%'} bg={'#0066ff'}>
                      <Text color={'#fff'} bold>
                          헬퍼톡하기
                      </Text>
                  </Button>
              </HStack>
          </ScrollView>
      </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 0.35,
    },
});

export default MapScreen;
