import React from "react";

import { KEYBOARD } from "../../model/keyboard";
import { PadButton } from "../../model/types";
// TODO: try to use useList instead map

type Keyboard = {
    highlightedButton: PadButton,
    filledDisplay: boolean
}

const rowStyle = {
  display: "flex",
};

const buttonStyle = {
  width: "33.3%",
  padding: "12px 0",
};

export default (props: Keyboard) => {
  const { highlightedButton, filledDisplay } = props;

  return (
    <>
      {KEYBOARD.map((row, j) => (
        <div style={rowStyle}>
          {row.map((btn, i) => (
            <button
              onClick={() => btn.onClick()}
              disabled={filledDisplay}
              style={
                i === highlightedButton.i && j === highlightedButton.j && filledDisplay
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
