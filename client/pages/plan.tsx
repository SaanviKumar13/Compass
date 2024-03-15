import { useRouter } from 'next/router';

const Plan: React.FC = () => {
  const router = useRouter();
  const { responseData } = router.query;

  return (
    <div className="w-full h-screen bg-white text-black">
      <h1 className="text-black font-bold text-6xl p-10">Your Plan</h1>
      <div className="p-10">
        <p>Response Data:</p>
        <pre>{responseData}</pre>
      </div>
    </div>
  );
};

export default Plan;
