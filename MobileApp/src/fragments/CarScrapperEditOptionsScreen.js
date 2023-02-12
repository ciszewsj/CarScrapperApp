import { useContext, useState } from "react";
import SelectScrollView from "../elements/SelectScrollView";
import { GlobalUserContext } from "../context/GlobalUserContext";
import ConfigMainView from "../elements/config/ConfigMainView";

let CarScrapperEditOptionsScreen = ({ navigation, route: { params } }) => {
  let [context, setContext] = useContext(GlobalUserContext);
  let items = context.cars;

  let [view, setView] = useState(0);
  let [carInfo, setCarInfo] = useState({ ...params });

  return (
    <>
      {view === 0 ?
        <ConfigMainView
          carInfoHook={[carInfo, setCarInfo]}
          globalContext={[context, setContext]}
          navigation={navigation}
          setView={setView} />
        :
        view === 1 ?
          <SelectScrollView
            itemList={items.map((item) => {
              return item["name"];
            })}
            selectedItemsHook={[carInfo["brands"], (e) => {
              carInfo["brands"] = e;
              setCarInfo({ ...carInfo });
            }]}
            back={() => setView(0)} />
          :
          <SelectScrollView
            itemList={
              [].concat(items.map((item) => {
                return item["models"];
              })).flat().filter(el => {
                return el !== undefined;
              })
            }
            selectedItemsHook={[carInfo["models"], (e) => {
              carInfo["models"] = e;
              setCarInfo({ ...carInfo });
            }]}
            back={() => setView(0)} />

      }
    </>
  );
};

export default CarScrapperEditOptionsScreen;
