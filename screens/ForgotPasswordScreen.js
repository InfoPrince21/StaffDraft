import { Text, View, ScrollView, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const [userName, setUsername] = useState("");
  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate("New Password");
  };

  const onSignInPressed = () => {
    navigation.navigate("Login");
  };
  return (
    <>
      <ScrollView>
        <View style={{ alignItems: "center", padding: 20 }}>
          <Text style={styles.title}>Reset Your Password</Text>
          <CustomInput
            placeholder="Username"
            value={userName}
            setValue={setUsername}
          />
          <CustomButton onPress={onSendPressed} text="Send" />
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
export default ForgotPasswordScreen;
