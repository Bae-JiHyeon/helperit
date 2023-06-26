import React from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {AppBar} from '@react-native-material/core';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './Navigation/TabNavigator';

const App = () => {
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
            source={require('./Assets/helperItLogo.png')}
          />
        </AppBar>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
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

const AppProvider = () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};

export default AppProvider;
