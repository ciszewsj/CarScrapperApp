import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputText = ({ variant, value, onChange, isSecure }) => {

  return (
    <TextInput
      style={{ ...styles.input, ...(variant === "small" && styles.small) }}
      onChangeText={onChange}
      value={value}
      secureTextEntry={isSecure}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 380,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(221, 38, 38, 0.21)",
    backgroundGradient: "linear-gradient(91.91deg, rgba(255, 255, 255, 0.7) 0%, rgba(166, 223, 255, 0.7) 28.42%, rgba(96, 255, 150, 0.7) 100%)",
  },
  small: {
    width: 140,
  },
});

export default InputText;
