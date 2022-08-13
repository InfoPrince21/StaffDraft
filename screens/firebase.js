import { View, Text, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Card } from "react-native-elements";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
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
import { useAuthState } from "react-firebase-hooks/auth";
import { RadioButtonItem } from "react-native-paper/lib/typescript/components/RadioButton/RadioButtonItem";
import { useNavigation } from "@react-navigation/native";
import MyProfile from "./MyProfile";
import CustomInput2 from "../components/CustomInput";
import firebase from "firebase/app";
import { selectStaffByEmail } from "../features/staff/staffSlice";
import HomeComponent from '../components/HomePageComponent'
import DraftRecap from "../components/DraftRecap";

export const firebaseConfig = {
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

const firebaseApp = () => {
  useEffect(() => {
    !user &&
        navigation.navigate("Login");
  }, []);

  // const onSend = useCallback((messages = []) => {
  //   setMessages((previousMessages) =>
  //     GiftedChat.append(previousMessages, messages)
  //   );
  // }, []);
  const scrollViewRef = useRef();
  const [user, loading, error] = useAuthState(auth);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [messageId, setMessageId] = useState(msgLenth);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [password, setPassword] = useState("");
  const usersCollectionRef = collection(firestore, "users");
  const chatMessagesRef = collection(firestore, "messages");
  const msgLenth = messages.length;
  const staff = useSelector(selectStaffByEmail(user?.email));
  const [inputHeight, setInputHeight] = useState();
  const [buttonHeight, setButtonHeight] = useState();

  const getData = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data() })));
  };

  const addUserButton = async () => {
    await setDoc(doc(firestore, "users", "Mike"), {
      age: "93",
      id: 12,
      name: "Bert",
    });
  };

  const addAutoIdUser = async () => {
    const newRef = doc(collection(firestore, "users"));
    await setDoc(newRef, {
      name: "Ronny",
      age: 125,
    });
  };

  const updateUser = async () => {
    const userDoc = doc(firestore, "users", "Mike");
    await updateDoc(userDoc, { age: 10 });
  };

  const deleteUser = async () => {
    const userDoc = doc(firestore, "users", "Mike");
    await deleteDoc(userDoc);
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => console.log(auth))
      .catch((error) => console.error(error));
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => console.log(auth))
      .catch((error) => console.error(error));
  };

  return (
    <>
      {!user && (
        <>
          <View
            style={{
              alignSelf: "center",
              marginTop: 50,
            }}
          >
            <Text>Not Logged in.</Text>
          </View>
          <View
            style={{
              alignSelf: "center",
              marginTop: 50,
            }}
          >
            <Text>You need to successfully login first.</Text>
          </View>
          <Button
            color="white"
            style={{
              zIndex: 10,
              elevation: 1,
              backgroundColor: "#4169e1",
              marginTop: 100,
              margin: 100,
            }}
            title="Sign In"
            onPress={() => {
              auth.signOut();
              navigation.navigate("Login");
            }}
          >
            Go Back
          </Button>
        </>
      )}
      {user?.email && (
        <>
          <HomeComponent user={user} />
        </>
      )}
    </>
  );
};

export default firebaseApp;
