import { useWindowDimensions } from "react-native";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { Avatar, Card, ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import Logo from "../assets/images/logo1.jpg";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in");
  };

  const onForgotPasswordPressed = () => {
    console.warn("onForgotPasswordPressed");
  };

  const onSigninFacebook = () => {
    console.warn("facebook");
  };

  const onSigninGoogle = () => {
    console.warn("Google");
  };

  const onSigninApple = () => {
    console.warn("Apple");
  };

    const onSignUpPressed = () => {
      console.warn("Sign Up Pressed");
    };

  return (
    <>
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
          text="Forgot Password"
          type="TERTIARY"
        />

        <CustomButton
          bgColor="#e7eaf4"
          fgColor="#4765a9"
          onPress={onSigninFacebook}
          text="Login with Facebook"
        />
        <CustomButton
          bgColor="#fae9ea"
          fgColor="#dd4d44"
          onPress={onSigninGoogle}
          text="Login with Google"
        />
        <CustomButton
          bgColor="#e3e3e3"
          fgColor="#363636"
          onPress={onSigninApple}
          text="Login with Apple"
        />
        <CustomButton
          onPress={onSignUpPressed}
          text="Don't Have Account? Create One"
          type="TERTIARY"
        />
      </View>
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
