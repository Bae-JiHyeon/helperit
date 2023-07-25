//1. 지도에 사용자의 위치를 받아 지도의 중심에 놓이도록 하기. (시뮬레이터 상에서 위치정보 제공하는 방법 찾아야함)
//2. 지도 안에 출발지, 도착지가 다 들어올 수 있도록 줌 인/아웃 설정하기.
//3. 지도 확대/축소 버튼 달기
//4. 구글 맵을 사용하고 싶은데 애플 맵으로 설정되는 문제.

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {
  AspectRatio,
  Avatar,
  Badge,
  Box,
  Card,
  Center,
  Heading,
  HStack,
  NativeBaseProvider,
  Spacer,
  Stack,
  Text,
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
  } = route.params;
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);

  const formatTotalCost = totalCost => {
    return totalCost.toLocaleString();
  };
  console.log('userLocation is : ' + userLatitude + ' ' + userLongitude);
  console.log('startLocation is : ' + startLatitude + ' ' + startLongitude);
  console.log('endLocation is : ' + endLatitude + ' ' + endLongitude);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{latitude: 37.78825, longitude: -122.4324}}
            title="Marker Title"
            description="Marker Description"
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
        <VStack alignItems={'flex-start'}>
          <Box w={75} h={50} padding={3}>
            <Badge variant={'solid'} colorScheme={'info'}>
              <Text color={'white'} bold>
                #배달
              </Text>
            </Badge>
          </Box>
          <HStack>
            <Heading paddingLeft={3} size={'sm'}>
              구매대행 해주세요
            </Heading>
            <Spacer />
            <TouchableOpacity>
              <Text paddingRight={5}>신고하기</Text>
            </TouchableOpacity>
          </HStack>
          <HStack padding={3}>
            <Text>
              수행일시 {selectedTiming} {'\n'}
              <Text color="red.500">
                헬퍼 비용 {formatTotalCost(totalCost)}원
              </Text>
            </Text>
          </HStack>
          <Box alignItems={'center'}></Box>
        </VStack>
        <Text paddingLeft={3}>매칭 헬퍼</Text>
        <Box alignItems="center">
          <Box
            w={'95%'}
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
                <Stack>
                  <Text>here will be an Icon of user</Text>
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
      </View>
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
