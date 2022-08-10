import { Text, View, ScrollView } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { selectAllDrafted } from '../features/teams/teamSlice';
import { useState } from 'react'

const DraftRecap = () => {
    const draftRecap = useSelector(selectAllDrafted);
    // const [count, setCount] = useState(index)
    return (
      <ScrollView style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 40, alignSelf:'center' }}>Draft Recap</Text>
        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          {draftRecap.map((player, index) => (
            <Card key={index}>
              <Text style={{ fontSize: 15 }} key={index}>
                {index + 1}) {player.fields.name}
              </Text>
            </Card>
          ))}
        </View>
      </ScrollView>
    );
} ;      

export default DraftRecap;