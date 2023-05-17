import { Text, View } from "react-native";
import InputText from "./buttons/InputText";
import MainButton from "./buttons/MainButton";
import TwoValuesSelect from "./TwoValuesSelect";
import SecondaryButton from "./buttons/SecondaryButton";
import ModalElement from "./Modal";

let BoardView = ({ both, onPressLeft, onPressRight }) => {
  return (
    <ModalElement>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", width: 340 }}>
        <Text style={{ fontSize: 24 }}>Filter</Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={{ fontSize: 16 }}>Product name</Text>
        <InputText />
        <Text style={{ fontSize: 16 }}>Category</Text>
        <InputText />
        <Text>Price</Text>
        <TwoValuesSelect />
      </View>
      <View style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: both === false ? "center" : "space-between",
        width: 300,
      }}>
        {both !== false && <SecondaryButton onPress={onPressLeft}>Create</SecondaryButton>}
        <MainButton onPress={onPressRight}>Filter</MainButton>
      </View>
    </ModalElement>
  );

};
export default BoardView;
