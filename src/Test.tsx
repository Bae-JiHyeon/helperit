import React from 'react';
import { NativeBaseProvider, Radio, Text, HStack } from "native-base";
import { View } from "react-native";

const Example = () => {
  const [gender, setGender] = React.useState('');
  console.log("gender", gender);
  return (
    <NativeBaseProvider>
      <View>
        <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={gender} onChange={nextValue => {
          setGender(nextValue);
        }}>
          <HStack space={2}>
            <Radio shadow={2} value="m" my={2}>
              <Text>남자</Text>
            </Radio>
            <Radio shadow={2} value="f" my={2}>
              <Text>여자</Text>
            </Radio>
          </HStack>
        </Radio.Group>
      </View>
    </NativeBaseProvider>
  );
};

export default Example;
