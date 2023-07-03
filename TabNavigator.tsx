import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="User_Home">
        <Tab.Screen name="User_Home" component={User_Home} />
        <Tab.Screen name="Helper_Home" component={Helper_Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// @ts-ignore
function User_Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="상세보기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
    </View>
  );
}

function Helper_Home() {
  return <Text>Search</Text>;
}

export default MyTabs;
