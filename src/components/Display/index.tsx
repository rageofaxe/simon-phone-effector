import React from "react";

type DisplayProps = {
  pressedValues: string[];
};

export default ({ pressedValues }: DisplayProps) => {
  return <h1>{pressedValues.length === 0 ? "empty" : pressedValues}</h1>;
};
