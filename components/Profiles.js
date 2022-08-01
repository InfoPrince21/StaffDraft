import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';

const Profiles = ({Leaderboard}) => {

    return (
    <ScrollView>
        {Leaderboard.map((value, index) => {
            return (
                    <Card key={index}>
                        <Card.Title>{index + 1}</Card.Title>
                        <Card.Divider />
                        <View style={{flexDirection: 'row', justifyContent: "space-between"}}  >
                            <View>
                                <Text style={stylesP.name}>{value.name}</Text>
                                <Text style={stylesP.team}>{value.team}</Text>
                            </View>
                            <View>
                                <Text style={stylesP.team}>{value.score}</Text>
                            </View>
                        </View>
                    </Card>
                )
            }
        )}
    </ScrollView>
  )
};       

const stylesP = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 30,
      marginTop: 1,
    },
    team: {
        fontSize: 16,
        marginTop: 1,
      },
});

export default Profiles;