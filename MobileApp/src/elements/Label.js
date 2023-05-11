import { StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

let Label = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["rgba(14, 114, 186, 0.61)", "rgba(207, 85, 237, 0.451429)", "rgba(11, 215, 191, 0.57)"]}

        style={{
          ...styles.itemCard, ...{
            height: 150,
            margin: 5,
            padding: 10,
            flexDirection: "row",
            borderStyle: "solid",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {props.children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemCard: {
    position: "relative",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(136, 43, 255, 0.43)",
  },
});

export default Label;
