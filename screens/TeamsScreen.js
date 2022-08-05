import { FlatList, Pressable, Text, View } from 'react-native';
import { Tile, Card, Button, Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import { selectAllTeams } from '../features/teams/teamSlice';
import * as Animatable from "react-native-animatable";

const TeamsScreen = ({ navigation }) => {
 
    const teams = useSelector(selectAllTeams);

    const renderDirectoryItem = ({ item: team }) => {
        return (
          // <Pressable
          //     onPress={() => navigation.navigate('Team Detail', {team})}
          // >
          //     <Card>
          //     <Card.Title>{team.fields.name}</Card.Title>
          //     <Card.Divider />
          //     <Card.Image
          //         style={{ padding: 0 }}
          //         source={{uri: team.fields.image[0].url}}
          //     />

          //     </Card>
          // </Pressable>
          <Card>
            <Card.Title>{team.fields.name}</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{ uri: team.fields.image[0].url }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Pressable
                onPress={() => navigation.navigate("Team Detail", { team })}
              >
                <Text style={{ marginTop: 10, fontSize: 20 }}>Stats</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate(team.fields.name, { team })}
              >
                <Text style={{ marginTop: 10, fontSize: 20 }}>Roster</Text>
              </Pressable>
            </View>
          </Card>
        ); 
    };
    return (
      <Animatable.View animation="fadeInUpBig" duration={2000}>
        <FlatList
          data={teams}
          renderItem={renderDirectoryItem}
          keyExtractor={(item) => item.fields.id.toString()}
        />
      </Animatable.View>
    );
};

export default TeamsScreen;