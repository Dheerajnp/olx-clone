import { createContext, useContext, useEffect, useState } from "react";
import { addDocument,onAuthChangeFunction,isUserExist } from './firebaseFunctions';
import { auth } from "./config";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {

  const [userData, setUserData] = useState(null);

  const userGlobal = (data) => {
    setUserData(data);
  }

  useEffect(() => {
    onAuthChangeFunction(setUserData)
  }, [])

  return (
    <FirebaseContext.Provider value={{  addDocument, userGlobal, userData, setUserData,isUserExist  }}>
      {children}
    </FirebaseContext.Provider>
  );
};


export const useFirebaseContext = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebaseContext must be used within a FirebaseProvider");
  }
  return context;
};