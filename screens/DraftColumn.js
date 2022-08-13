import { Text, View, ScrollView } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import DraftTeam1 from '../components/DraftTeam1';
import DraftTeam2 from '../components/DraftTeam2';
import DraftTeam3 from '../components/DraftTeam3';
import DraftRecap from '../components/DraftRecap';
import * as Animatable from "react-native-animatable";

const DraftColumn = ({teamName}) => {
  
    return (
      <>
        <Animatable.View animation="fadeInRightBig" duration={2000}>
          <View
            style={{
              marginBottom: 20,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <DraftTeam1 />
            <DraftTeam2 />
            <DraftTeam3 />
          </View>
        </Animatable.View>
        <Animatable.View animation="fadeInLeftBig" duration={2000}>
          <View style={{ alignSelf: "center" }}>
            {/* <DraftRecap /> */}
            <Text style={{ fontSize: 20 }}>{teamName}... {teamName!= "Draft has ended" && "it's your turn."}</Text>
          </View>
        </Animatable.View>
      </>
    );
} ;      

export default DraftColumn;