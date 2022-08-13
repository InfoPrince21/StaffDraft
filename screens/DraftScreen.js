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
  const staff = useSelector(selectAllStaff);
  const [staffCount, setStaffCount] = useState(staff.length-1);
    const [teamName, setTeamName] = useState(
      staffCount != 0 ? "Team 1" : "Draft has ended"
    );
    const [teamOnClock, setTeamOnClock] = useState("Team1");
    const dispatch = useDispatch();
    const playersGone = useSelector(selectAllDraftedIds);
    let buttonDisplay
    let showButton1
    let showButton2
    let showButton3
    let hideCard

    const renderDirectoryItem = ({ item: staff }) => {
        
        if (
          playersGone.includes(staff.fields.id) ||
          teamName == "Draft has ended"
        ) {
          hideCard = { display: "none" };
        } else {
          hideCard = { display: "flex", gap: "4px" };
          // hideCard = { display: "none" };
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
        } else if (teamName === "Draft has ended") {
          showButton1 = { display: "none" };
          showButton2 = { display: "none" };
          showButton3 = { display: "none" };
        }

        const handleTeam1 = () => {
            setTeamName(staffCount != 0 ? "Team 2" : "Draft has ended");
            dispatch(draftRecapList(staff));
            dispatch(draftTeam1AirTable(staff));
            setStaffCount((prevStaffCount) => prevStaffCount-1);
        }
        const handleTeam2 = () => {
            setTeamName(staffCount != 0 ? "Team 3" : "Draft has ended");
            dispatch(draftRecapList(staff));
            dispatch(draftTeam2AirTable(staff));
            setStaffCount((prevStaffCount) => prevStaffCount-1);
        }
        const handleTeam3 = () => {
            setTeamName(staffCount != 0 ? "Team 1" : "Draft has ended");
            dispatch(draftRecapList(staff));
            dispatch(draftTeam3AirTable(staff));
            setStaffCount((prevStaffCount) => prevStaffCount-1);
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
          style={{height:450}}
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