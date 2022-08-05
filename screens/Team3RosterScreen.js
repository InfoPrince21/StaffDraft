import { Text, View, ScrollView, FlatList, Pressable } from "react-native";
import { Avatar, Card, ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectAllTeam3 } from "../features/teams/teamSlice";

const Team1RosterScreen = ({ navigation }) => {
  getTeam1 = useSelector(selectAllTeam3);

  const renderDirectoryItem = ({ item: getTeam1 }) => {
    const { fields } = getTeam1;
    const { name, team, image } = fields;

    return (
      <View>
        <Pressable
          onPress={() => navigation.navigate("Staff Detail", { name })}
        >
          <Card>
            <View style={{ flex: 1, flexDirection: "row" }}>
              {/* <Card.Image source={{ uri: image[0].url }} /> */}
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text>{name}</Text>
                <Text>{team}</Text>
              </View>
            </View>
          </Card>
        </Pressable>
      </View>
    );
  };
  return (
    <FlatList
      data={getTeam1}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.fields.id.toString()}
    />
  );
};

export default Team1RosterScreen;
