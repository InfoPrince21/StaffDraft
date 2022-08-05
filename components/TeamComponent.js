import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import DraftScreen from "../screens/DraftScreen";
import DraftRecap from "./DraftRecap";
import TeamDetailScreen from "../screens/TeamDetailScreen";

const TeamDetailRoute = ({ route }) => <TeamDetailScreen route={route} />;

const TeamRosterRoute = () => <TeamDetailScreen />;

const TeamComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "draft", title: "Stats", icon: "gesture-tap" },
    { key: "roster", title: "Roster", icon: "clipboard-list" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    draft: TeamDetailRoute,
    roster: TeamRosterRoute,
  });

  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: "#040a2e" }}
      />
    </>
  );
};

export default TeamComponent;
