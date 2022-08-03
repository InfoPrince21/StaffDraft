import { Text, View, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { selectStats, selectStatsByTeam } from "../features/stats/statsSlice";

const TeamDetailScreen = ({ route }) => {
  const { team } = route.params;

  const teamStats = useSelector(selectStatsByTeam(team.fields.id));
  const teamStatQuantity = teamStats.length;

  const attendanceStats = teamStats.map((stat) => stat.fields.attendance);
  const attendanceTotals = attendanceStats.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  const knowledgeStats = teamStats.map((stat) => stat.fields.knowledge);
  const knowledgeTotals = knowledgeStats.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  const teamworkStats = teamStats.map((stat) => stat.fields.teamwork);
  const teamworkTotals = teamworkStats.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  const toolsStats = teamStats.map((stat) => stat.fields.tools);
  const toolsTotals = toolsStats.reduce((partialSum, a) => partialSum + a, 0);

  const salesStats = teamStats.map((stat) => stat.fields.sales);
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

  const averageScore = Math.round(totalScore() / teamStatQuantity);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <Card>
        <Card.Cover source={{ uri: team.fields.image[0].url }} />
        <Card.Title title={team.fields.name} subtitle="Score Break Down" />
        <Card.Content
          style={{ marginTop: 20, flexDirection: "row", flexWrap: "wrap" }}
        >
          <Card.Content>
            <Title style={{ fontSize: 30 }}>Total Score</Title>
            <Paragraph style={{ fontSize: 20 }}>{totalScore()}</Paragraph>
          </Card.Content>
          {/* <Card.Content>    
                    <Title style={{fontSize: 30}}>Days</Title>
                    <Paragraph style={{fontSize: 20}} >{playerStatQuantity}</Paragraph>
                </Card.Content> */}
          <Card.Content>
            <Title style={{ fontSize: 30 }}>Average</Title>
            <Paragraph style={{ fontSize: 20 }}>{averageScore}</Paragraph>
          </Card.Content>
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
    </ScrollView>
  );
};

export default TeamDetailScreen;
