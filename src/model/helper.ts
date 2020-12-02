import { KEYBOARD } from "./keyboard";
import { random } from "../utils";

export const enablePadMapper = () => true;
export const autoPressMapper = (_, currentLevelIndex) => {
  const i = random();
  const j = random();
  return {
    i,
    j,
    value: KEYBOARD[j][i].value,
    currentLevelIndex
  };
};
