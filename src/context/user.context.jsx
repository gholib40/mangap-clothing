import { createContext, useState,useEffect, useReducer } from "react";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducers.utils";

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : ()=> null
})

export const USER_ACTIONS_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}



const userReducer = (state,action) => {
    const {type,payload} = action
    switch(type){
        case USER_ACTIONS_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
            default: 
             throw new Error(`Unhandle Type ${state} in user reducer  `)
    }
}

const INITIAL_STATE = {
    currentUser : null
}

export const UserProvider = ({children})=> {
    // const [currentUser,setCurrentUser] = useState(null)
    const [{currentUser},dispatch] = useReducer(userReducer,INITIAL_STATE)
    const value = {currentUser}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
    
}

