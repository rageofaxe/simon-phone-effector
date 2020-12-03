import React from "react";
import { useStore } from "effector-react";

import "./model/init";
import store, { restart, nextLevel, autoPressFx } from "./model/index";
import ActionButton from "./components/ActionButton";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

export default () => {
  const {
    pressedValues,
    autoPressedValues,
    filledDisplay,
    isStarted,
    isNextLevel,
  } = useStore(store);

  const highlightedButton =
    autoPressedValues[autoPressedValues.length - 1] || {};

  return (
    <div>
      <Display pressedValues={pressedValues} />
      <Keyboard
        highlightedButton={highlightedButton}
        filledDisplay={filledDisplay}
      />
      <ActionButton
        isStarted={isStarted}
        isNextLevel={isNextLevel}
        filledDisplay={filledDisplay}
        restart={restart}
        nextLevel={nextLevel}
        autoPressFx={autoPressFx}
      />
    </div>
  );
};
