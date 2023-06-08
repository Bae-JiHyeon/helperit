import React from 'react';
import {StatusBar} from 'react-native';
import {Container, NativeBaseProvider, HStack, Image} from 'native-base';

//상단에 위치할 AppBar > 로고와 돋보기 버튼, 지도 버튼 들어갈 예정//
function AppBar() {
  return (
    <>
      <StatusBar backgroundColor="#34BEBA" hidden={true} />
      <HStack
        bg="#34BEBA"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        width={'100%'}
        h={60}>
        <HStack alignItems="center" marginTop={3}>
          <Image
            source={require('./Assets/helperItLogo.png')}
            alt="helperItLogo"
            size="md"
            resizeMode="contain"
            marginLeft={7}
          />
        </HStack>
        <HStack />
      </HStack>
    </>
  );
}

const Home = () => {
  return (
    <NativeBaseProvider>
      <Container>
        <AppBar />
      </Container>
    </NativeBaseProvider>
  );
};

export default Home;
