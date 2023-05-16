import { Text, View } from "react-native";
import InputText from "./InputText";
import MainButton from "./buttons/MainButton";
import TwoValuesSelect from "./TwoValuesSelect";
import SecondaryButton from "./buttons/SecondaryButton";
import ModalElement from "./Modal";

let BoardView = ({ onPress }) => {
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
        justifyContent: "space-between",
        width: 300,
      }}>
        <SecondaryButton onPress={() => onPress(false)}>Save</SecondaryButton>
        <MainButton onPress={() => onPress(false)}>Filter</MainButton>
      </View>
    </ModalElement>
  );

};
export default BoardView;
