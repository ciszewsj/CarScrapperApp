import React, { useState } from "react";
import { View, PanResponder, StyleSheet, Text } from "react-native";

const SlideButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const panResponder = PanResponder.create({

    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return Math.abs(gestureState.dx) > 10; // minimalna odległość przesunięcia do aktywacji
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 0) {
        setIsEnabled(false); // przeciągnięcie w prawo
      } else {
        setIsEnabled(true); // przeciągnięcie w lewo
      }
    },
  });
  console.log(isEnabled);
  return (
    <View style={{ backgroundColor: "red", flex: 1 }} {...panResponder.panHandlers}>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#3f51b5",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },
  slideContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  slideButton: {
    backgroundColor: "#f44336",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  slideButtonText: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default SlideButton;
