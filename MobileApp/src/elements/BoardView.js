import { Text, View } from "react-native";
import InputText from "./buttons/InputText";
import MainButton from "./buttons/MainButton";
import TwoValuesSelect from "./TwoValuesSelect";
import SecondaryButton from "./buttons/SecondaryButton";
import ModalElement from "./Modal";

let BoardView = ({ both, onPressLeft, onPressRight, setFilters, filters, withPrice }) => {
  return (<ModalElement>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", width: 340 }}>
      <Text style={{ fontSize: 24 }}>Filter</Text>
    </View>
    <View style={{ flex: 2 }}>
      <Text style={{ fontSize: 16 }}>Product name</Text>
      <InputText value={filters.name} onChange={e => setFilters({ ...filters, "name": e })} />
      <Text style={{ fontSize: 16 }}>Category</Text>
      <InputText value={filters.category} onChange={e => setFilters({ ...filters, "category": e })} />
      {withPrice &&
        <>
          <Text>Price</Text>
          <TwoValuesSelect leftValue={filters.priceFrom} setLeftValue={e => setFilters({ ...filters, "priceFrom": e })}
                           rightValue={filters.priceTo}
                           setRightValue={e => setFilters({ ...filters, "priceTo": e })} />
        </>
      }
    </View>
    <View style={{
      flex: 1, flexDirection: "row", justifyContent: both === false ? "center" : "space-between", width: 300,
    }}>
      {both !== false && <SecondaryButton onPress={onPressLeft}>Create</SecondaryButton>}
      <MainButton onPress={onPressRight}>Filter</MainButton>
    </View>
  </ModalElement>);

};
export default BoardView;
