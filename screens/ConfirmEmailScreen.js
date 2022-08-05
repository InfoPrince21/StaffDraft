import { Text, View, ScrollView, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
   const navigation = useNavigation();
  const onConfirmPressed = () => {
    navigation.navigate("Home");
  };

  const onResendCodePressed = () => {
    console.warn("onResendCodePressed");
  };

  const onSignInPressed = () => {
    navigation.navigate("Login");
  };
  return (
    <>
      <ScrollView>
        <View style={{ alignItems: "center", padding: 20 }}>
          <Text style={styles.title}>Confirm your email</Text>
          <CustomInput
            placeholder="Enter your confirmation Code"
            value={code}
            setValue={setCode}
          />
          <CustomButton onPress={onConfirmPressed} text="Confirm" />
          <CustomButton
            onPress={onResendCodePressed}
            text="Resend Code"
            type="SECONDARY"
          />
          <CustomButton
            onPress={onSignInPressed}
            text="Back to Sign in"
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#fdb075",
  },
});
export default ConfirmEmailScreen;
