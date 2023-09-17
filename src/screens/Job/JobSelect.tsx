import React from "react";
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

const JobSelect=({navigation, route})=>{
    const { post } = route.params;
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
                            {post.category}
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
                                헬퍼 비용 {post.total_money} 원
                            </Text>
                        </Text>
                    </HStack>
                    <Box alignItems={'center'}></Box>
                </VStack>
                <Text paddingLeft={5} paddingTop={10} paddingBottom={3}>
                    물품 음식 비용
                </Text>
                <Box w={'100%'} alignItems={'center'}>
                    <TextArea editable={false} w={'90%'} h={'50'}>
                        {post.goods_money}
                    </TextArea>
                </Box>
                <Text paddingLeft={5} paddingTop={10} paddingBottom={3}>
                    일거리 요청 내용
                </Text>
                <Box w={'100%'} alignItems={'center'}>
                    <TextArea editable={false} w={'90%'} h={'50'}>
                        {post.request}
                    </TextArea>
                </Box>
                <Text paddingLeft={5} paddingTop={10} paddingBottom={3}>
                    경유지
                </Text>
                <Box w={'100%'} alignItems={'center'}>
                    <TextArea editable={false} w={'90%'} h={'50'}>
                        {post.request_place}
                    </TextArea>
                </Box>
                <Text paddingLeft={5} paddingTop={10} paddingBottom={3}>
                    도착지
                </Text>
                <Box w={'100%'} alignItems={'center'}>
                    <TextArea editable={false} w={'90%'} h={'50'}>
                        {post.destination}
                    </TextArea>
                </Box>
                <Box alignItems="center"
                     paddingTop={5}
                     paddingBottom={5}>
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
                <Button onPress={() => navigation.navigate('Working')} bg={'#0066ff'}>
                    일거리 잡기
                </Button>

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
export default JobSelect
