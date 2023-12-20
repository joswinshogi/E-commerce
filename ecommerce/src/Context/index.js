'use client'


import { createContext, useState } from "react";


export const GlobalContext = createContext(null)


import React from 'react'

const GlobalState = ({children}) => {

  const[showNavModal,setShowNavModal] = useState(false)
  return (
    <GlobalContext.Provider value={{showNavModal,setShowNavModal}}>{children}</GlobalContext.Provider>


  )
}

export default GlobalState