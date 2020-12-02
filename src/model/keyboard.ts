import { createStore, createEvent } from "effector";

export const $pressedValues = createStore<string[]>([]);

const enter = createEvent<string>();
const pop = createEvent();
const reset = createEvent();

$pressedValues
  .on(enter, (state, payload) => [...state, payload])
  .on(pop, (state) => state.slice(0, -1))
  .on(reset, () => [])

export const KEYBOARD = [
  [
    { value: 1, onClick: () => enter("1") },
    { value: 2, onClick: () => enter("2") },
    { value: 3, onClick: () => enter("3") }
  ],
  [
    { value: 4, onClick: () => enter("4") },
    { value: 5, onClick: () => enter("5") },
    { value: 6, onClick: () => enter("6") }
  ],
  [
    { value: 7, onClick: () => enter("7") },
    { value: 8, onClick: () => enter("8") },
    { value: 9, onClick: () => enter("9") }
  ],
  [
    { value: "_", onClick: reset },
    { value: 0, onClick: () => enter("0") },
    { value: "<", onClick: pop }
  ]
];

export const $keyBoardDec = createStore(KEYBOARD);
