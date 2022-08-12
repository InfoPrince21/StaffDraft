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
    getMessages();
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

  useEffect(() => {
    const getNewMessages = async () => {
      const data = await getDocs(chatMessagesRef);
      setMessages(
        data.docs
          .map((doc) => ({ ...doc.data() }))
          .sort((a, b) => {
            if (doc) {
              return a.id - b.id;
            } else {
              return a.id - b.id;
            }
          })
      );
      setMessageId(messages.length);
    };
    getNewMessages();
  }, []);

  const getData = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data() })));
  };

  const getMessages = async () => {
    const data = await getDocs(chatMessagesRef);
    setMessages(
      data.docs
        .map((doc) => ({ ...doc.data() }))
        .sort((a, b) => {
          if (doc) {
            return a.id - b.id;
          } else {
            return a.id - b.id;
          }
        })
    );
    // setMessageId(messages.length)
    // console.log(messages.length);
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

  const addChatText = async () => {
    const newRef = doc(collection(firestore, "messages"));
    await setDoc(newRef, {
      text: text,
      createdAt: new Date().toLocaleString(),
      user: staff.fields.name,
      id: msgLenth + 1,
    });
    getMessages();
    setMessageId(messages.length);
    setText("");
    scrollViewRef.current.scrollToEnd({ animated: true });
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
          <Button
            color="white"
            style={{ zIndex: 10, elevation: 1, backgroundColor: "#4169e1" }}
            title="Sign In"
            onPress={() => {
              auth.signOut();
              navigation.navigate("Login");
            }}
          >
            You need to Login First
          </Button>
          <DraftRecap />
        </>
      )}
      {user?.email && (
        <>
          {/* <ScrollView
            style={{ zIndex: 0, elevation: 0, backgroundColor: "#4169e1" }}
          >
            <Button
              color="white"
              onPress={() => {
                auth.signOut();
                navigation.navigate("Login");
              }}
              title="LogOut"
            >
              SignOut
            </Button>
            <MyProfile user={user}/>
          </ScrollView> */}

          <HomeComponent user={user} />
        </>
      )}
      {/* <View style={{ height: 700 }}>
        <ScrollView
          // stickyHeaderIndices={[0]}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >

        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      ></View>
      <View
        style={{
          elevation: 3,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></View> */}
    </>
  );
};

export default firebaseApp;
