import { FlatList, Text, View } from 'react-native';
import { Tile, Card, Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import { selectAllTeams } from '../features/teams/teamSlice';

const TeamsScreen = ({ navigation }) => {
 
    const teams = useSelector(selectAllTeams);

    const renderDirectoryItem = ({ item: team }) => {
        return (
            <Card>
            <Card.Title>{team.fields.name}</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{ padding: 0 }}
                source={{uri: team.fields.image[0].url}}
            />
            </Card>
        ); 
    };
    return (
        <FlatList
            data={teams}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.fields.id.toString()}
        />
    );
};

export default TeamsScreen;