import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';

const Profiles = ({Leaderboard}) => {
    return (
    <ScrollView>
        {Leaderboard.map((value, index) => {
            return (
                    <Card key={index}>
                        <Card.Title style={{marginLeft: -320, marginBottom: -1, marginTop: -10}}>{index + 1}</Card.Title>
                        <Card.Divider />
                        <View style={{flexDirection: 'row', justifyContent: "space-between", marginBottom: -8, marginTop:-5}}  >
                            <View>
                              <Avatar
                                rounded
                                size="large"
                                source={{
                                 uri: value.fields.image[0].thumbnails.full.url 
                                }}
                              />
                            </View>
                            <View>
                                <Text style={stylesP.team}>{value.team}</Text>
                            </View>
                            
                            <View style={{marginBottom: -40, marginTop:-5}}>
                                <Text style={stylesP.score}>{value.score}</Text>
                                <Text style={stylesP.score}>{value.attendance}</Text>
                                <Text style={stylesP.points}>{value.knowledge}</Text>
                                <Text style={stylesP.points}>{value.teamwork}</Text>
                                <Text style={stylesP.points}>{value.tools}</Text>
                                <Text style={stylesP.points}>{value.sales}</Text>
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
        fontSize: 30,
      },
    points: {
      marginTop:-15,
      fontSize: 40,
    },
    score: {
      fontSize: 40,
    },
});

export default Profiles;