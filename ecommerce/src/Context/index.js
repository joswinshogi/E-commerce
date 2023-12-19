'use client'


import { createContext } from "react";


export const GlobalContext = createContext(null)


import React from 'react'

const GlobalState = ({children}) => {
  return (
    <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>


  )
}

export default GlobalState