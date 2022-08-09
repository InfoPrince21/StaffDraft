import { View, Text, Button } from 'react-native'
import { useState, useEffect } from 'react'
import { collection, getDocs, updateDoc} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";



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

const firebase = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(firestore, "users")
  
  useEffect(() => {
    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef)
        // setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        // console.log(JSON.stringify(data.docs[0].document.data))
        setUsers(data)
        console.log(users)
    }
    const addUser = async () => {
        await setDoc(doc(firestore, "characters", "mario"), {
          age: "400",
        });
    }
    // getUsers()
    // addUser()
  }, [])
  
  const getData = async() => {
        const data = await getDocs(usersCollectionRef)
        setUsers(data.docs.map((doc) => ({ ...doc.data() })));
  };

  const addUserButton = async () => {

    await setDoc(doc(firestore, "users", "Mike" ), {
      age: "93",
      id: 12,
      name: "Bert"
    });
  };

  const addAutoIdUser = async () => {
    const newRef = doc(collection(firestore, "users"));
    await setDoc(newRef, {
        name: "Ronny",
        age: 125
    });
  };

  const updateUser = async () => {
    const userDoc = doc(firestore, "users", "Mike");
    await updateDoc(userDoc, {age: 10});
  };





  return (
    <View>
      <Text>firebase</Text>
      <Button title="Submit" onPress={updateUser} />
      {users.map((user) => {
        return (
          <View>
            <Text>Name: {user.name}</Text>
            <Text>Age: {user.age}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default firebase