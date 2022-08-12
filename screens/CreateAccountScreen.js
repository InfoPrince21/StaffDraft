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
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as Animatable from "react-native-animatable";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVnua4Gn_xBXqjvA0EddDy8jihrIi_jSo",
  authDomain: "staffdraft.firebaseapp.com",
  projectId: "staffdraft",
  storageBucket: "staffdraft.appspot.com",
  messagingSenderId: "363200078121",
  appId: "1:363200078121:web:52ee21722d258be8de5738",
  measurementId: "G-EBD2KWXXZY",
};

initializeApp(firebaseConfig);
const firestore = getFirestore();
const auth = getAuth(initializeApp(firebaseConfig));

const CreateAccountScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usersCollectionRef = collection(firestore, "users");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => console.log(auth))
      .catch((error) => console.error(error));
    navigation.navigate("Home");
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => console.log(auth))
      .catch((error) => console.error(error));
    navigation.navigate("Home");
  };

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

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
              placeholder="Email"
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              placeholder="Password"
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
            />

            <CustomButton onPress={signIn} text="Login" />
            <CustomButton
              onPress={onForgotPasswordPressed}
              text="Forgot Password?"
              type="TERTIARY"
            />
            {/* <SocialSignInButtons /> */}
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

export default CreateAccountScreen;
