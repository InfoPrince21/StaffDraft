import { Text, View, ScrollView } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';


const Header = () => {
    return (
        <Card>
            <Card.Title>Stats Header</Card.Title>
            <Card.Divider />
            <Text style={{margin: 10}}>
                "Stats Header Info Will Go Here"
            </Text>
        </Card>
    );
};

const TicketsScreen = () => {

  
    return (
    <ScrollView style={{ backgroundColor: '#040a2e'}}>
        <Header />
        <Card>
            <Card.Title>Tickets</Card.Title>
            <Card.Divider />
                <ListItem>
                    <Avatar 
                        rounded 
                        source={{uri: "https://dl.airtable.com/.attachmentThumbnails/b9fe548231f5a31dccfeeaf9babe59ad/c6b4932b"}} />
                    <ListItem.Content>
                        <ListItem.Title>"Name"</ListItem.Title>
                        <ListItem.Subtitle>"Description"</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

        </Card>
    </ScrollView>
  )
}       

export default TicketsScreen;