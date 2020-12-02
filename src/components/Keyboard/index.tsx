import React from "react";
import { useStore } from "effector-react";

import store from "../../model/index";
import { KEYBOARD } from "../../model/keyboard";
// TODO: try to use useList instead map

const rowStyle = {
  display: "flex",
};

const buttonStyle = {
  width: "33.3%",
  padding: "12px 0",
};

export default () => {
  const { autoPressedValues, isFillingValues } = useStore(store);
  const lastElement = autoPressedValues[autoPressedValues.length - 1] || {};

  return (
    <>
      {KEYBOARD.map((row, j) => (
        <div style={rowStyle}>
          {row.map((btn, i) => (
            <button
              onClick={() => btn.onClick()}
              disabled={isFillingValues}
              style={
                i === lastElement.i && j === lastElement.j && isFillingValues
                  ? {
                      ...buttonStyle,
                      borderColor: "red",
                      transition: "border-color .3s ease-out",
                    }
                  : buttonStyle
              }
              children={btn.value}
            />
          ))}
        </div>
      ))}
    </>
  );
};
