'use-client';

import { Signal, useSignal } from 'use-signals';

const counter = new Signal.State(0);

const SignalCounter = () => {
  const count = useSignal(counter);
  const inc = () => counter.set(counter.get() + 1);
  return (
    <>
      <div>Count: {count}</div>
      <button type='button' onClick={inc}>
        +1
      </button>
    </>
  );
};

export default SignalCounter;
