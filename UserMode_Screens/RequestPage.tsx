//일거리 요청 정보 작성하는 페이지
//일거리 요청 내용 밑에 사진 첨부하는 기능 필요
//일거리 요청하기 버튼으로 다음 페이지로 이동하는 기능 필요

import React, {useState} from 'react';
import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Modal,
  NativeBaseProvider,
  Spacer,
  Text,
  TextArea,
  VStack,
} from 'native-base';
import {SelectList} from 'react-native-dropdown-select-list';
import {ScrollView, TextInput} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const RequestPage = ({navigation}) => {
  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };

  const handleNextButtonPress = () => {
    setOpen(false);
    const purchaseFee = purchaseCost;
    const totalCost = calculateTotalCost();
    console.log('startLocation is : ' + startLatitude + ', ' + startLongitude);
    console.log('endLocation is : ' + endLatitude + ', ' + endLongitude);

    navigation.navigate('RequestDetail', {
      selectedTiming, //즉시, 나중
      startLatitude, //지도에 쓸 경유지 위도
      startLongitude, //경유지 경도
      endLatitude, //도착지 위도
      endLongitude, //도착지 경도
      totalCost, //일거리 요청 비용
      purchaseFee, //물품 구매 비용
      request, //일거리 요청 내용
      isNeed, //물품 구매 필요 여부
      startLocName,
      endLocName,
      otherInfo,
    });

    /*
    일거리 요청 누를 시 정보를 다음 페이지가 아닌 백엔드로 POST 요청을 보내는 코드.
    const apiUrl = '백엔드 API의 URL';

    // axios를 사용하여 POST 요청 보내기
    axios.post(apiUrl, requestData)
      .then(response => {
        // 요청이 성공한 경우에 수행할 동작
        console.log('요청이 성공하였습니다.', response.data);
        navigation.navigate('다음화면의 이름'); // 다음 화면으로 이동
      })
      .catch(error => {
        // 요청이 실패한 경우에 수행할 동작
        console.error('요청이 실패하였습니다.', error);
        // 에러 처리 로직 추가
      });
     */
  };

  const [otherInfo, setOtherInfo] = useState('');
  const [endLocName, setEndLocName] = useState('');
  const [startLocName, setStartLocName] = useState('');
  const [isNeed, setIsNeed] = useState('');
  const [request, setRequest] = useState('');
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = React.useState('');
  const [orderCost, setOrderCost] = useState(0);
  const [purchaseCost, setPurchaseCost] = useState(0);
  const [selectedTiming, setSelectedTiming] = useState('');

  const [startLatitude, setStartLatitude] = useState(null);
  const [startLongitude, setStartLongitude] = useState(null);
  const [endLatitude, setEndLatitude] = useState(null);
  const [endLongitude, setEndLongitude] = useState(null);

  const data_categories = [
    {key: 'Request', value: '일거리 요청'},
    {key: 'Trash', value: '분리수거 배출'},
    {key: 'CleanUp', value: '가정집 청소'},
  ];
  const data_timing = [
    {key: '즉시수행', value: '즉시수행'},
    {key: '예약수행', value: '예약수행'},
  ];
  const data_isNeedPurchase = [
    {key: '구매 불필요', value: '구매 불필요'},
    {key: '구매 필요', value: '구매 필요'},
  ];
  const handleTimingSelect = value => {
    setSelectedTiming(value);
  };
  // 시작 위치 선택 핸들러
  const handleStartLocationSelect = (data, details) => {
    const {lat, lng} = details.geometry.location;
    const {formatted_address} = details;
    setStartLocName(formatted_address);
    setStartLatitude(lat);
    setStartLongitude(lng);
    return details.formatted_address;
  };

  const handleIsNeed = value => {
    setIsNeed(value);
  };

  // 도착 위치 선택 핸들러
  const handleEndLocationSelect = (data, details) => {
    const {lat, lng} = details.geometry.location;
    const {formatted_address} = details;
    setEndLocName(formatted_address);
    setEndLatitude(lat);
    setEndLongitude(lng);
  };

  const handleOtherInfo = value => {
    setOtherInfo(value);
  };

  const handleOrderCostChange = value => {
    setOrderCost(value);
  };

  const handleRequestChange = text => {
    setRequest(text);
  };
  const handlePurchaseCostChange = value => {
    setPurchaseCost(value);
  };
  const calculateTotalCost = () => {
    const matchingFee = 1400; // 매칭 수수료
    const minimumOrderCost = 10000; // 최소 일거리 주문 비용
    const totalCost =
      parseInt(purchaseCost) + parseInt(orderCost) + matchingFee; // 총 일거리 비용 계산
    return totalCost;
  };

  const isOrderCostValid = orderCost !== 0 && orderCost >= 10000;
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
              setSelected={handleTimingSelect}
              data={data_timing}
            />
            <Heading>물품 구매비</Heading>
            <SelectList
              placeholder={'옵션을 선택해주세요.'}
              search={false}
              setSelected={handleIsNeed}
              data={data_isNeedPurchase}
            />
            {isNeed === '구매 필요' && (
              <>
                <Input
                  onChangeText={handlePurchaseCostChange}
                  placeholder={'예상 구매 가격을 입력하세요'}
                />
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
              autoCompleteType="off"
              onChangeText={handleRequestChange}></TextArea>
            <Heading>수행지</Heading>
            <Box borderWidth={1} borderRadius="md" borderColor="gray.300">
              <GooglePlacesAutocomplete
                fetchDetails={true}
                placeholder="수행지를 입력하세요."
                onPress={(data, details = null) => {
                  // 'details' is provided when fetchDetails = true
                  handleStartLocationSelect(data, details);
                  console.log(details.formatted_address);
                  // startLocName = details.formatted_address;
                }}
                query={{
                  key: 'AIzaSyCBTUMAu0Vl6TthTX6Hv7CT4Fdc-FOXDQ4',
                  language: 'kor',
                }}
              />
            </Box>
            <Heading>도착지</Heading>
            <Box borderWidth={1} borderRadius="md" borderColor="gray.300">
              <GooglePlacesAutocomplete
                fetchDetails={true}
                placeholder="도착지를 입력하세요."
                onPress={(data, details = null) => {
                  // 'details' is provided when fetchDetails = true
                  handleEndLocationSelect(data, details);
                  console.log(details.formatted_address);
                }}
                query={{
                  key: 'AIzaSyCBTUMAu0Vl6TthTX6Hv7CT4Fdc-FOXDQ4',
                  language: 'kor',
                }}
              />
            </Box>
            <Heading>기타 정보</Heading>
            <Input
              h={10}
              placeholder={'현관 비번 및 추가 정보를 입력해주세요.'}
              onChangeText={handleOtherInfo}
            />
            <Heading>가격</Heading>
            <FormControl
              isRequired={!isOrderCostValid}
              isInvalid={!isOrderCostValid}>
              <FormControl.Label>가격</FormControl.Label>
              <Input
                h={10}
                placeholder={'최소 일거리 주문 비용 10,000원 부터.'}
                value={orderCost}
                onChangeText={handleOrderCostChange}
              />
              <FormControl.HelperText>
                {!isOrderCostValid && (
                  <Text color="red" fontSize="xs" paddingLeft={5}>
                    최소 요청 금액은 10,000원 입니다.
                  </Text>
                )}
                {isOrderCostValid && (
                  <Text fontSize={'xs'} paddingLeft={5}>
                    일거리 요청 수수료 1400원{'\n'}총 일거리 비용{' '}
                    {calculateTotalCost()}원
                  </Text>
                )}
              </FormControl.HelperText>
            </FormControl>

            <Button
              onPress={() => {
                if (
                  isOrderCostValid &&
                  startLatitude &&
                  startLongitude &&
                  endLatitude &&
                  endLongitude
                ) {
                  // startLatitude, startLongitude, endLatitude, endLongitude가 존재하는지 확인
                  openModal('center');
                }
              }}
              disabled={
                !isOrderCostValid ||
                !startLatitude ||
                !startLongitude ||
                !endLatitude ||
                !endLongitude
              }
              style={{
                backgroundColor:
                  isOrderCostValid &&
                  startLatitude &&
                  startLongitude &&
                  endLatitude &&
                  endLongitude
                    ? '#34BEBA'
                    : 'gray', // 비활성화 상태일 때 회색으로 설정
              }}>
              <Text bold color={'white'} fontSize={'xl'}>
                일거리 요청하기
              </Text>
            </Button>
          </VStack>
        </Box>
      </ScrollView>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="350">
          {/* <Modal.CloseButton /> */}
          <Modal.Body>
            <Heading fontSize={'md'} textAlign={'center'}>
              입력하신 내용으로 일거리를{'\n'}등록하시겠습니까?
            </Heading>
            <Text>등록하신 이후 바로 매칭 시도가 시작됩니다.</Text>
            <HStack paddingTop={5}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setOpen(false);
                }}>
                CANCEL
              </Button>
              <Spacer />
              <Button onPress={handleNextButtonPress}>OK</Button>
            </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </NativeBaseProvider>
  );
};

const styles = {
  top: {
    marginBottom: 'auto',
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
  left: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  right: {
    marginLeft: 'auto',
    marginRight: 0,
  },
};

export default RequestPage;
