import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  // const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <AppContext.Provider
      value={
        // game: [isVisible, setIsVisible],
        [isHidden, setIsHidden]
      }
    >
      {props.children}
    </AppContext.Provider>
  );
};
