import { KEYBOARD } from "./keyboard";

const random = (max = 3) => Math.floor(Math.random() * max);

export const enablePadMapper = () => true;
export const autoPressMapper = (_: any, currentLevelIndex: number) => {
  const i = random();
  const j = random();
  return {
    i,
    j,
    value: KEYBOARD[j][i].value,
    currentLevelIndex
  };
};
