import { Text, View, ScrollView } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { selectAllTeam1 } from '../features/teams/teamSlice';

const DraftTeam1 = () => {
    getTeam1 = useSelector(selectAllTeam1);

    return (
    <View style={{marginBottom: 10}}>
        <View>
            <Text style={{ fontSize: 40}}>Team 1</Text>
            {getTeam1.map((player,index) => 
                <Text key={index}>{index+1})  {player.fields.name}</Text>
            )}
        </View>
    </View>
  )
} ;      

export default DraftTeam1;