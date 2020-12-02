import React from "react";
import { useStore } from "effector-react";

import store, { restart, nextLevel, autoPressFx } from "../../model/index";

const buttonStyle = {
    width: "33.3%",
    padding: "12px 0",
};

const actionButtonStyle = {
    ...buttonStyle,
    width: "100%",
  };

export default () => {
    const { isFillingValues, isStarted, isNextLevel } = useStore(store);
  
    return (
      <>
        {!isStarted && (
          <button onClick={autoPressFx} style={actionButtonStyle}>
            start
          </button>
        )}
        {!isFillingValues && !isNextLevel && (
          <button onClick={() => restart()} style={actionButtonStyle}>
            restart
          </button>
        )}
        {isNextLevel && (
          <button onClick={() => nextLevel()} style={actionButtonStyle}>
            next level
          </button>
        )}
      </>
    );
  };