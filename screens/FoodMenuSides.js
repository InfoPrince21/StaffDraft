import { FlatList, Pressable, Text, View, Modal, StyleSheet,Image } from "react-native";
import { Tile, Card, Button, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { useState, useEffect } from "react";

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "key7CvA4nWviUYLcP" }).base(
  "appNkVJPf68j1Oavd"
);
const menuListBase = base("Food Menu");

const FoodMenuSides = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [menu, setMenu] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    const fetchMenuList = async () => {
      const records = await menuListBase
        .select({
          view: "Sides",
        })
        .firstPage();
        const miniRecords = records.map((record) => ({
          id: record.id,
          fields: record.fields,
        }));
        setMenu(miniRecords);
        // console.log(JSON.stringify(miniRecords));
    //   const miniRecords = records.map((record) => ({
    //     id: record.id,
    //     fields: record.fields,
    //   }));
    //   setMenu(miniRecords);
    //   console.log(JSON.stringify(menu))
      //   return miniRecords;
    };
    fetchMenuList();
  }, []);

  const renderDirectoryItem = ({ item: menuItem }) => {
    return (
      <>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image style={styles.logo} source={{ uri: imgUrl }} />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close Image</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          onPress={() => {
            setModalVisible(true);
            setImgUrl(menuItem.fields.imageUrl);
          }}
        >
          <Card>
            <Card.Title>{menuItem.fields.name}</Card.Title>
            <Card.Divider />
            <Text>{menuItem.fields.Description}</Text>
          </Card>
        </Pressable>
      </>
    );
  };
  return (
      <FlatList
        data={menu}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
    width: "100%",
    margin: 100,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 30,
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
    width: "100%",
    height: 200,
  },
});

export default FoodMenuSides;
