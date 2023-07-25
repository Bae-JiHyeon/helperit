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
import Slider from '../src/component/Slider';
const WorkRequestTab = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();

  return (
    <ScrollView style={{flex: 1}}>
      <Slider />
      <View style={styles.functions}>
        <HStack space={3}>
          <VStack space={2}>
            <Button
              onPress={() => navigation.navigate('RequestTutorial')}
              rounded={100}
              w={60}
              h={60}></Button>
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
  functions: {
    alignItems: 'center',
    height: '7%',
    justifyContent: 'center',
  },
});

export default WorkRequestTab;
