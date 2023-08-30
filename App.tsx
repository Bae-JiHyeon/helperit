import 'react-native-gesture-handler'
import React from 'react';

import LoginFormNavigator from "./src/screens/LoginForm/LoginFormNavigator"
import PrimaryInfo from "./src/screens/JoinHelper/PrimaryInfo";
import PrimaryInfoSpec from "./src/screens/JoinHelper/PrimaryInfoSpec";
import PrimaryInfoBank from "./src/screens/JoinHelper/PrimaryInfoBank";
import TermsModal from "./src/screens/JoinHelper/TermsModal";
import JoinHelperStack from "./src/screens/JoinHelper/JoinHelperStack";
import Map from "./src/Components/Map";
import HelperHome from "./src/screens/HelperMode/HelperHome";
import JobSelect from "./src/screens/Job/JobSelect";


const App = () => {
        return <JobSelect/>
};

export default App;
