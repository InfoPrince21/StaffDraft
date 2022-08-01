import { Text, View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { selectStats, selectStatsByName } from '../features/stats/statsSlice';


const StaffDetailScreen = ({route}) => {
    const { staff } = route.params;

    const playerStats = useSelector(selectStatsByName(staff.fields.name));
    const playerStatQuantity = playerStats.length

    const attendanceStats = playerStats.map(stat => stat.fields.attendance)
    const attendanceTotals = attendanceStats.reduce((partialSum, a) => partialSum + a, 0)

    const knowledgeStats= playerStats.map(stat => stat.fields.knowledge)
    const knowledgeTotals = knowledgeStats.reduce((partialSum, a) => partialSum + a, 0)

    const teamworkStats= playerStats.map(stat => stat.fields.teamwork)
    const teamworkTotals = teamworkStats.reduce((partialSum, a) => partialSum + a, 0)

    const toolsStats= playerStats.map(stat => stat.fields.tools)
    const toolsTotals = toolsStats.reduce((partialSum, a) => partialSum + a, 0)

    const salesStats= playerStats.map(stat => stat.fields.sales)
    const salesTotals = salesStats.reduce((partialSum, a) => partialSum + a, 0)

    const totalScore = () => {
        const totals = parseInt(attendanceTotals) + parseInt(knowledgeTotals) + parseInt(toolsTotals)+ parseInt(teamworkTotals) + parseInt(salesTotals)
        return totals
    }

    const averageScore = Math.round(totalScore()/playerStatQuantity)
    
    

    return (
    <ScrollView style={{ backgroundColor: '#fff'}}>
        <Card>
            <Card.Cover source={{ uri: staff.fields.image[0].url }} />
            <Card.Title title={staff.fields.name} subtitle="Score Break Down" />
            <Card.Content style={{marginTop: 20, flexDirection:'row', flexWrap: 'wrap'}}>
                <Card.Content>    
                    <Title style={{fontSize: 30}}>Total Score</Title>
                    <Paragraph style={{fontSize: 20}} >{totalScore()}</Paragraph>
                </Card.Content> 
                {/* <Card.Content>    
                    <Title style={{fontSize: 30}}>Days</Title>
                    <Paragraph style={{fontSize: 20}} >{playerStatQuantity}</Paragraph>
                </Card.Content> */}
                <Card.Content>    
                    <Title style={{fontSize: 30}}>Average</Title>
                    <Paragraph style={{fontSize: 20}} >{averageScore}</Paragraph>
                </Card.Content>
            </Card.Content>
            <Card.Content style={{marginTop: 20, flexDirection:'row', flexWrap: 'wrap'}}>    
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
  )
}       

export default StaffDetailScreen;