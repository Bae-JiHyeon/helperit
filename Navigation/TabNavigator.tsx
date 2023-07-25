import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WorkRequestTab from '../UserMode_Screens/WorkRequestTab';
import HelperModeTab from '../UserMode_Screens/HelperModeTab';
import {NativeBaseProvider} from 'native-base';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <NativeBaseProvider>
      <Tab.Navigator screenOptions={{swipeEnabled: false}}>
        <Tab.Screen component={WorkRequestTab} name="일거리 요청" />
        <Tab.Screen component={HelperModeTab} name="헬퍼 모드" />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
};

export default TabNavigator;
