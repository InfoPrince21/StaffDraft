import { Text, View, ScrollView, StyleSheet } from "react-native";
import { selectStaffImageByName } from "../features/staff/staffSlice";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { useSelector } from "react-redux";
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



const Header = () => {
    
    const listRankingsOverall = useSelector(getScoreBoardStats);
      const getPlayerImage = useSelector(
        selectStaffImageByName(listRankingsOverall[0].name)
      );
  
  
      


      console.log(listRankingsOverall); 



    return (
      <Card mode="contained">
        <Card.Title
          title="League MVP"
          left={(props) => (
            <Avatar.Icon
              {...props}
              backgroundColor="#FFBC00"
              color="#040a2e"
              icon="trophy"
            />
          )}
        />
        <Card.Content></Card.Content>
        <Card.Cover
          source={{
            uri: getPlayerImage.fields.image[0].url,
          }}
        />
        <Title style={{ alignSelf: "center" }}>
          {listRankingsOverall[0].name}
        </Title>
        <Paragraph style={{ alignSelf: "center" }}>
          {listRankingsOverall[0].team}
        </Paragraph>
      </Card>
    );
};
const FirstAttendance = (props) => {
  const getPlayerImage = useSelector(
    selectStaffImageByName(props.listRankingsAttendance[0].name)
  );
  
    return (
      <Card mode="contained">
        <Card.Title
          title="Attendance"
          right={(props) => (
            <Avatar.Icon
              {...props}
              backgroundColor="#FFBC00"
              color="#040a2e"
              icon="clock-fast"
              style={{ marginRight: 10 }}
            />
          )}
        />
        <Avatar.Image
          style={{ alignSelf: "center" }}
          size={75}
          source={{
            uri: getPlayerImage.fields.image[0].url,
          }}
        />
        <Title style={{ alignSelf: "center" }}>
          {props.listRankingsAttendance[0].name}
        </Title>
        <Paragraph style={{ alignSelf: "center" }}>
          {props.listRankingsAttendance[0].team}
        </Paragraph>
      </Card>
    );
};

const FirstKnowledge = (props) => {
    const getPlayerImage = useSelector(
      selectStaffImageByName(props.listRankingsKnowledge[0].name)
    );
  
  
    return (
      <Card mode="contained">
        <Card.Title
          title="Knowledge"
          right={(props) => (
            <Avatar.Icon
              {...props}
              backgroundColor="#FFBC00"
              color="#040a2e"
              icon="head-snowflake"
              style={{ marginRight: 10 }}
            />
          )}
        />
        <Avatar.Image
          style={{ alignSelf: "center" }}
          size={75}
          source={{
            uri: getPlayerImage.fields.image[0].url,
          }}
        />
        <Title style={{ alignSelf: "center" }}>
          {props.listRankingsKnowledge[0].name}
        </Title>
        <Paragraph style={{ alignSelf: "center" }}>
          {props.listRankingsKnowledge[0].team}
        </Paragraph>
      </Card>
    );
};

const FirstTeamwork = (props) => {
      const getPlayerImage = useSelector(
        selectStaffImageByName(props.listRankingsTeamwork[0].name)
      );
  
  
    return (
      <Card mode="contained">
        <Card.Title
          title="Teamwork"
          right={(props) => (
            <Avatar.Icon
              {...props}
              backgroundColor="#FFBC00"
              color="#040a2e"
              icon="microsoft-teams"
              style={{ marginRight: 10 }}
            />
          )}
        />
        <Avatar.Image
          style={{ alignSelf: "center" }}
          size={75}
          source={{
            uri: getPlayerImage.fields.image[0].url,
          }}
        />
        <Title style={{ alignSelf: "center" }}>
          {props.listRankingsTeamwork[0].name}
        </Title>
        <Paragraph style={{ alignSelf: "center" }}>
          {props.listRankingsTeamwork[0].team}
        </Paragraph>
      </Card>
    );
};

const FirstSales = (props) => {
       const getPlayerImage = useSelector(
         selectStaffImageByName(props.listRankingsSales[0].name)
       );
  
 
    return (
    <Card mode="contained">
      <Card.Title
        title="Sales"
        right={(props) => (
          <Avatar.Icon
            {...props}
            backgroundColor="#FFBC00"
            color="#040a2e"
            icon="cash"
            style={{ marginRight: 10 }}
          />
        )}
      />
      <Avatar.Image
        style={{ alignSelf: "center" }}
        size={75}
        source={{
            uri: getPlayerImage.fields.image[0].url,
        }}
      />
        <Title style={{ alignSelf: "center" }}>
          {props.listRankingsSales[0].name}
        </Title>
        <Paragraph style={{ alignSelf: "center" }}>
          {props.listRankingsSales[0].team}
        </Paragraph>
      </Card>
  );
};

