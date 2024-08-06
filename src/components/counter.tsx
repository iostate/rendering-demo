'use client';

import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <p>{counter}</p>
    </>
  );
}
