import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Logo from "../assets/images/logo1.jpg";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("Forgot Password");
  };
  
    const onSignUpPressed = () => {
      navigation.navigate("Sign Up");
    };

  return (
    <>
    <ScrollView>
      <View style={{ alignItems: "center", padding: 20 }}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton onPress={onSignInPressed} text="Login" />
        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot Password?"
          type="TERTIARY"
        />
        <SocialSignInButtons/>
        <CustomButton
          onPress={onSignUpPressed}
          text="Don't Have Account? Create One"
          type="TERTIARY"
        />
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 250,
  },
});

export default SignInScreen;
