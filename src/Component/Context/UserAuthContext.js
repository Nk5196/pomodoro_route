import { createContext, useContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
 
    function signup(email, password){
        return 
    }
    return (
    <userAuthContext.Provider value={}>{children}</userAuthContext.Provider>
  )
}

export function useUserAuth(){
    return useContext(userAuthContext);
};
