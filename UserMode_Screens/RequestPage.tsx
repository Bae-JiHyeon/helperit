//일거리 요청 정보 작성하는 페이지
//수행지, 도착지 모양 설정하기
//일거리 요청 내용 밑에 사진 첨부하는 기능
//일거리 요청하기 버튼으로 다음 페이지로 이동하는 기능
//일거리 요청하기 버튼 위 총 일거리 비용이 계산된 결과값으로 출력하는 기능

import React, {useState} from 'react';
import {
  Box,
  Button,
  Heading,
  Input,
  NativeBaseProvider,
  Text,
  TextArea,
  VStack,
} from 'native-base';
import {SelectList} from 'react-native-dropdown-select-list';
import {ScrollView, TextInput} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const RequestPage = () => {
  const [selected, setSelected] = React.useState('');

  const data_categories = [
    {key: 'Request', value: '일거리 요청'},
    {key: 'Trash', value: '분리수거 배출'},
    {key: 'CleanUp', value: '가정집 청소'},
  ];
  const data_timing = [
    {key: 'Urgent', value: '즉시수행'},
    {key: 'Check', value: '예약수행'},
  ];
  const data_isNeedPurchase = [
    {key: 'false', value: '구매 불필요'},
    {key: 'true', value: '구매 필요'},
  ];

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box>
          <VStack p={6} space={5}>
            <Heading>카테고리</Heading>
            <SelectList
              placeholder={'옵션을 선택해주세요.'}
              search={false}
              setSelected={setSelected}
              data={data_categories}
            />
            <Heading>수행일시</Heading>
            <SelectList
              placeholder={'옵션을 선택해주세요.'}
              search={false}
              setSelected={setSelected}
              data={data_timing}
            />
            <Heading>물품 구매비</Heading>
            <SelectList
              placeholder={'옵션을 선택해주세요.'}
              search={false}
              setSelected={setSelected}
              data={data_isNeedPurchase}
            />
            {selected === 'true' && (
              <>
                <Input placeholder={'예상 구매 가격을 입력하세요'} />
              </>
            )}
            <VStack>
              <Heading>일거리 요청 내용</Heading>
              <Text fontSize={'xs'} paddingLeft={3}>
                *내용이 상세할수록 일거리 수행이 신속하고 정확하게 수행됩니다.
              </Text>
            </VStack>
            <TextArea
              placeholder={'원하시는 요청 내용을 입력해주세요'}
              autoCompleteType="off"></TextArea>
            <Heading>수행지</Heading>
            <GooglePlacesAutocomplete
              styles={{
                container: {
                  flex: 1,
                },
                textInputContainer: {
                  flexDirection: 'row',
                },
                textInput: {
                  backgroundColor: '#FFFFFF',
                  height: 44,
                  borderRadius: 5,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  fontSize: 15,
                  flex: 1,
                },
                poweredContainer: {
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  borderBottomRightRadius: 5,
                  borderBottomLeftRadius: 5,
                  borderColor: '#c8c7cc',
                  borderTopWidth: 0.5,
                },
                powered: {},
                listView: {},
                row: {
                  backgroundColor: '#FFFFFF',
                  padding: 13,
                  height: 44,
                  flexDirection: 'row',
                },
                separator: {
                  height: 0.5,
                  backgroundColor: '#c8c7cc',
                },
                description: {},
                loader: {
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  height: 20,
                },
              }}
              placeholder="수행지를 입력하세요."
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              query={{
                key: 'AIzaSyCBTUMAu0Vl6TthTX6Hv7CT4Fdc-FOXDQ4',
                language: 'kor',
              }}
            />
            <Heading>도착지</Heading>
            <GooglePlacesAutocomplete
              placeholder="도착지를 입력하세요."
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              query={{
                key: 'AIzaSyCBTUMAu0Vl6TthTX6Hv7CT4Fdc-FOXDQ4',
                language: 'kor',
              }}
            />
            <Heading>기타 정보</Heading>
            <Input
              h={10}
              placeholder={'현관 비번 및 추가 정보를 입력해주세요.'}
            />
            <Heading>가격</Heading>
            <Input
              h={10}
              placeholder={'최소 일거리 주문 비용 10,000원 부터.'}
            />

            <Text fontSize={'xs'} paddingLeft={5}>
              매칭 수수료 1,400원{'\n'}총 일거리 비용 11,400원
            </Text>
            <Button>
              <Text bold color={'white'} fontSize={'xl'}>
                일거리 요청하기
              </Text>
            </Button>
          </VStack>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default RequestPage;
