import 'react-native-gesture-handler'
import React from 'react';

import LoginFormNavigator from "./src/screens/LoginForm/LoginFormNavigator"
import PrimaryInfo from "./src/screens/JoinHelper/PrimaryInfo";
import PrimaryInfoSpec from "./src/screens/JoinHelper/PrimaryInfoSpec";
import PrimaryInfoBank from "./src/screens/JoinHelper/PrimaryInfoBank";
import TermsModal from "./src/screens/JoinHelper/TermsModal";
import JoinHelperStack from "./src/screens/JoinHelper/JoinHelperStack";

const App = () => {
  return <JoinHelperStack/>

};

export default App;
