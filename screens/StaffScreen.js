import { FlatList, Text} from 'react-native';
import { Tile, Card, Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import { selectAllStaff } from '../features/staff/staffSlice';
import { View, ScrollView, StyleSheet, Image } from 'react-native';

const StaffScreen = ({ navigation }) => {
 
    const staff = useSelector(selectAllStaff);

    const renderDirectoryItem = ({ item: staff }) => {
        return (
            <View>
                <Card>
                    <View style={{flex: 1, flexDirection: "row"}}>
                        <Card.Image
                            style={stylesA.image}
                            source={{uri: staff.fields.image[0].url}}
                        />
                        <View style={{flex:1 , flexDirection: 'column'}}>
                        <Text style={stylesA.nameA}>{staff.fields.name}</Text>
                        <Text style={stylesA.nameB}>{staff.fields.team}</Text>
                        </View>
                            
                    
                            
                    </View>
                </Card>
            </View>
        ); 
    };
    return (
        <FlatList
            data={staff}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.fields.id.toString()}
        />
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