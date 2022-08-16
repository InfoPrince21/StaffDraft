import { View, Text, Button } from "react-native";
import { useEffect } from "react";
import { selectStaffByEmail } from "../features/staff/staffSlice/";
import { useSelector } from "react-redux";

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "key7CvA4nWviUYLcP" }).base(
  "appmqv083cLppisF5"
);

const staffList = base("Staff");
const quizDb = base("StaffScoreCards");

const AirTableTest = () => {

   
    
    
    const selectStaff = useSelector(
      selectStaffByEmail("isaiahmack85@gmail.com")
    );

    const myName = selectStaff.fields.name
    const myTeam = selectStaff.fields.team;
    const myTeamId = selectStaff.fields.teamId;

  const addQuizScore = async () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    const newToday = yyyy + "-" + mm + "-" + dd;

    const records = await quizDb.create(
      [
        {
          fields: {
            name: myName,
            knowledge: 200,
            date: newToday,
            teamId: myTeamId,
            teamName: myTeam,
            attendance:0,
            teamwork:0,
            sales:0,
            tools:0,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );
  };

  return (
    <View>
      <Text>AirTableTest</Text>
      <Button title="Run Test" onPress={() => addQuizScore()} />
      {/* <Text>{myName}</Text> */}
    </View>
  );
};

export default AirTableTest;
