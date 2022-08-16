import React, { useRef, useEffect, useState } from "react";
import {
  Modal,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  View,
  Image
} from "react-native";
import CompleteFlatList from "react-native-complete-flatlist";


var Airtable = require("airtable");
var base = new Airtable({ apiKey: "key7CvA4nWviUYLcP" }).base(
  "appNkVJPf68j1Oavd"
);
const menuListBase = base("Food Menu");

const MenuDirectoryScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [menu, setMenu] = useState([]);
  const [imgUrl, setImgUrl] = useState("")
  const [itemInfo, setItemInfo] = useState();
  useEffect(() => {
    const fetchMenuList = async () => {
      const records = await menuListBase
        .select({
          view: "Everything",
        })
        .firstPage();
      const miniRecords = records.map((record) => ({
        name: record.fields.name,
        info: record.fields.Description,
        img: record.fields.imageUrl,
      }));
      setMenu(miniRecords);
    };
    fetchMenuList();
  }, []);

  const ref = useRef();
  const renderItem = ({ item, index }) => {
    // const data = item.cleanData ? item.cleanData : item;

    // console.log(
    //   "item (if search bar is not empty and prop highlightColor is not empty, item will contains extra data to enable highlight feature)",
    //   item
    // );
    // console.log(
    //   "cleanData (if search bar is not empty and prop highlightColor is not empty, cleanData will contain original data structure without extra data)",
    //   item.cleanData
    // );

    // console.log("this is index number : " + index);

    // console.log(data + " this is original data");

    return (
      <Pressable key={index}
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {setItemInfo(item.info);setModalVisible(true);setImgUrl(item.img)}}
      >
        <Text>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={styles.logo}
              source={{uri: imgUrl}}
            />
            <Text style={styles.modalText}>{itemInfo}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <SafeAreaView style={{ flex: 1 }}>
        <CompleteFlatList
          searchKey={["name"]}
          pullToRefreshCallback={() => console.log("refreshing")}
          data={menu}
          // renderSeparator={null}
          ref={ref}
          highlightColor="yellow"
          renderItem={renderItem}
        />
        <TouchableOpacity
          onPress={() => ref.current.clearSearch()}
          style={{ padding: 5 }}
        >
          <Text>Clear Search</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    margin: 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 0,
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: '100%',
    height: 200,
  },
});

export default MenuDirectoryScreen;
