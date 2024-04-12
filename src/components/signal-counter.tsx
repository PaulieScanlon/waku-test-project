'use client';

import { Signal, useSignal } from 'use-signals';

const counter = new Signal.State(0);

const SignalCounter = () => {
  const count = useSignal(counter);
  const inc = () => counter.set(counter.get() + 1);
  return (
    <>
      <div>useSignal Count: {count}</div>
      <button type='button' onClick={inc} className='bg-blue-500 rounded px-4 py-2 text-white font-medium'>
        Update count
      </button>
    </>
  );
};

export default SignalCounter;
