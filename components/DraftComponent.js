import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import DraftScreen from '../screens/DraftScreen';
import DraftRecap from './DraftRecap';

const DraftRoute = () => <DraftScreen/>;

const RecapRoute = () => <DraftRecap/>;

const RecentsRoute = () => <Text>Recents</Text>;

const DraftComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'draft', title: 'Draft', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'recap', title: 'Recap', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    // { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    draft: DraftRoute,
    recap: RecapRoute,
    recents: RecentsRoute,
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

export default DraftComponent;