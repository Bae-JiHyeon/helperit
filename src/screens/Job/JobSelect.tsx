import React from "react";
import {View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import MapView, {PROVIDER_GOOGLE}from "react-native-maps";
import {Badge, Box, Heading, HStack, NativeBaseProvider, Spacer, Text, VStack} from "native-base";

const JobSelect=()=>{
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
                            구매대행 해주세요 {/*카테고리 데이터 추가*/}
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
