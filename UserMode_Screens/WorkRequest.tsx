import React, {useRef} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
} from 'react-native';
import {Center, Circle, VStack, Divider, HStack} from 'native-base';

const images = new Array(4).fill(
  '/Users/kimtaeho/Desktop/4-1/major-experiment/helperIt/helperIt/Assets/helperItLogo.png',
);

const WorkRequest = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();
  return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ])}
            scrollEventThrottle={1}>
            {images.map((image, imageIndex) => {
              return (
                <View
                  style={{
                    width: windowWidth,
                    height: 250,
                    alignItems: 'center',
                    paddingTop: '2%',
                  }}
                  key={imageIndex}>
                  <Center rounded={'xl'} w={'70%'} h={'50%'} bg={'#34BEBA'}>
                    image {imageIndex + 1}
                  </Center>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, {width}]}
                />
              );
            })}
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            flex: 0.3,
            justifyContent: 'center',
          }}>
          <VStack space={1}>
            <HStack space={4}>
              <Circle size="55px" bg="gray.300"></Circle>
              <Circle size="55px" bg="gray.300"></Circle>
              <Circle size="55px" bg="gray.300"></Circle>
              <Circle size="55px" bg="gray.300"></Circle>
              <Circle size="55px" bg="gray.300"></Circle>
            </HStack>
            <HStack paddingLeft={1} space={7}>
              <Text style={{textAlign: 'center'}}>일거리{'\n'}요청</Text>
              <Text style={{textAlign: 'center'}}>분리수거{'\n'}배출</Text>
              <Text style={{textAlign: 'center'}}>헬퍼재능{'\n'}찾기</Text>
              <Text style={{textAlign: 'center'}}>가정집{'\n'}청소</Text>
              <Text style={{textAlign: 'center'}}>
                헬퍼에게{'\n'}견적보내기
              </Text>
            </HStack>
          </VStack>
        </View>
        <Divider thickness="10" />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    backgroundColor: 'lightyellow',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  card: {
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 50,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WorkRequest;

/*캐러셀 안에 들어갈 이미지 넣는 코드
<ImageBackground
  source={{uri: image}}
  style={styles.card}></ImageBackground> */
