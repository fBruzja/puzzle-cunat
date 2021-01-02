import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import Playground from "./Playground";

export default function App() {

  return (
    <View style={styles.container}>
      <Playground />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
