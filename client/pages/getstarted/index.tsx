import { Card } from '@/components/Card';
import { CircleUserRound, FileText, Library, ListTodo } from 'lucide-react';
import Head from 'next/head';

export default function GetStarted() {
  const features = [
    {
      title: 'Course Plan',
      icon: <Library className="w-20 h-20 p-2" />,
      description: 'Create and manage your course plan with ease.',
      href: '/getstarted/learn',
    },
    {
      title: 'CV Crafting Tool',
      icon: <FileText className="w-20 h-20 p-2" />,
      description: 'Build and customize your resume effortlessly.',
      href: '/getstarted/resume',
    },
    {
      title: 'Tasks',
      icon: <ListTodo className="w-20 h-20 p-2" />,
      description: 'Because learning is best done by working.',
      href: '/getstarted/tasks',
    },
    {
      title: 'Profile',
      icon: <CircleUserRound className="w-20 h-20 p-2" />,
      description: 'Manage your profile information and settings.',
      href: '/profile',
    },
  ];

  return (
    <div className="w-full h-full bg-stone-50">
      <Head>
        <title>Compass - Get Started</title>
      </Head>
      <h1 className="text-black font-heading font-bold text-6xl p-10 px-60">Get Started</h1>
      <div className="grid grid-cols-2 px-60 py-10">
        {features.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            href={feature.href}
          />
        ))}
      </div>
    </div>
  );
}
