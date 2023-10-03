import React, { createContext, useState } from "react"
// import { Navigate } from "react-router-dom"
let AuthContext = createContext({})

export function AuthProvide(cheldren){
let [auth, setAuth] = useState({});

return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {cheldren}
    </AuthContext.Provider>
    
)
}

export default AuthContext;






