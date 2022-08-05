import { FlatList, Text, ScrollView, TouchableOpacity,Alert} from 'react-native';
import { useState } from 'react';
import { Card} from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllStaff } from '../features/staff/staffSlice';
import { View, StyleSheet } from 'react-native';
import { Stack, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import DraftColumn from './DraftColumn';
import TeamsTab from '../components/TeamsTab';
import { fetchTeam1Air, fetchTeam2Air, fetchTeam3Air, draftRecapList, draftTeam1AirTable, draftTeam2AirTable, draftTeam3AirTable, selectAllDraftedIds } from '../features/teams/teamSlice';
import * as Animatable from "react-native-animatable";

// import { ScrollView } from 'react-native-gesture-handler';

const DraftScreen = ({ navigation }) => {
    const [teamName, setTeamName] = useState("Team 1");
    const [teamOnClock, setTeamOnClock] = useState("Team1");
    const staff = useSelector(selectAllStaff);
    const dispatch = useDispatch();
    const playersGone = useSelector(selectAllDraftedIds);
    let buttonDisplay
    let showButton1
    let showButton2
    let showButton3
    let hideCard





    const renderDirectoryItem = ({ item: staff }) => {
        
        if (playersGone.includes(staff.fields.id)) {
            hideCard = {display: "none"}

        } else {
            hideCard = {display: "flex", gap: "4px"}

        }
    
        if (teamName === "Team 1") {
            showButton1 = {display: "flex", backgroundColor: 'green',}
            showButton2 = {display: "none"}
            showButton3 = {display: "none"}
        } else if (teamName === "Team 2") {
            showButton1 = {display: "none"}
            showButton2 = {display: "flex"}
            showButton3 = {display: "none"}
        } else if (teamName === "Team 3") {
            showButton1 = {display: "none"}
            showButton2 = {display: "none"}
            showButton3 = {display: "flex"}
        }

        const handleTeam1 = () => {
            setTeamName("Team 2")
            dispatch(draftRecapList(staff));
            dispatch(draftTeam1AirTable(staff));
        }
        const handleTeam2 = () => {
            setTeamName("Team 3")
            dispatch(draftRecapList(staff));
            dispatch(draftTeam2AirTable(staff));
        }
        const handleTeam3 = () => {
            setTeamName("Team 1")
            dispatch(draftRecapList(staff));
            dispatch(draftTeam3AirTable(staff));
        }
    
        return (
            
          <View style={hideCard}>
            <Card>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Card.Image
                  style={stylesA.image}
                  source={{ uri: staff.fields.image[0].url }}
                />
                <View
                  style={{ flex: 1, flexDirection: "column", paddingRight: 0 }}
                >
                  <Text style={stylesA.nameA}>{staff.fields.name}</Text>
                </View>
                <View style={{ marginTop: 0, marginLeft: 0 }}>
                  <Button
                    id={staff.id}
                    color="#094507"
                    title="Draft"
                    trailing={(props) => (
                      <Icon color="primary" name="plus" {...props} />
                    )}
                    onPress={() =>
                      Alert.alert(
                        "Draft " + staff.fields.name,
                        teamName +
                          " , " +
                          "Are you sure you want to draft " +
                          staff.fields.name +
                          "?",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Not Drafted"),
                            style: "cancel",
                          },
                          {
                            text: "OK",
                            onPress: handleTeam1,
                          },
                        ],
                        { cancelable: false }
                      )
                    }
                    style={showButton1}
                  />
                  <Button
                    id={staff.id}
                    color="#094507"
                    title="Draft"
                    trailing={(props) => (
                      <Icon color="primary" name="plus" {...props} />
                    )}
                    onPress={() =>
                      Alert.alert(
                        "Draft " + staff.fields.name,
                        teamName +
                          " , " +
                          "Are you sure you want to draft " +
                          staff.fields.name +
                          "?",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Not Drafted"),
                            style: "cancel",
                          },
                          {
                            text: "OK",
                            onPress: handleTeam2,
                          },
                        ],
                        { cancelable: false }
                      )
                    }
                    style={showButton2}
                  />
                  <Button
                    id={staff.id}
                    color="#094507"
                    title="Draft"
                    trailing={(props) => (
                      <Icon color="primary" name="plus" {...props} />
                    )}
                    onPress={() =>
                      Alert.alert(
                        "Draft " + staff.fields.name,
                        teamName +
                          " , " +
                          "Are you sure you want to draft " +
                          staff.fields.name +
                          "?",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Not Drafted"),
                            style: "cancel",
                          },
                          {
                            text: "OK",
                            onPress: handleTeam3,
                          },
                        ],
                        { cancelable: false }
                      )
                    }
                    style={showButton3}
                  />
                </View>

         
              </View>
            </Card>
          </View>
        ); 
    };
    return (
      <>
        <DraftColumn teamName={teamName} />
        <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
          <FlatList
            data={staff}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.fields.id.toString()}
          />
        </Animatable.View>
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
      width: 70,
      height: 70,
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
    },
    });

export default DraftScreen;