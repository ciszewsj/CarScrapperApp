import * as React from "react";
import MainAppBottomTabNavigator from "./src/navigators/MainAppBottomTabNavigator";
import { useState } from "react";
import { GlobalUserContext, globalUsersSettings } from "./src/context/GlobalUserContext";


export default function App() {
  let [globalContext, setGlobalContext] = useState(globalUsersSettings);

  return (
    <GlobalUserContext.Provider value={[globalContext, setGlobalContext]}>
      <MainAppBottomTabNavigator />
    </GlobalUserContext.Provider>
  );
}
