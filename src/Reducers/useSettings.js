import React, { useReducer, useContext, createContext } from "react";

const reducer = (state, action) => {
  const { type } = action
  switch (type) {
    case "checkIsAdmin":
      return state.isAdmin
    case "toggleAdmin":
      return { ...state, isAdmin: !state.isAdmin }
    default:
      return state
  }
}

const Context = createContext(initialState)

export const useSettings = () => useContext(Context)

const initialState = {
  isAdmin: false,
  hasPermission: true
}



export const SettingsCtxProvider = ({ children }) => {
  const [settingStore, settingDispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ settingStore, settingDispatch }}>
      {children}
    </Context.Provider>
  )
}
