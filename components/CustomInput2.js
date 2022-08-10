import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput2 = ({value, setValue, placeholder, secureTextEntry }) => {
  return (
    <>
      <View
        style={styles.container}
      >
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {/* {error && (
        <Text style={{ color: "red", alignSelf: "center" }}>
          {error.message || "Error"}
        </Text>
      )} */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "70%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    backgroundColor:"black"
  },
});

export default CustomInput2;
