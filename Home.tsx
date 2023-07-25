import React from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {AppBar} from '@react-native-material/core';

import TabNavigator from './Navigation/TabNavigator';

const Home = () => {
  return (
    <NativeBaseProvider>
      <View style={{flex: 1}}>
        <AppBar
          style={{
            flexDirection: 'row',
            flex: 0.1,
            width: '100%',
            paddingTop: StatusBar.currentHeight,
            backgroundColor: '#34BEBA',
            justifyContent: 'flex-start',
          }}>
          <Image
            style={style.logo}
            source={require('./src/assets/helperItLogo.png')}
          />
        </AppBar>
        <TabNavigator />
      </View>
    </NativeBaseProvider>
  );
};

const style = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default Home;
