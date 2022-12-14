import {
  getFirestore,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getAuth,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { Text, View, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import { Avatar, Button, Card, Title, Paragraph, Divider } from "react-native-paper";
import {
  selectStats,
  selectStatsByName,
  getScoreBoardStats,
  getScoreBoardStatsAttendance,
  getScoreBoardStatsKnowledge,
  getScoreBoardStatsSales,
  getScoreBoardStatsTools,
  getScoreBoardStatsTeamwork,
} from "../features/stats/statsSlice";
import { IconButton } from "react-native-paper";
import { selectStaffByEmail } from "../features/staff/staffSlice";
import { useNavigation } from "@react-navigation/native";
import Example from "../components/TickerComponent";

export const firebaseConfig = {
  apiKey: "AIzaSyCVnua4Gn_xBXqjvA0EddDy8jihrIi_jSo",
  authDomain: "staffdraft.firebaseapp.com",
  projectId: "staffdraft",
  storageBucket: "staffdraft.appspot.com",
  messagingSenderId: "363200078121",
  appId: "1:363200078121:web:52ee21722d258be8de5738",
  measurementId: "G-EBD2KWXXZY",
};
initializeApp(firebaseConfig);
const firestore = getFirestore();
const auth = getAuth(initializeApp(firebaseConfig));



const MyProfile = ({ user }) => {
  const navigation = useNavigation();
  const staff = useSelector(selectStaffByEmail(user?.email));
  const listRankingsOverall = useSelector(getScoreBoardStats);
  const listRankingsAttendance = useSelector(getScoreBoardStatsAttendance);
  const listRankingsSales = useSelector(getScoreBoardStatsSales);
  const listRankingsKnowledge = useSelector(getScoreBoardStatsKnowledge);
  const listRankingsTools = useSelector(getScoreBoardStatsTools);
  const listRankingsTeamwork = useSelector(getScoreBoardStatsTeamwork);

  const playerStats = useSelector(selectStatsByName(staff.fields.name));
  const playerStatQuantity = playerStats.length;

  const attendanceStats = playerStats.map((stat) => stat.fields.attendance);
  const attendanceTotals = attendanceStats.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  const knowledgeStats = playerStats.map((stat) => stat.fields.knowledge);
  const knowledgeTotals = knowledgeStats.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  const teamworkStats = playerStats.map((stat) => stat.fields.teamwork);
  const teamworkTotals = teamworkStats.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  const toolsStats = playerStats.map((stat) => stat.fields.tools);
  const toolsTotals = toolsStats.reduce((partialSum, a) => partialSum + a, 0);

  const salesStats = playerStats.map((stat) => stat.fields.sales);
  const salesTotals = salesStats.reduce((partialSum, a) => partialSum + a, 0);

  const totalScore = () => {
    const totals =
      parseInt(attendanceTotals) +
      parseInt(knowledgeTotals) +
      parseInt(toolsTotals) +
      parseInt(teamworkTotals) +
      parseInt(salesTotals);
    return totals;
  };

  const averageScore = Math.round(totalScore() / playerStatQuantity);

  // console.log("#1" + (JSON.stringify(listRankingsOverall[0])))

  const overalRank = listRankingsOverall
    .map((o) => o.name)
    .indexOf(staff.fields.name);
  const attendanceRank = listRankingsAttendance
    .map((o) => o.name)
    .indexOf(staff.fields.name);
  const salesRank = listRankingsSales
    .map((o) => o.name)
    .indexOf(staff.fields.name);
  const knowledgeRank = listRankingsKnowledge
    .map((o) => o.name)
    .indexOf(staff.fields.name);
  const teamworkRank = listRankingsTeamwork
    .map((o) => o.name)
    .indexOf(staff.fields.name);
  const toolsRank = listRankingsTools
    .map((o) => o.name)
    .indexOf(staff.fields.name);

  let overallRankEnding;
  let attendanceRankEnding;
  let salesRankEnding;
  let knowledgeRankEnding;
  let teamworkRankEnding;
  let toolsRankEnding;

  if (overalRank + 1 === 1) {
    overallRankEnding = "st";
  } else if (overalRank + 1 === 2) {
    overallRankEnding = "nd";
  } else if (overalRank + 1 === 3) {
    overallRankEnding = "rd";
  } else if (overalRank + 1 === 21) {
    overallRankEnding = "st";
  } else if (overalRank + 1 === 22) {
    overallRankEnding = "nd";
  } else if (overalRank + 1 === 23) {
    overallRankEnding = "rd";
  } else {
    overallRankEnding = "th";
  }

  if (attendanceRank + 1 === 1) {
    attendanceRankEnding = "st";
  } else if (attendanceRank + 1 === 2) {
    attendanceRankEnding = "nd";
  } else if (attendanceRank + 1 === 3) {
    attendanceRankEnding = "rd";
  } else if (attendanceRank + 1 === 21) {
    attendanceRankEnding = "st";
  } else if (attendanceRank + 1 === 22) {
    attendanceRankEnding = "nd";
  } else if (attendanceRank + 1 === 23) {
    attendanceRankEnding = "rd";
  } else {
    attendanceRankEnding = "th";
  }

  if (salesRank + 1 === 1) {
    salesRankEnding = "st";
  } else if (salesRank + 1 === 2) {
    salesRankEnding = "nd";
  } else if (salesRank + 1 === 3) {
    salesRankEnding = "rd";
  } else if (salesRank + 1 === 21) {
    salesRankEnding = "st";
  } else if (salesRank + 1 === 22) {
    salesRankEnding = "nd";
  } else if (salesRank + 1 === 23) {
    salesRankEnding = "rd";
  } else {
    salesRankEnding = "th";
  }

  if (knowledgeRank + 1 === 1) {
    knowledgeRankEnding = "st";
  } else if (knowledgeRank + 1 === 2) {
    knowledgeRankEnding = "nd";
  } else if (knowledgeRank + 1 === 3) {
    knowledgeRankEnding = "rd";
  } else if (knowledgeRank + 1 === 21) {
    knowledgeRankEnding = "st";
  } else if (knowledgeRank + 1 === 22) {
    knowledgeRankEnding = "nd";
  } else if (knowledgeRank + 1 === 23) {
    knowledgeRankEnding = "rd";
  } else {
    knowledgeRankEnding = "th";
  }

  if (teamworkRank + 1 === 1) {
    teamworkRankEnding = "st";
  } else if (teamworkRank + 1 === 2) {
    teamworkRankEnding = "nd";
  } else if (teamworkRank + 1 === 3) {
    teamworkRankEnding = "rd";
  } else if (teamworkRank + 1 === 21) {
    teamworkRankEnding = "st";
  } else if (teamworkRank + 1 === 22) {
    teamworkRankEnding = "nd";
  } else if (teamworkRank + 1 === 23) {
    teamworkRankEnding = "rd";
  } else {
    teamworkRankEnding = "th";
  }

  if (toolsRank + 1 === 1) {
    toolsRankEnding = "st";
  } else if (toolsRank + 1 === 2) {
    toolsRankEnding = "nd";
  } else if (toolsRank + 1 === 3) {
    toolsRankEnding = "rd";
  } else if (toolsRank + 1 === 21) {
    toolsRankEnding = "st";
  } else if (toolsRank + 1 === 22) {
    toolsRankEnding = "nd";
  } else if (toolsRank + 1 === 23) {
    toolsRankEnding = "rd";
  } else {
    toolsRankEnding = "th";
  }

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <Card>
        <Text style={{ alignSelf: "center" }}>
          Welcome, {staff.fields.name}!
        </Text>
        <Button
          color="blue"
          onPress={() => {
            auth.signOut();
            navigation.navigate("Login");
          }}
          title="LogOut"
        >
          SignOut
        </Button>
        <Card.Cover source={{ uri: staff.fields.image[0].url }} />
        <Card outlined>
          <View
            style={{
              flex: 4,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Paragraph style={{ fontSize: 20, fontWeight: "bold" }}>
              Ranked
            </Paragraph>
            <Paragraph style={{ fontSize: 20 }}>
              {overalRank + 1}
              {overallRankEnding}
            </Paragraph>
            <Paragraph style={{ fontSize: 20, fontWeight: "bold" }}>
              Total
            </Paragraph>
            <Paragraph style={{ fontSize: 20 }}>{totalScore()}</Paragraph>
            <Divider horizontalInsert={true} />
          </View>
        </Card>
        <Card.Content
          style={{ marginTop: 20, flexDirection: "row", flexWrap: "wrap" }}
        >
          {/* <Card.Content>    
                    <Title style={{fontSize: 30}}>Average</Title>
                    <Paragraph style={{fontSize: 20}} >{averageScore}</Paragraph>
                </Card.Content> */}
        </Card.Content>

        <Card.Content
          style={{ marginTop: 20, flexDirection: "row", flexWrap: "wrap" }}
        >
          <Card.Content>
            <Title>Attendance</Title>
            <Paragraph>
              {attendanceRank + 1}
              {attendanceRankEnding}
            </Paragraph>
          </Card.Content>
          <Card.Content>
            <Title>Knowledge</Title>
            <Paragraph>
              {knowledgeRank + 1}
              {knowledgeRankEnding}
            </Paragraph>
          </Card.Content>
          <Card.Content>
            <Title>Team Work</Title>
            <Paragraph>
              {teamworkRank + 1}
              {teamworkRankEnding}
            </Paragraph>
          </Card.Content>
          <Card.Content>
            <Title>Tools</Title>
            <Paragraph>
              {toolsRank + 1}
              {toolsRankEnding}
            </Paragraph>
          </Card.Content>
          <Card.Content>
            <Title>Sales</Title>
            <Paragraph>
              {salesRank + 1}
              {salesRankEnding}
            </Paragraph>
          </Card.Content>
          {/* <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions> */}
        </Card.Content>

        <Card.Content
          style={{ marginTop: 20, flexDirection: "row", flexWrap: "wrap" }}
        >
          <Card.Content></Card.Content>
          {/* <Card.Content>    
                    <Title style={{fontSize: 30}}>Days</Title>
                    <Paragraph style={{fontSize: 20}} >{playerStatQuantity}</Paragraph>
                </Card.Content> */}
          {/* <Card.Content>    
                    <Title style={{fontSize: 30}}>Average</Title>
                    <Paragraph style={{fontSize: 20}} >{averageScore}</Paragraph>
                </Card.Content> */}
        </Card.Content>
        <Card.Content
          style={{ marginTop: 20, flexDirection: "row", flexWrap: "wrap" }}
        >
          <Card.Content>
            <Title>Attendance</Title>
            <Paragraph>{attendanceTotals}</Paragraph>
          </Card.Content>
          <Card.Content>
            <Title>Knowledge</Title>
            <Paragraph>{knowledgeTotals}</Paragraph>
          </Card.Content>
          <Card.Content>
            <Title>Team Work</Title>
            <Paragraph>{teamworkTotals}</Paragraph>
          </Card.Content>
          <Card.Content>
            <Title>Tools</Title>
            <Paragraph>{toolsTotals}</Paragraph>
          </Card.Content>
          <Card.Content>
            <Title>Sales</Title>
            <Paragraph>{salesTotals}</Paragraph>
          </Card.Content>
          {/* <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions> */}
        </Card.Content>
      </Card>
      {/* <Card>
            <Card.Title title='Awards' subtitle="Badges" />
            <Card.Content>    
                    <Title>Attendance Champ</Title>
                    <IconButton
                        icon="camera"
                        color='#F5BD02'
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                </Card.Content>
        </Card> */}
      <Example/>
    </ScrollView>
  );
};

export default MyProfile;
