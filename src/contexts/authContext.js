import React, { useContext, createContext, useEffect, useState } from "react";
import { auth, signInWithGoogle } from "../firebase";


const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
 }

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    function signup(email, password, userName, firstName, lastName){
        return signInWithGoogle().then((res) => console.log(currentUser)).then(
            console.log(currentUser)
        )
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
           setCurrentUser(user);
           setLoading(false);
        });
  
        return unsubscribe;
    }, []);

     const value = {
        currentUser,
        signup,
    };

    return (
        <div>
           <AuthContext.Provider value={value}>
              {!loading && children}
           </AuthContext.Provider>
        </div>
     );
}