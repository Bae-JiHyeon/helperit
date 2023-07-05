import React from 'react';
import {
  Box,
  Heading,
  Input,
  NativeBaseProvider,
  Text,
  TextArea,
  VStack,
} from 'native-base';
import {SelectList} from 'react-native-dropdown-select-list';
import {TextInput} from 'react-native';

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
          <Heading>도착지</Heading>
          <Heading>기타 정보</Heading>
          <Heading>가격</Heading>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default RequestPage;
