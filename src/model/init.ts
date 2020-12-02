import { forward, guard, sample } from "effector";
// import { enablePadMapper, autoPressMapper } from "./helper";
import { $pressedValues } from "./keyboard";
import {
  $autoPressedValues,
  $isFillingValues,
  $isStarted,
  $isEndAutoPressing,
  $currentLevelindex,
  $isNextLevel,
  restart,
  nextLevel,
  autoPressFx,
  enablePadFx,
  tickFx
} from "./index";

// Effects:
tickFx.use((x) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(x);
    }, 500);
  });
});

// Stores:
$autoPressedValues
  .on(autoPressFx.done, (state, { result }) => [...state, result])
  .reset(restart);

$isFillingValues.on(enablePadFx.done, () => false).reset(restart);

$isStarted.on(autoPressFx, () => true).reset(restart);

$pressedValues.reset(restart);

$currentLevelindex.on(nextLevel, (state) => state + 1);

// FIXME: guards possible can be replaced to patronum's condition
// Highlight last autopressed button:
guard({
  source: $isEndAutoPressing,
  filter: (x) => !x,
  target: enablePadFx
});

// Auto pressing loop
guard({
  source: $autoPressedValues,
  filter: $isEndAutoPressing,
  target: autoPressFx
});

// Forwarding of nextLevel event
forward({
  from: nextLevel,
  to: restart
});

// Verifying input
sample({
  source: $autoPressedValues,
  clock: $pressedValues,
  target: $isNextLevel,
  fn: (autoPressedValues, dialPad) =>
    dialPad.length > 0 &&
    dialPad.join("") === autoPressedValues.map((x) => x.value).join("")
});
