import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [isHidden, setIsHidden] = useState(false);
  const [score, setScore] = useState({
    player: 0,
    computer: 0,
  });
  

  return (
    <AppContext.Provider
      value={{ hidden: [isHidden, setIsHidden], scoreBoard: [score, setScore] }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
