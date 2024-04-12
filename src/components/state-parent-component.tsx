'use client';

import { useState } from 'react';

import StateChildComponent from './state-child-component.js';

const StateParentComponent = () => {
  const [count, setCount] = useState(0);

  const inc = () => setCount(count + 1);

  return <StateChildComponent count={count} onClick={inc} />;
};

export default StateParentComponent;
