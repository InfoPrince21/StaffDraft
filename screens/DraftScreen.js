import { FlatList, Text, ScrollView} from 'react-native';
import { useState } from 'react';
import { Card} from 'react-native-elements';
import { useSelector } from 'react-redux';
import { selectAllStaff } from '../features/staff/staffSlice';
import { View, StyleSheet } from 'react-native';
import { Stack, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import DraftColumn from './DraftColumn';
import TeamsTab from '../components/TeamsTab';
// import { ScrollView } from 'react-native-gesture-handler';

const DraftScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [teamOnClock, setTeamOnClock] = useState("Team1");
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
                        <View style={{flex:1 , flexDirection: 'column', paddingRight: 0}}>
                            <Text style={stylesA.nameA}>{staff.fields.name}</Text>
                            {/* <Text style={stylesA.nameB}>{staff.fields.team}</Text> */}
                        </View>
                        <View style={{marginTop:0, marginLeft: 0}}>
                            <Button 
                                color='#094507'
                                loading={loading} 
                                title="Draft" 
                                trailing={props => 
                                    <Icon 
                                        color="primary"
                                        name="plus" 
                                        {...props} 
                                    />} 
                            />
                        </View>    
                    
                            
                    </View>
                </Card>
                
            </View>
        ); 
    };
    return (
        <>
        <DraftColumn />
        <FlatList
                data={staff}
                renderItem={renderDirectoryItem}
                keyExtractor={(item) => item.fields.id.toString()}
        />
        </>
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
      width: 30,
      height: 30,
      marginRight:20,
      borderRadius: 50
    },
    nameA: {
      fontSize: 20,
    },
    nameB: {
        fontSize: 15,
      },
    cardA: {
        flex: 1,
        flexDirection: 'row'
    }
    });

export default DraftScreen;