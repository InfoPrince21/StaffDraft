import QuizeSingleChoice from "react-native-react-native-quiz-single-choice";
import { useState } from "react";
import { Modal, View, Text, StyleSheet, Pressable } from "react-native";
import { Card } from "react-native-elements";
import TimerComponent from "../components/TimerComponent";

const QuizScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [endResults, setEndResults] = useState([
    {
      answer: "2oz, 4oz and 6oz",
      isRight: false,
      question: "What sizes do we offer Wagyu?",
      response: "4oz, 6oz and 8oz",
    },
    {
      answer: "French",
      isRight: false,
      question: "Which dressing do we not carry?",
      response: "Ranch",
    },
    {
      answer: "Au jus and Creamy Horseradish",
      isRight: false,
      question: "What Sauces Come with Prime Rib?",
      response: "None",
    },
  ]);
  const data = [
    {
      question: "What sizes do we offer Wagyu?",
      optionA: "4oz, 6oz and 8oz",
      optionB: "2oz, 4oz and 6oz",
      optionC: "4oz and 6oz",
      optionD: "6oz and 8oz",
      answer: "2oz, 4oz and 6oz",
    },
    {
      question: "What Sauces Come with Prime Rib?",
      optionA: "None",
      optionB: "Bernaise and Peppercorn Reduction",
      optionC: "Truffule Merlot and Horseradish",
      optionD: "Au jus and Creamy Horseradish",
      answer: "Au jus and Creamy Horseradish",
    },
    {
      question: "Which dressing do we not carry?",
      optionA: "Ranch",
      optionB: "Italian",
      optionC: "French",
      optionD: "Bleu Cheese",
      answer: "French",
    },
  ];
  return (
    <>
      <View style={{flex:0,paddingTop:5, alignItems:'center',backgroundColor: "#61dafb" }}>
        <TimerComponent isPlaying={isPlaying} />
      </View>
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
            <Text style={styles.modalText}>Results</Text>
            {endResults.map((result) => (
              <>
                <Card>
                  <Text>
                    Question: <Text>{result.question}</Text>
                  </Text>
                  <Text>
                    Your Answer: <Text>{result.answer}</Text>
                  </Text>
                  <Text>
                    Result:{" "}
                    <Text>
                      {" "}
                      {result.isRight === true ? "Correct" : "Wrong"}
                    </Text>
                  </Text>
                </Card>
              </>
            ))}
            {/* <Text style={styles.modalText}>{JSON.stringify(endResults)}</Text> */}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.textStyle}>Finished</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <QuizeSingleChoice
        containerStyle={{ backgroundColor: "#61dafb", paddingTop: 30 }}
        questionTitleStyle={{ fontSize: 22, color: "#FFF" }}
        responseStyle={{
          borderRadius: 15,
        }}
        responseTextStyle={{ fontSize: 12, fontWeight: "normal" }}
        selectedResponseStyle={{
          borderRadius: 15,
          backgroundColor: "#fa5541",
        }}
        selectedResponseTextStyle={{
          fontSize: 14,
          fontWeight: "normal",
        }}
        responseRequired={true}
        nextButtonText={"Next"}
        nextButtonStyle={{ backgroundColor: "#06d755" }}
        nextButtonTextStyle={{ color: "#FFF" }}
        prevButtonText={"Prev"}
        prevButtonStyle={{ backgroundColor: "#fa5541" }}
        prevButtonTextStyle={{ color: "#FFF" }}
        endButtonText={"Done"}
        endButtonStyle={{ backgroundColor: "#000" }}
        endButtonTextStyle={{ color: "#FFF" }}
        buttonsContainerStyle={{ marginTop: "auto" }}
        onEnd={(results) => {
          console.log(results);
          setModalVisible(true);
          setEndResults(results);
          setIsPlaying(false);
        }}
        data={data}
      />
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
    width: "100%",
    margin: 0,
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
    width: "100%",
    height: 200,
  },
});

export default QuizScreen;
