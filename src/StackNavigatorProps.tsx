import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  WorkRequestTab: undefined;
  RequestTutorial: undefined;
  RequestPage: undefined;
};

export type WorkRequestTabNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WorkRequestTab'
>;
export type RequestTutorialNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RequestTutorial'
>;
export type RequestPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RequestPage'
>;
