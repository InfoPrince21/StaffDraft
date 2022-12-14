import { Text, View, ScrollView, Button } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { getScoreBoardStatsTeamwork } from '../features/stats/statsSlice';
import { useState } from 'react'
import TeamProfile from './TeamProfile';
import { selectAllTeams } from '../features/teams/teamSlice';

const TeamTeamworkBoard = () => {
    const [allButton, setAllButton] = useState("All")
    const [team1Button, setT1Button] = useState("Cowboys")
    const [team2Button, setT2Button] = useState("Bucs")
    const [team3Button, setT3Button] = useState("A's")
    const Leaderboard = useSelector(getScoreBoardStatsTeamwork);
    const [filterScores, setFilterScores] = useState("0")
    const getTeams = useSelector(selectAllTeams)
    let merged = [];
    
    const newLoaderBoard = Object.values(Leaderboard.reduce((value, object) => {
        if (value[object.team]) {
           ['teamwork'].forEach(key => value[object.team][key] = value[object.team][key] + object[key]);
           } else {
              value[object.team] = { ...object };
        }
        return value;
     }, {}));

  
    

     for(let i=0; i<newLoaderBoard.length; i++) {
        merged.push({
         ...newLoaderBoard[i], 
         ...(getTeams.find((itmInner) => itmInner.fields.name === newLoaderBoard[i].team))}
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
        setFilterScores("0")
      }
      const handleClick2 = () => {
        setFilterScores("Cowboys")
      }
      const handleClick3 = () => {
        setFilterScores("Bucs")
      }
      const handleClick4 = () => {
        setFilterScores("A's")
      }

   

    return (
      <ScrollView>
        <TeamProfile Leaderboard={between(merged, filterScores)}></TeamProfile>
      </ScrollView>
    );
}       

export default TeamTeamworkBoard;