import React from "react";
import { useStore } from "effector-react";

import "./model/init";
import store from "./model/index";
import ActionButton from './components/ActionButton';
import Display from './components/Display';
import Keyboard from './components/Keyboard';

export default () => {
  const { pressedValues } = useStore(store);

  return (
    <div>
      <Display pressedValues={pressedValues} />
      <Keyboard />
      <ActionButton />
    </div>
  );
};




