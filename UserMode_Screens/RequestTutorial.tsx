//체크박스 구현하기 - Invariant Violation: requireNativeComponent: "RNSVGPath" was not found in the UIManager. 에러 뜨는중
//홈화면의 일거리 요청 버튼과 스택 네비게이터로 연결하기

import React from 'react';
import {
  Box,
  Checkbox,
  Heading,
  HStack,
  NativeBaseProvider,
  Text,
  VStack,
} from 'native-base';
import {ScrollView} from 'react-native';

const RequestTutorial = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <VStack>
          <Box p="6" pb="3">
            <Heading size={'lg'}>
              헬퍼잇 이용이 처음이시죠?{'\n'}헬퍼가 도와드릴게요!
            </Heading>
          </Box>
          <Box p="6" pb="3">
            <VStack paddingTop={10} space={3}>
              <Heading size={'lg'} style={{textAlign: 'right'}}>
                이용 안내 1
              </Heading>
              <Heading size={'sm'} style={{textAlign: 'right'}}>
                일거리를 요청해보세요.
              </Heading>
              <Text style={{textAlign: 'right'}}>
                요청하시는 일거리 내용을 입력해주세요.{'\n'}단 1분이면 일거리를
                완료할 수 있습니다.
              </Text>
            </VStack>
            <VStack paddingTop={10} space={3}>
              <Heading size={'lg'}>이용 안내 2</Heading>
              <Heading size={'sm'}>헬퍼 매칭을 기다려보세요.</Heading>
              <Text>
                요청하시는 일거리에 적합한 헬퍼를 매칭{'\n'}하여 빠르고 안전한
                수행을 도와드립니다.
              </Text>
            </VStack>
            <VStack paddingTop={10} space={3}>
              <Heading size={'lg'} style={{textAlign: 'right'}}>
                이용 안내 3
              </Heading>
              <Heading size={'sm'} style={{textAlign: 'right'}}>
                헬퍼톡 및 수행 내역 제공.
              </Heading>
              <Text style={{textAlign: 'right'}}>
                헬퍼톡으로 신속하게 헬퍼와 소통하고{'\n'}실시간 일거리 수행
                내역으로 진행 상황을{'\n'}확인할 수 있습니다.
              </Text>
            </VStack>
            <VStack paddingTop={10} space={3}>
              <Heading size={'lg'}>이용 안내 4</Heading>
              <Heading size={'sm'}>헬퍼에게 리뷰 남기기.</Heading>
              <Text>
                요청하시는 일거리 내용을 입력해주세요.{'\n'}단 1분이면 일거리를
                완료할 수 있습니다.
              </Text>
              <Heading paddingTop={10} style={{textAlign: 'center'}}>
                망설이지 말고 일거리{'\n'}요청을 남겨보세요!
              </Heading>
            </VStack>
          </Box>
        </VStack>
        <HStack justifyContent={'center'} paddingTop={5} space={3}>
          <Checkbox
            value="test"
            accessibilityLabel="This is a dummy checkbox"
          />
          <Text fontSize="2xl">다시 보지 않기</Text>
        </HStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default RequestTutorial;
