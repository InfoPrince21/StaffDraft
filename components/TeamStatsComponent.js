import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import DraftScreen from '../screens/DraftScreen';
import DraftRecap from './DraftRecap';
import Board from './Board';
import TeamBoard from './TeamBoard';
import TeamAttendanceBoard from './TeamAttendanceBoard';
import TeamKnowledgeBoard from './TeamKnowledgeBoard';
import TeamTeamworkBoard from './TeamTeamworkBoard';
import TeamToolsBoard from './TeamToolsBoard';
import TeamSalesBoard from './TeamSalesBoard';
import * as Animatable from "react-native-animatable";
import { useDispatch } from "react-redux";
import { fetchStats } from "../features/stats/statsSlice";
import { useEffect } from "react";
import { fetchAirTableStaff } from "../features/staff/staffSlice";
import {
  fetchAirTableTeams,
  fetchTeam1Air,
  fetchTeam2Air,
  fetchTeam3Air,
} from "../features/teams/teamSlice";
import { fetchDraftRecap } from "../features/teams/teamSlice";


const TeamStatsRoute = () => (
  <Animatable.View animation="fadeInUpBig" duration={2000}>
    <TeamBoard />
  </Animatable.View>
);
const AttendanceStatsRoute = () => <TeamAttendanceBoard/>;
const KnowledgeStatsRoute = () => <TeamKnowledgeBoard/>;
const TeamworkStatsRoute = () => <TeamTeamworkBoard/>;
const ToolsStatsRoute = () => <TeamToolsBoard/>;
const SalesStatsRoute = () => <TeamSalesBoard/>;

const TeamStatsComponent = () => {

  const dispatch = useDispatch();

 useEffect(() => {
  //  dispatch(fetchAirTableStaff());
  //  dispatch(fetchAirTableTeams());
  //  dispatch(fetchStats());
  //  dispatch(fetchDraftRecap());
  //  dispatch(fetchTeam1Air());
  //  dispatch(fetchTeam2Air());
  //  dispatch(fetchTeam3Air());
 }, [dispatch]);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'teamStats', title: 'Overall',  icon: 'menu', unfocusedIcon: 'heart-outline' },
    { key: 'attendanceStats', title: 'Attendance', icon: 'clock-fast', unfocusedIcon: 'heart-outline' },
    { key: 'knowledgeStats', title: 'Knowledge', icon: 'head-snowflake', unfocusedIcon: 'heart-outline'},
    { key: 'teamworkStats', title: 'Teamwork', icon: 'microsoft-teams', unfocusedIcon: 'heart-outline'},
    { key: 'toolsStats', title: 'Tools', icon: 'tools', unfocusedIcon: 'heart-outline'},
    { key: 'salesStats', title: 'Sales', icon: 'cash', unfocusedIcon: 'heart-outline'},
    // { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
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
      barStyle={{ backgroundColor: '#040a2e' }}
      inactiveColor="gray"
      shifting={false}
    />
    </>
  );
};

export default TeamStatsComponent;