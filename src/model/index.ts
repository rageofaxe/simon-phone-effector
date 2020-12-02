import {
  createEffect,
  createEvent,
  createStore,
  combine,
  sample,
  Store,
  attach
} from "effector";

import { enablePadMapper, autoPressMapper } from "./helper";
import { $pressedValues } from "./keyboard";

// Events:
export const start = createEvent<void>();
export const restart = createEvent<void>();
export const nextLevel = createEvent<void>();

// Stores:
export const $currentLevelindex: Level = createStore(0);
export const $autoPressedValues: AutoPressedValues = createStore<string[]>([]);
export const $isFillingValues: Flag = createStore<boolean>(true);
export const $isStarted: Flag = createStore<boolean>(false);
export const $isNextLevel: Flag = createStore<boolean>(false);

export const $isEndAutoPressing = sample({
  source: $currentLevelindex,
  clock: $autoPressedValues,
  fn: (currentLevelindex, autoPressedValues) =>
    autoPressedValues.length < currentLevelindex + 2
});

// Effects:
export const tickFx = createEffect();
export const autoPressFx = attach({
  source: $currentLevelindex,
  effect: tickFx,
  mapParams: autoPressMapper
});
export const enablePadFx = attach({
  source: $currentLevelindex,
  effect: tickFx,
  mapParams: enablePadMapper
});

export default combine({
  $pressedValues,
  $autoPressedValues,
  $isFillingValues,
  $isStarted,
  $isNextLevel,
  $currentLevelindex
});

type Flag = Store<boolean>;
type Level = Store<number>;
type AutoPressedValues = Store<string[]>;
