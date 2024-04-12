'use client';

import { useState } from 'react';

const StateCounter = () => {
  const [count, setCount] = useState(0);

  const inc = () => setCount(+1);
  return (
    <>
      <div>useState ount: {count}</div>
      <button type='button' onClick={inc} className='bg-blue-500 rounded px-4 py-2 text-white font-medium'>
        Update count
      </button>
    </>
  );
};

export default StateCounter;
