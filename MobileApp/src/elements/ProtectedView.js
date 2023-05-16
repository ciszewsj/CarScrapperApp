import { useContext } from "react";
import { GlobalUserContext } from "../context/GlobalUserContext";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

let ProtectedView = ({ logged, children }) => {
  const [auth, setAuth] = useContext(GlobalUserContext);
  const navigation = useNavigation();

  useEffect(() => {
    switch (logged) {
      case false : {
        if (auth.token) {
          navigation.reset({
            index: 0,
            routes: [{ name: "Main" }],
          });
        }
        break;
      }
      case true:
        if (!auth.token) {
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
          break;
        }
    }

  }, [auth]);

  return (
    <>
      {children}
    </>
  );
};

export default ProtectedView;
