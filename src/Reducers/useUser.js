import React, { useContext, createContext, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState
    case "increment":
      return { ...state, count: state.count + 1 }
    case "decrement":
      return { ...state, count: state.count - 1 }
    case "pushData":
      return { ...state, hasPermission: [...state.hasPermission, ...action.data] }
    default:
      return state
  }
}

const initialState = {
  count: 0,
  isAdmin: false,
  hasPermission: [1, 2, 3, 4, 5]
}


const Context = createContext()

export const useUser = () => useContext(Context)

export const UserCtxProvider = ({ children }) => {
  const [userStore, userDispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ userStore, userDispatch }}>
      {children}
    </Context.Provider>
  )
}
