import React from 'react';
import {StatusBar} from 'react-native';
import {Container, NativeBaseProvider, HStack, Image} from 'native-base';
import TabNavigator from './Navigation/TabNavigator';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

// 이후에 screenWidth와 screenHeight를 활용하여 스타일을 동적으로 설정할 수 있습니다.

//상단에 위치할 AppBar > 로고와 돋보기 버튼, 지도 버튼 들어갈 예정//
function AppBar() {
    return (
        <>
            <StatusBar backgroundColor="#34BEBA" />
            <HStack alignItems="center" bg="#34BEBA" w={screenWidth}>
                <Image
                    source={require('./Assets/helperItLogo.png')}
                    alt="helperItLogo"
                    size="md"
                    resizeMode="contain"
                    marginLeft={7}
                />
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
            <TabNavigator />
        </NativeBaseProvider>
    );
};

export default Home;
