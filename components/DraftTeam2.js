import { Text, View, ScrollView } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { selectAllTeam2 } from '../features/teams/teamSlice';

const DraftTeam2 = () => {
    getTeam2 = useSelector(selectAllTeam2);

    return (
    <View style={{marginBottom: 10}}>
        <View>
            <Text style={{ fontSize: 30}}>Team 2</Text>
            {getTeam2.map((player,index) => 
                <Text key={index}>{index+1})  {player.fields.name}</Text>
            )}
        </View>
    </View>
  )
} ;      

export default DraftTeam2;