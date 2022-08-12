import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import DraftScreen from "../screens/DraftScreen";
import DraftRecap from "./DraftRecap";
import MyProfile from "../screens/MyProfile";
import MyStatsHistory from "../screens/MyStatsHisotyScreen";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import SubmitScoreScreen from "../screens/SubmitScoreScreen";

export const firebaseConfig = {
  apiKey: "AIzaSyCVnua4Gn_xBXqjvA0EddDy8jihrIi_jSo",
  authDomain: "staffdraft.firebaseapp.com",
  projectId: "staffdraft",
  storageBucket: "staffdraft.appspot.com",
  messagingSenderId: "363200078121",
  appId: "1:363200078121:web:52ee21722d258be8de5738",
  measurementId: "G-EBD2KWXXZY",
};

initializeApp(firebaseConfig);
const auth = getAuth(initializeApp(firebaseConfig));

const MyStatsRoute = () => {
const [user, loading, error] = useAuthState(auth);
return(
  <MyProfile user={user} />
)
};

const EnterStatsRouter = () => <SubmitScoreScreen />;

const StatsRecapRoute = () => {
  const [user, loading, error] = useAuthState(auth);
  return <MyStatsHistory user={user} />;
};


const HomePageComponent = () => {
  const [index, setIndex] = React.useState(0);
  
  const [routes] = React.useState([
    { key: "myStats", title: "My Stats", icon: "newspaper" },
    { key: "statHistory", title: "History", icon: "history" },
    { key: "enterStats", title: "Enter Points", icon: "counter" },
    // { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    myStats: MyStatsRoute,
    enterStats: EnterStatsRouter,
    statHistory: StatsRecapRoute,
  });

  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: "#040a2e" }}
      />
    </>
  );
};

export default HomePageComponent;
