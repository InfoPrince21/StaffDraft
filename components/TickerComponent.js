import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import TextTicker from "react-native-text-ticker";

export default class Example extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TextTicker
          style={{ fontSize: 15 }}
          duration={21000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={0}
        >
          ATTENTION!!!!!!! Bonus Week: Knowledge points are DOUBLE. Bonus Week:
          Knowledge points are DOUBLE
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
