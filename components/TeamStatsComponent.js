import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import TeamBoard from "./TeamBoard";
import TeamAttendanceBoard from "./TeamAttendanceBoard";
import TeamKnowledgeBoard from "./TeamKnowledgeBoard";
import TeamTeamworkBoard from "./TeamTeamworkBoard";
import TeamToolsBoard from "./TeamToolsBoard";
import TeamSalesBoard from "./TeamSalesBoard";
import * as Animatable from "react-native-animatable";

const TeamStatsRoute = () => (
  <Animatable.View animation="fadeInUpBig" duration={2000}>
    <TeamBoard />
  </Animatable.View>
);
const AttendanceStatsRoute = () => <TeamAttendanceBoard />;
const KnowledgeStatsRoute = () => <TeamKnowledgeBoard />;
const TeamworkStatsRoute = () => <TeamTeamworkBoard />;
const ToolsStatsRoute = () => <TeamToolsBoard />;
const SalesStatsRoute = () => <TeamSalesBoard />;

const TeamStatsComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "teamStats",
      title: "Overall",
      icon: "menu",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "attendanceStats",
      title: "Attendance",
      icon: "clock-fast",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "knowledgeStats",
      title: "Knowledge",
      icon: "head-snowflake",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "teamworkStats",
      title: "Teamwork",
      icon: "microsoft-teams",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "toolsStats",
      title: "Tools",
      icon: "tools",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "salesStats",
      title: "Sales",
      icon: "cash",
      unfocusedIcon: "heart-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    teamStats: TeamStatsRoute,
    attendanceStats: AttendanceStatsRoute,
    knowledgeStats: KnowledgeStatsRoute,
    teamworkStats: TeamworkStatsRoute,
    toolsStats: ToolsStatsRoute,
    salesStats: SalesStatsRoute,
  });

  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: "#040a2e" }}
        inactiveColor="gray"
        shifting={false}
      />
    </>
  );
};

export default TeamStatsComponent;
