import { useWindowDimensions } from 'react-native';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import Logo from '../assets/images/logo.png'
import CustomInput from '../components/CustomInput';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  
    return (
    <View style={{ alignItems: 'center', padding: 20}}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
        <CustomInput />
    </View>
  )
}       

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 250
  }
})

export default SignInScreen;