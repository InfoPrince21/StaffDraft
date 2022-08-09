import { Text, View, ScrollView } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { getScoreBoardStats } from '../features/stats/statsSlice';
import { useState } from 'react'
import Profiles from './Profiles';
import { selectAllStaff} from '../features/staff/staffSlice';
import { Button } from 'react-native-paper';
import { addPlayerRankings } from '../features/stats/statsSlice';

const Board = () => {
    const dispatch = useDispatch()
    const [allButton, setAllButton] = useState("All")
    const [team1Button, setT1Button] = useState("Box")
    const [team2Button, setT2Button] = useState("SayLess")
    const [team3Button, setT3Button] = useState("Riders")
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
    
    const rankings = merged.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })
  
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
        setFilterScores("Team Box")
      }
      const handleClick3 = () => {
        setFilterScores("Say Less")
      }
      const handleClick4 = () => {
        setFilterScores("Tuff Riders")
      }

      dispatch(addPlayerRankings(rankings))

    return (
        <View>
            <View style={{margin: 20, flexDirection:'row', justifyContent:'space-evenly'}}>
              <Button mode="contained" onPress={handleClick1} color='#002366'>
                All
              </Button>
              <Button mode="contained" onPress={handleClick2} color='#002366'>
                {team1Button}
              </Button>
              <Button mode="contained" onPress={handleClick3} color='#002366'>
              {team2Button}
              </Button>
              <Button mode="contained" onPress={handleClick4} color='#002366'>
              {team3Button}
              </Button>
            </View>
            <Profiles Leaderboard={between(merged, filterScores)}></Profiles>
        </View>
        
  )
}       

export default Board;