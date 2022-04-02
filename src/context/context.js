import React, { useState, createContext } from "react";

// make a new context
export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: isOpen,
        toggleMenu: handleOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
