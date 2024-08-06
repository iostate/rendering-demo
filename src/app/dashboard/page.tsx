'use client';

import { useState } from 'react';

export default function DashboardPage() {
  console.log('dashboard client component');
  const [name, setName] = useState('');

  return (
    <>
      <h1>Dashboard Page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}</p>
    </>
  );
}
