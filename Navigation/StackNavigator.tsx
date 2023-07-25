import {createStackNavigator} from '@react-navigation/stack';
import RequestPage from '../UserMode_Screens/RequestPage';
import RequestTutorial from '../UserMode_Screens/RequestTutorial';
import Home from '../Home';
import RequestDetail from '../UserMode_Screens/RequestDetail';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        options={{headerTitle: '', headerShown: false}}
        component={Home}
      />
      <Stack.Screen
        options={{headerTitle: '일거리 요청'}}
        name="RequestTutorial"
        component={RequestTutorial}
      />
      <Stack.Screen
        options={{headerTitle: '일거리 요청'}}
        name="RequestPage"
        component={RequestPage}
      />
      <Stack.Screen name="RequestDetail" component={RequestDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
