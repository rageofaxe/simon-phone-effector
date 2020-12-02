import {
  createEffect,
  createEvent,
  createStore,
  combine,
  sample,
  Effect,
  attach
} from "effector";

import { PadButton } from './types';
import { enablePadMapper, autoPressMapper } from "./helper";
import { $pressedValues } from "./keyboard";

// Events:
export const start = createEvent();
export const restart = createEvent();
export const nextLevel = createEvent();

// Stores:
export const $currentLevelindex = createStore(0);
export const $autoPressedValues = createStore<PadButton[]>([]);
export const $isFillingValues = createStore<boolean>(true);
export const $isStarted = createStore<boolean>(false);
export const $isNextLevel = createStore<boolean>(false);

export const $isEndAutoPressing = sample({
  source: $currentLevelindex,
  clock: $autoPressedValues,
  fn: (currentLevelindex, autoPressedValues) =>
    autoPressedValues.length < currentLevelindex + 2
});

// Effects:
export const tickFx = createEffect<any, PadButton>();
export const autoPressFx: Effect<any, PadButton> = attach({
  source: $currentLevelindex,
  effect: tickFx,
  mapParams: autoPressMapper
});
export const enablePadFx: Effect<boolean, any> = attach({
  source: $currentLevelindex,
  effect: tickFx,
  mapParams: enablePadMapper
});

export default combine({
  pressedValues: $pressedValues,
  autoPressedValues: $autoPressedValues,
  isFillingValues: $isFillingValues,
  isStarted: $isStarted,
  isNextLevel: $isNextLevel,
  currentLevelindex: $currentLevelindex
});
