import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
// import Loading from '../components/LoadingComponent';

const FeaturedItem = () => {
    // const { item } = props;
 
        return (
            <Card containerStyle={{padding: 0}}>
                <Card.Image source={{uri: "https://dl.airtable.com/.attachmentThumbnails/b9fe548231f5a31dccfeeaf9babe59ad/c6b4932b"}} >
                    <View style={{justifyContent: 'center', flex: 1}}>
                        <Text style={{color: 'black', textAlign: 'center', fontSize: 20}}>"Name"</Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>"Description"</Text>
            </Card>
        )
}


const HomeScreen = () => {
    return (
    <View>
    <   ScrollView style={{ backgroundColor: '#040a2e'}}>
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
        </ScrollView>
    </View>
  );
};

export default HomeScreen;