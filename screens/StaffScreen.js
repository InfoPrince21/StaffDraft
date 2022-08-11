import { FlatList, Text, Pressable} from 'react-native';
import { Tile, Card, Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import { selectAllStaff } from '../features/staff/staffSlice';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import * as Animatable from "react-native-animatable";


const StaffScreen = ({ navigation }) => {
    const staff = useSelector(selectAllStaff);

    const renderDirectoryItem = ({ item: staff }) => {
      const {fields} = staff
      const {name, team, image} = fields
      
      return (
            <View>
                <Pressable
                  onPress={() => navigation.navigate('Staff Detail', {name, team, image})}
                >
                  <Card>
                      <View style={{flex: 1, flexDirection: "row"}}>
                          <Card.Image
                              style={stylesA.image}
                              source={{uri: image[0].url}}
                          />
                          <View style={{flex:1 , flexDirection: 'column'}}>
                          <Text style={stylesA.nameA}>{name}</Text>
                          <Text style={stylesA.nameB}>{team}</Text>
                          </View>   
                      </View>
                  </Card>
                </Pressable>
            </View>
        ); 
    };
    return (
      <Animatable.View animation="fadeInRight" duration={2000} delay={1000}>
        <FlatList
          data={staff}
          renderItem={renderDirectoryItem}
          keyExtractor={(item) => item.fields.id.toString()}
        />
      </Animatable.View>
    );
};

const stylesA= StyleSheet.create({
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
      width: 75,
      height: 75,
      marginRight:60,
      borderRadius: 50
    },
    nameA: {
      fontSize: 30,
    },
    nameB: {
        fontSize: 15,
      },
    cardA: {
        flex: 1,
        flexDirection: 'row'
    }
    });

export default StaffScreen;