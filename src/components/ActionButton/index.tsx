import React from "react";
import { Effect } from "effector";

type ActionButton = {
  filledDisplay: boolean;
  isStarted: boolean;
  isNextLevel: boolean;
  restart: () => void;
  nextLevel: () => void;
  autoPressFx: Effect<any, any, any>;
};

const buttonStyle = {
  width: "33.3%",
  padding: "12px 0",
};

const actionButtonStyle = {
  ...buttonStyle,
  width: "100%",
};

export default (props: ActionButton) => {
  const {
    filledDisplay,
    isStarted,
    isNextLevel,
    restart,
    nextLevel,
    autoPressFx,
  } = props;

  return (
    <>
      {!isStarted && (
        <button onClick={autoPressFx} style={actionButtonStyle}>
          start
        </button>
      )}
      {!filledDisplay && !isNextLevel && (
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
