import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="h-full min-h-screen p-20 w-full bg-gray-100">
      <h1 className="text-7xl text-black font-heading font-semibold mb-10">Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          href="/update-profile"
          className=" bg-[#FAF3F0] font-heading text-black shadow-2xl py-6 px-8 rounded-md block transition duration-300 ease-in-out"
        >
          <div className="flex justify-center items-center h-full">
            <h2 className="text-2xl font-semibold">Update Profile</h2>
          </div>
        </Link>
        <Link
          href="/view-course-plans"
          className=" bg-[#FAF3F0] font-heading text-black shadow-2xl py-6 px-8 rounded-md block transition duration-300 ease-in-out"
        >
          <div className="flex justify-center items-center h-full">
            <h2 className="text-2xl font-semibold">View Course Plans</h2>
          </div>
        </Link>
        <Link
          href="/view-tasks"
          className=" bg-[#FAF3F0] font-heading text-black shadow-2xl py-6 px-8 rounded-md block transition duration-300 ease-in-out"
        >
          <div className="flex justify-center items-center h-full">
            <h2 className="text-2xl font-semibold">View Tasks</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
