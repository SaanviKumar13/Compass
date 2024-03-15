import Login from '@/components/Login';
import { useState } from 'react';

export default function Home() {
  const isLogged = useState(false);
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Login />
    </div>
  );
}
