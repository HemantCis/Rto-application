"use client"

import React, {
    createContext,
    useState,
  } from "react";

const loginContext = createContext(null);
export { loginContext };

const GlobalContext = ({ children }) => {
    const [saveStatus, setSaveStatus] = useState(false);
    const [erroObj, setErrorObj] = useState({});

    const contextValue = {
        saveStatus, setSaveStatus,
        erroObj, setErrorObj
    };

return (
    <loginContext.Provider value={contextValue}>
        {children}
    </loginContext.Provider>
    );
    
}

export default GlobalContext;