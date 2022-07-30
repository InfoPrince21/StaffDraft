import { Text, View, ScrollView } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import DraftTeam1 from '../components/DraftTeam1';
import DraftTeam2 from '../components/DraftTeam2';
import DraftTeam3 from '../components/DraftTeam3';
import DraftRecap from '../components/DraftRecap';

const DraftColumn = () => {
  
    return (
        <>
        <View style={{marginBottom: 20, flexDirection:'row', justifyContent: 'space-evenly'}}>
                <DraftTeam1 />
                <DraftTeam2 />
                <DraftTeam3 />
        </View>
        <View style={{alignSelf: 'center'}}>
            {/* <DraftRecap /> */}
        </View>
        </>
  )
} ;      

export default DraftColumn;