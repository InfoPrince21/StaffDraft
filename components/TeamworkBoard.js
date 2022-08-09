import { Text, View, ScrollView} from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { getScoreBoardStatsTeamwork } from '../features/stats/statsSlice';
import { useState } from 'react'
import Profiles from './Profiles';
import { selectAllStaff} from '../features/staff/staffSlice';
import { Button } from 'react-native-paper';




const TeamworkBoard = () => {
    const [allButton, setAllButton] = useState("All");
    const [team1Button, setT1Button] = useState("Box");
    const [team2Button, setT2Button] = useState("SayLess");
    const [team3Button, setT3Button] = useState("Riders");
    const Leaderboard = useSelector(getScoreBoardStatsTeamwork);
    const [filterScores, setFilterScores] = useState("0")
    const getStaff = useSelector(selectAllStaff)
    let merged = [];
    for(let i=0; i<Leaderboard.length; i++) {
      merged.push({
       ...Leaderboard[i], 
       ...(getStaff.find((itmInner) => itmInner.fields.name === Leaderboard[i].name))}
      );
    }



    const between = (data, between) => {

        let filter = data.filter(dat => 
            dat.team === between
        );
        if (between == 0) {
            filter = merged.filter(dat => dat.team)
            return filter.sort((a, b) => {
                if ( a.teamwork === b.teamwork){
                    return b.teamwork - a.teamwork;
                } else{
                    return b.teamwork - a.teamwork;
                }
            })
        }
  


        return filter.sort((a, b) => {
                if ( a.teamwork === b.teamwork){
                    return b.teamwork - a.teamwork;
                } else{
                    return b.teamwork - a.teamwork;
                }
            })


    }
      
      const handleClick1 = () => {
        setFilterScores("0");
      };
      const handleClick2 = () => {
        setFilterScores("Team Box");
      };
      const handleClick3 = () => {
        setFilterScores("Say Less");
      };
      const handleClick4 = () => {
        setFilterScores("Tuff Riders");
      };


    return (
      <ScrollView>
        <View
          style={{
            margin: 20,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Button mode="contained" onPress={handleClick1} color="#002366">
            All
          </Button>
          <Button mode="contained" onPress={handleClick2} color="#002366">
            {team1Button}
          </Button>
          <Button mode="contained" onPress={handleClick3} color="#002366">
            {team2Button}
          </Button>
          <Button mode="contained" onPress={handleClick4} color="#002366">
            {team3Button}
          </Button>
        </View>
        <Profiles Leaderboard={between(merged, filterScores)}></Profiles>
      </ScrollView>
    );
}       

export default TeamworkBoard;