import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Here" style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 30,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5
    },
    input: {},
})

export default CustomInput