import { Text, View, ScrollView, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { setBadgeCountAsync } from "expo-notifications";
import {
  getFirestore,
  setDoc,
  doc,
  onValue,
  updateDoc,
  deleteField,
  deleteDoc,
} from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { nanoid } from "@reduxjs/toolkit";
// import { customAlphabet } from "nanoid/non-secure"; 
const SignUpScreen = () => {

const sendDataToFirebase = async () =>{
  const nanoid = customAlphabet("123456789", 4);
  const user_id = nanoid();
  const firestore = getFirestore();

  await setDoc(doc(firestore, "users", user_id), {
    phone: "214-777-8888",
    name: "Mike Jones",
    age: 120,
  });
}
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate("Confirm Email");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("Forgot Password");
  };

  const onTermsOfUsePress = () => {
    console.warn("onTermsOfUsePress");
  };

  const onPrivacyPolicyPress = () => {
    console.warn("onPrivacyPolicyPress");
  };


  const onSignInPressed = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <ScrollView>
        <View style={{ alignItems: "center", padding: 20 }}>
          {/* <CustomButton onPress={deleteData} text="Firebase" type="TERTIARY" /> */}

          <Text style={styles.title}>Create an account</Text>
          {/* <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          /> */}
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          {/* <CustomInput
            placeholder="Repeat Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry={true}
          /> */}

          <CustomButton onPress={onRegisterPressed} text="Register" />
          <CustomButton
            onPress={onForgotPasswordPressed}
            text="Forgot Password?"
            type="TERTIARY"
          />
          <Text style={styles.text}>
            By registering, you confirm that you accept our{" "}
            <Text style={styles.link} onPress={onTermsOfUsePress}>
              Terms of Use
            </Text>{" "}
            and{" "}
            <Text style={styles.link} onPress={onPrivacyPolicyPress}>
              Privacy Policy
            </Text>
            .
          </Text>
          {/* <SocialSignInButtons /> */}
          <CustomButton
            onPress={onSignInPressed}
            text="Have an Account? Sign in"
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

export default SignUpScreen;
