import { Text, View, ScrollView, Button } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { getScoreBoardStats } from '../features/stats/statsSlice';
import { useState } from 'react'
import Profiles from './Profiles';
import { selectAllStaff} from '../features/staff/staffSlice';



const Board = () => {
    
    const [allButton, setAllButton] = useState("All")
    const [team1Button, setT1Button] = useState("Cowboys")
    const [team2Button, setT2Button] = useState("Bucs")
    const [team3Button, setT3Button] = useState("A's")
    const [filterScores, setFilterScores] = useState("0")
    const Leaderboard = useSelector(getScoreBoardStats);
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
        )
        if (between == 0) {
          filter = merged.filter(dat => dat.team)
          return filter.sort((a, b) => {
              if ( a.score === b.score){
                  return b.score - a.score;
              } else{
                  return b.score - a.score;
              }
          })
      }

      // sort with asending order
        return filter.sort((a, b) => {
                if ( a.score === b.score){
                    return b.score - a.score;
                } else{
                    return b.score - a.score;
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
        <View>
            <View style={{margin: 20, flexDirection:'row', justifyContent:'space-evenly'}}>
                <Button title={allButton} onPress={handleClick1} />
                <Button title={team1Button} onPress={handleClick2} />
                <Button title={team2Button} onPress={handleClick3} />
                <Button title={team3Button} onPress={handleClick4} />
            </View>
            <Profiles Leaderboard={between(merged, filterScores)}></Profiles>
        </View>
        
  )
}       

export default Board;