const FirstTools = (props) => {
    const getPlayerImage = useSelector(
      selectStaffImageByName(props.listRankingsTools[0].name)
    );
  
  
    return (
      <Card mode="contained">
        <Card.Title
          title="Tools"
          right={(props) => (
            <Avatar.Icon
              {...props}
              backgroundColor="#FFBC00"
              color="#040a2e"
              icon="tools"
              style={{ marginRight: 10 }}
            />
          )}
        />
        <Avatar.Image
          style={{ alignSelf: "center" }}
          size={75}
          source={{
            uri: getPlayerImage.fields.image[0].url,
          }}
        />
        <Title style={{ alignSelf: "center" }}>
          {props.listRankingsTools[0].name}
        </Title>
        <Paragraph style={{ alignSelf: "center" }}>
          {props.listRankingsTools[0].team}
        </Paragraph>
      </Card>
    );
};

const Captain = (props) => {
      const getPlayerImage = useSelector(
        selectStaffImageByName(props.listRankingsTools[0].name)
      );
  return (
    <Card mode="contained">
      <Card.Title
        title="Captain"
        right={(props) => (
          <Avatar.Icon
            {...props}
            backgroundColor="#FFBC00"
            color="#040a2e"
            icon="medal"
            style={{ marginRight: 10 }}
          />
        )}
      />
      <Avatar.Image
        style={{ alignSelf: "center" }}
        size={75}
        source={{
          uri: getPlayerImage.fields.image[0].url,
        }}
      />
      <Title style={{ alignSelf: "center" }}>
        {props.listRankingsTools[0].name}
      </Title>
      <Paragraph style={{ alignSelf: "center" }}>
        {props.listRankingsTools[0].team}
      </Paragraph>
    </Card>
  );
};
const Team2Mvp = (props) => {
      const getPlayerImage = useSelector(
        selectStaffImageByName(props.listRankingsTools[0].name)
      );
  return (
    <Card mode="contained">
      <Card.Title
        title="Team Mvp"
        right={(props) => (
          <Avatar.Icon
            {...props}
            backgroundColor="#FFBC00"
            color="#040a2e"
            icon="medal"
            style={{ marginRight: 10 }}
          />
        )}
      />
      <Avatar.Image
        style={{ alignSelf: "center" }}
        size={75}
        source={{
          uri: getPlayerImage.fields.image[0].url,
        }}
      />
      <Title style={{ alignSelf: "center" }}>
        {props.listRankingsTools[0].name}
      </Title>
      <Paragraph style={{ alignSelf: "center" }}>
        {props.listRankingsTools[0].team}
      </Paragraph>
    </Card>
  );
};
const Team3Mvp = (props) => {
      const getPlayerImage = useSelector(
        selectStaffImageByName(props.listRankingsTools[0].name)
      );
  return (
    <Card mode="contained">
      <Card.Title
        title="Team MVP"
        right={(props) => (
          <Avatar.Icon
            {...props}
            backgroundColor="#FFBC00"
            color="#040a2e"
            icon="medal"
            style={{ marginRight: 10 }}
          />
        )}
      />
      <Avatar.Image
        style={{ alignSelf: "center" }}
        size={75}
        source={{
          uri: getPlayerImage.fields.image[0].url,
        }}
      />
      <Title style={{ alignSelf: "center" }}>
        {props.listRankingsTools[0].name}
      </Title>
      <Paragraph style={{ alignSelf: "center" }}>
        {props.listRankingsTools[0].team}
      </Paragraph>
    </Card>
  );
};

const AwardsScreen = () => {
  


 
  const listRankingsAttendance = useSelector(getScoreBoardStatsAttendance);
  const listRankingsSales = useSelector(getScoreBoardStatsSales);
  const listRankingsKnowledge = useSelector(getScoreBoardStatsKnowledge);
  const listRankingsTools = useSelector(getScoreBoardStatsTools);
  const listRankingsTeamwork = useSelector(getScoreBoardStatsTeamwork);


  return (
    <ScrollView style={{ backgroundColor: "#040a2e" }}>
      <Header />
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <View style={styles.col}>
          <Captain listRankingsTools={listRankingsTools} />
        </View>
        <View style={styles.col}>
          <FirstAttendance listRankingsAttendance={listRankingsAttendance} />
        </View>
        <View style={styles.col}>
          <FirstKnowledge listRankingsKnowledge={listRankingsKnowledge} />
        </View>
        <View style={styles.col}>
          <FirstSales listRankingsSales={listRankingsSales} />
        </View>
        <View style={styles.col}>
          <FirstTeamwork listRankingsTeamwork={listRankingsTeamwork} />
        </View>
        <View style={styles.col}>
          <FirstTools listRankingsTools={listRankingsTools} />
        </View>
        <View style={styles.col}>
          <Team2Mvp listRankingsTools={listRankingsTools} />
        </View>
        <View style={styles.col}>
          <Team3Mvp listRankingsTools={listRankingsTools} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  col: {
    width: "50%",
    padding: 2,
    marginBottom: 0,
  },
});

export default AwardsScreen;
