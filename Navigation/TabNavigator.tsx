import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WorkRequest from '../UserMode_Screens/WorkRequest';
import HelperMode from '../UserMode_Screens/HelperMode';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator swipeEnabled = {false}>
      <Tab.Screen component={WorkRequest} name="일거리 요청" />
      <Tab.Screen component={HelperMode} name="헬퍼 모드" />
    </Tab.Navigator>
  );
};

export default TabNavigator;
