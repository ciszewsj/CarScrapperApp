import { createContext } from "react";


export let globalUsersSettings = (token, email, name, userId) => {
    return { "token": token, "email": email, "name": name, "userID": userId };
  }
;
export const GlobalUserContext = createContext(globalUsersSettings());
