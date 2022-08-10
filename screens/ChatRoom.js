import { Text, View, ScrollView } from "react-native";
import { Avatar, Card, ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { selectStaffByEmail } from "../features/staff/staffSlice";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

initializeApp(firebaseConfig);
const firestore = getFirestore();
const auth = getAuth(initializeApp(firebaseConfig));

const Header = () => {
  return (
    <Card>
      <Card.Title>Stats Header</Card.Title>
      <Card.Divider />
      <Text style={{ margin: 10 }}>"Stats Header Info Will Go Here"</Text>
    </Card>
  );
};

const ChatScreen = () => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const auth = getAuth(initializeApp(firebaseConfig));
  const [user, loading, error] = useAuthState(auth);
  const staff = useSelector(selectStaffByEmail(user?.email));

  return (
    <ScrollView style={{ backgroundColor: "#040a2e" }}>
      {user && (
        <Card>
          <Card.Divider />
          <ListItem>
            <Avatar
              rounded
              source={{
                uri: staff.fields.image[0].url,
              }}
            />
            <ListItem.Content>
              <ListItem.Title>{staff.fields.name}</ListItem.Title>
              <ListItem.Subtitle>{user?.email}</ListItem.Subtitle>
              {messages &&
                messages.map((msg) => {
                  const { text, uid } = msg;
                  return <ListItem.Title key={msg.id}>{msg}</ListItem.Title>;
                })}
            </ListItem.Content>
          </ListItem>
        </Card>
      )}
    </ScrollView>
  );
};

export default ChatScreen;
