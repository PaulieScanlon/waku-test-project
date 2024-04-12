'use client';

import { Signal, useSignal } from 'use-signals';

import SignalChildComponent from './signal-child-component.js';

const counter = new Signal.State(0);

const StateParentComponent = () => {
  const count = useSignal(counter);

  const inc = () => counter.set(counter.get() + 1);

  return <SignalChildComponent count={count} onClick={inc} />;
};

export default StateParentComponent;
