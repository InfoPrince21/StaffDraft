import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import TextTicker from "react-native-text-ticker";

export default class Example extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TextTicker
          style={{ fontSize: 20 }}
          duration={12000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={0}
        >
          Super long piece of text is long. The quick brown fox jumps over the
          lazy dog.
        </TextTicker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
