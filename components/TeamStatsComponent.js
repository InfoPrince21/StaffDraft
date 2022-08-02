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

const TeamStatsRoute = () => <TeamBoard/>;
const AttendanceStatsRoute = () => <TeamAttendanceBoard/>;
const KnowledgeStatsRoute = () => <TeamKnowledgeBoard/>;
const TeamworkStatsRoute = () => <TeamTeamworkBoard/>;
const ToolsStatsRoute = () => <TeamToolsBoard/>;
const SalesStatsRoute = () => <TeamSalesBoard/>;

const TeamStatsComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'teamStats', title: 'Overall',   },
    { key: 'attendanceStats', title: 'Att' },
    { key: 'knowledgeStats', title: 'Kno'},
    { key: 'teamworkStats', title: 'TWork'},
    { key: 'toolsStats', title: 'Tool'},
    { key: 'salesStats', title: 'Sales'},
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