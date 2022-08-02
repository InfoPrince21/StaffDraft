import { Text, View, ScrollView, Button } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { getScoreBoardStatsSales } from '../features/stats/statsSlice';
import { useState } from 'react'
import Profiles from './Profiles';
import { selectAllStaff} from '../features/staff/staffSlice';



const SalesBoard = () => {
    const [allButton, setAllButton] = useState("All")
    const [team1Button, setT1Button] = useState("Cowboys")
    const [team2Button, setT2Button] = useState("Bucs")
    const [team3Button, setT3Button] = useState("A's")
    const Leaderboard = useSelector(getScoreBoardStatsSales);
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
                if ( a.sales === b.sales){
                    return b.sales - a.sales;
                } else{
                    return b.sales - a.sales;
                }
            })
        }
  


        return filter.sort((a, b) => {
                if ( a.sales === b.sales){
                    return b.sales - a.sales;
                } else{
                    return b.sales - a.sales;
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

export default SalesBoard;