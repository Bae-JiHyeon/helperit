import React, {useRef} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
} from 'react-native';
import {Center, VStack, Divider, HStack, Button} from 'native-base';
import Home_FindTalent from './Home_FindTalent';
import Home_RequestRealTime from './Home_RequestRealTime';
import Home_Suggestions from './Home_Suggestions';
const images = new Array(4).fill(
  '/Users/kimtaeho/Desktop/4-1/major-experiment/helperIt/helperIt/Assets/helperItLogo.png',
);

const WorkRequestTab = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: true},
          )}
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
      <View style={{alignItems: 'center', flex: 0.3, justifyContent: 'center'}}>
        <HStack space={3}>
          <VStack space={2}>
            <Button rounded={100} w={60} h={60}></Button>
            <Text style={{textAlign: 'center'}}>일거리{'\n'}요청</Text>
          </VStack>
          <VStack space={2}>
            <Button rounded={100} w={60} h={60}></Button>
            <Text style={{textAlign: 'center'}}>분리수거{'\n'}배출</Text>
          </VStack>
          <VStack space={2}>
            <Button rounded={100} w={60} h={60}></Button>
            <Text style={{textAlign: 'center'}}>헬퍼재능{'\n'}찾기</Text>
          </VStack>
          <VStack space={2}>
            <Button rounded={100} w={60} h={60}></Button>
            <Text style={{textAlign: 'center'}}>가정집{'\n'}청소</Text>
          </VStack>
          <VStack space={2}>
            <Button rounded={100} w={60} h={60}></Button>
            <Text style={{textAlign: 'center'}}>헬퍼에게{'\n'}견적보내기</Text>
          </VStack>
        </HStack>
      </View>
      <Divider thickness="10" />
      <Home_FindTalent />
      <Divider thickness="10" />
      <Home_RequestRealTime />
      <Divider thickness="10" />
      <Home_Suggestions />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: '11%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.1,
  },
});

export default WorkRequestTab;
