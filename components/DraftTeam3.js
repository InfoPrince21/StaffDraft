import { Text, View, ScrollView } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { selectAllTeam3 } from '../features/teams/teamSlice';

const DraftTeam3 = () => {
    getTeam3 = useSelector(selectAllTeam3);

    return (
    <View style={{marginBottom: 10}}>
        <View>
            <Text style={{ fontSize: 40}}>Team 3</Text>
            {getTeam3.map((player,index) => 
                <Text key={index}>{index+1})  {player.fields.name}</Text>
            )}
        </View>
    </View>
  )
} ;      

export default DraftTeam3;