import { Text, View, ScrollView } from "react-native";
import { ListItem, Card } from "react-native-elements";
import { useSelector } from "react-redux";
import { Avatar, Button, Title, Paragraph } from "react-native-paper";
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

const MyStatsHistory = ({ user }) => {
  const staff = useSelector(selectStaffByEmail(user?.email));

  const playerStats = useSelector(selectStatsByName(staff.fields.name));

  const attendanceStats = playerStats.map((stat) => stat.fields.attendance);

  const knowledgeStats = playerStats.map((stat) => stat.fields.knowledge);

  const teamworkStats = playerStats.map((stat) => stat.fields.teamwork);

  const toolsStats = playerStats.map((stat) => stat.fields.tools);

  const salesStats = playerStats.map((stat) => stat.fields.sales);

  // console.log("#1" + (JSON.stringify(listRankingsOverall[0])))

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <Card>
        {playerStats.map((stat) => (
          <>
          <Card>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text>Total: {stat.fields.scoreTotal}</Text>
              </View>
              <View>
                <Text>Date: {stat.fields.date}</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <Text style={{ padding: 5 }}>
                Attendance: {stat.fields.attendance}
              </Text>
              <Text style={{ padding: 5 }}>
                Knowledge: {stat.fields.knowledge}
              </Text>
              <Text style={{ padding: 5 }}>
                Teamwork: {stat.fields.teamwork}
              </Text>
              <Text style={{ padding: 5}}>
                Tools: {stat.fields.tools}
              </Text>
              <Text style={{ padding: 5 }}>
                Sales: {stat.fields.sales}
              </Text>
            </View>
            </Card>
          </>
        ))}
      </Card>
    </ScrollView>
  );
};

export default MyStatsHistory;
