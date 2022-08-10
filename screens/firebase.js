import { View, Text, Button, TextInput, ScrollView } from "react-native";
import { Card } from "react-native-elements";
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
import { useAuthState } from "react-firebase-hooks/auth";
import { RadioButtonItem } from "react-native-paper/lib/typescript/components/RadioButton/RadioButtonItem";
import { useNavigation } from "@react-navigation/native";
import MyProfile from "./MyProfile";
import CustomInput from "../components/CustomInput";
import firebase from "firebase/app";
import { GiftedChat } from "react-native-gifted-chat/lib/GiftedChat";

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
      user: user?.email,
      id: msgLenth + 1,
    });
    getMessages();
    setMessageId(messages.length);
    setText("")
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
      {/* {user?.email && (
        <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
          <Button
            onPress={() => {
              auth.signOut();
              navigation.navigate("Login");
            }}
            title="LogOut"
          />
        </View>
      )} */}
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          elevation: 1,
        }}
      >
        <Text>Welcome {user?.email}</Text>
        <Text>Welcome {msgLenth}</Text>

        {/* <Text>{messages}</Text> */}

        {/* {user?.email && <MyProfile user={user} />} */}

        {/* <TextInput onChangeText={(value) => setEmail(value)} value={email} />
      <TextInput onChangeText={(value) => setPassword(value)} value={password} /> */}
        {/* <Button title="Sign In" onPress={signIn} />
      {users.map((user) => {
        return (
          <View>
            <Text>Name: {user.name}</Text>
            <Text>Age: {user.age}</Text>
          </View>
        );
      })} */}
        <Card>
          <ScrollView style={{ alignSelf: "flex-end" }}>
            {messages.length > 0 &&
              messages.map((msg, index) => {
                return (
                  <>
                    <Text>{msg.text}</Text>
                  </>
                );
              })}
          </ScrollView>
        </Card>
      </View>

      <View
        style={{
          elevation: 3,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 2,
        }}
      >
        <CustomInput
          placeholder="Enter Message Here"
          value={text}
          setValue={setText}
        />
        <Button onPress={(user) => addChatText(user)} title="Add Message" />
      </View>
    </>
  );
};

export default firebaseApp;
