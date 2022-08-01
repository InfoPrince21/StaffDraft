import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import DraftScreen from '../screens/DraftScreen';
import DraftRecap from './DraftRecap';
import Board from './Board';
import TeamBoard from './TeamBoard';
import AttendanceBoard from './AttendanceBoard';

const StatsRoute = () => <Board/>;
const TeamStatsRoute = () => <TeamBoard/>;
const AttendanceStatsRoute = () => <AttendanceBoard/>;

const StatsComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'stats', title: 'Leaders', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'teamStats', title: 'Team Rankings', focusedIcon: 'album' },
    { key: 'attendanceStats', title: 'Attendance Rankings', focusedIcon: 'album' },
    // { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    stats: StatsRoute,
    teamStats: TeamStatsRoute,
    attendanceStats: AttendanceStatsRoute,
  });

  return (
    <>
    
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#040a2e' }}
    />
    </>
  );
};

export default StatsComponent;