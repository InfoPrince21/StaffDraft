import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
} from "react-native";
import Logo from "../assets/images/logo1.jpg";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as Animatable from "react-native-animatable";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const { control, handleSubmit, formState: {errors} } = useForm();
  console.log(errors)

  const onSignInPressed = (data) => {
    // console.log(data);
    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("Forgot Password");
  };

  const onSignUpPressed = () => {
    navigation.navigate("Sign Up");
  };

  return (
    <>
      <Animatable.View animation="fadeInUp" duration={1400} delay={700}>
        <ScrollView>
          <View style={{ alignItems: "center", padding: 20 }}>
            <Image
              source={Logo}
              style={[styles.logo, { height: height * 0.3 }]}
            />
            <CustomInput
              name="username"
              placeholder="Username"
              control={control}
              rules={{
                required: "Username is required",
                minLength: {
                  value: 5,
                  message: "Username should be longer than 5 characters",
                },
              }}
            />
            <CustomInput
              name="password"
              placeholder="Password"
              control={control}
              secureTextEntry={true}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password should be longer than 5 characters",
                },
              }}
            />

            <CustomButton
              onPress={handleSubmit(onSignInPressed)}
              text="Login"
            />
            <CustomButton
              onPress={onForgotPasswordPressed}
              text="Forgot Password?"
              type="TERTIARY"
            />
            <SocialSignInButtons />
            <CustomButton
              onPress={onSignUpPressed}
              text="Don't Have Account? Create One"
              type="TERTIARY"
            />
          </View>
        </ScrollView>
      </Animatable.View>
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
