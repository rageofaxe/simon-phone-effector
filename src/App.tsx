import React from "react";

import { useStore, useList } from "effector-react";

import "./model/init";
import store, { restart, nextLevel, autoPressFx } from "./model/index";
import { KEYBOARD } from "./model/keyboard";

export default () => {
  const {
    $pressedValues,
    $autoPressedValues,
    $isFillingValues,
    $isStarted,
    $isNextLevel
  } = useStore(store);

  const lastElement = $autoPressedValues[$autoPressedValues.length - 1] || {};

  return (
    <div>
      <br />
      {$pressedValues.length === 0 ? "empty" : $pressedValues}
      {KEYBOARD.map((row, j) => (
        <>
          <br />
          {row.map((btn, i) => (
            <button
              onClick={btn.onClick}
              disabled={$isFillingValues}
              style={
                i === lastElement.i && j === lastElement.j && $isFillingValues
                  ? {
                      borderColor: "red",
                      transition: "border-color .3s ease-out"
                    }
                  : {}
              }
              children={btn.value}
            />
          ))}
        </>
      ))}
      <br />
      {!$isStarted && <button onClick={autoPressFx}>start</button>}
      {!$isFillingValues && !$isNextLevel && (
        <button onClick={restart}>restart</button>
      )}
      {$isNextLevel && <button onClick={nextLevel}>next level</button>}
    </div>
  );
};
