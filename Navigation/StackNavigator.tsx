import {createStackNavigator} from '@react-navigation/stack';
import RequestPage from '../UserMode_Screens/RequestPage';
import RequestTutorial from '../UserMode_Screens/RequestTutorial';
import WorkRequestTab from '../UserMode_Screens/WorkRequestTab';
import Home from '../Home';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RequestTutorial" component={RequestTutorial} />
      <Stack.Screen name="RequestPage" component={RequestPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
