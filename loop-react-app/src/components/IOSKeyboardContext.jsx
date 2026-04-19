import React, { createContext, useContext, useState } from 'react';

const IOSKeyboardContext = createContext();

export const IOSKeyboardProvider = ({ children }) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const showKeyboard = () => setKeyboardVisible(true);
  const hideKeyboard = () => setKeyboardVisible(false);

  return (
    <IOSKeyboardContext.Provider value={{ isKeyboardVisible, showKeyboard, hideKeyboard }}>
      {children}
    </IOSKeyboardContext.Provider>
  );
};

export const useIOSKeyboard = () => useContext(IOSKeyboardContext);
