import Login from '@/components/Login';
import Head from 'next/head';
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Head>
        <title>Compass</title>
      </Head>
      <Login />
    </div>
  );
}
