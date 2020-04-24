import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";

import { createDndContext } from "react-native-easy-dnd";

const { Provider, Droppable, Draggable } = createDndContext();

const img =
  "https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider>
        <View>
          <Draggable
            onDragStart={() => {
              console.log("Started draggging");
            }}
            onDragEnd={() => {
              console.log("Ended draggging");
            }}
            payload="my-draggable-item"
          >
            {({ viewProps }) => {
              return (
                <Animated.View
                  {...viewProps}
                  style={[
                    viewProps.style,
                    { width: 200, height: 200, backgroundColor: "red" },
                  ]}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    Drag me
                  </Text>
                </Animated.View>
              );
            }}
          </Draggable>
          <Droppable
            onEnter={() => {
              console.log("Draggable entered");
            }}
            onLeave={() => {
              console.log("Draggable left");
            }}
            onDrop={({ payload }) => {
              console.log(
                "Draggable with the following payload was dropped",
                payload
              );
            }}
          >
            {({ active, viewProps }) => {
              return (
                <Animated.View
                  {...viewProps}
                  style={[
                    {
                      width: 300,
                      height: 200,
                      backgroundColor: active ? "blue" : "green",
                    },
                    viewProps.style,
                  ]}
                >
                  <Text style={{ fontWeight: "bold", color: "white" }}>
                    Drop here
                  </Text>
                </Animated.View>
              );
            }}
          </Droppable>
        </View>
      </Provider>
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
