import * as React from 'react';
import { BottomNavigation, Button, Text } from 'react-native-paper';
import DraftScreen from '../screens/DraftScreen';
import DraftRecap from './DraftRecap';
import Board from './Board';
import TeamBoard from './TeamBoard';
import AttendanceBoard from './AttendanceBoard';
import KnowledgeBoard from './KnowledgeBoard';
import TeamworkBoard from './TeamworkBoard';
import ToolsBoard from './ToolsBoard';
import SalesBoard from './SalesBoard';

const StatsRoute = () => <Board/>;
const AttendanceStatsRoute = () => <AttendanceBoard/>;
const KnowledgeStatsRoute = () => <KnowledgeBoard/>;
const TeamworkStatsRoute = () => <TeamworkBoard/>;
const ToolsStatsRoute = () => <ToolsBoard/>;
const SalesStatsRoute = () => <SalesBoard/>;

const StatsComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'stats', title: 'Overall',  icon: 'menu', unfocusedIcon: 'heart-outline' },
    { key: 'attendanceStats', title: 'Attendance', icon: 'clock-fast', unfocusedIcon: 'heart-outline' },
    { key: 'knowledgeStats', title: 'Knowledge', icon: 'head-snowflake', unfocusedIcon: 'heart-outline'},
    { key: 'teamworkStats', title: 'Teamwork', icon: 'microsoft-teams', unfocusedIcon: 'heart-outline'},
    { key: 'toolsStats', title: 'Tools', icon: 'tools', unfocusedIcon: 'heart-outline'},
    { key: 'salesStats', title: 'Sales', icon: 'cash', unfocusedIcon: 'heart-outline'},
    // { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    stats: StatsRoute,
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

export default StatsComponent;