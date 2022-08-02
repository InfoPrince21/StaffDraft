import { Text, View, ScrollView } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { WebView } from 'react-native-webview'; 


const SubmitScoreScreen = () => {

  
    return (

        <WebView 
        originWhitelist={['*']} 
        source={{ html: '<iframe src="https://airtable.com/embed/shrBKhKMVK7fIMXJV?backgroundColor=red" width="100%" height="2000" frameborder="0"></iframe>' }} /> 
    ); 
}       

export default SubmitScoreScreen;