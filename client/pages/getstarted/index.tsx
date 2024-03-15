import { Card } from '@/components/Card';
import { CircleUserRound, FileText, Library, ListTodo } from 'lucide-react';

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
      description: 'Organize your tasks and stay on top of your work.',
      href: '/tasks',
    },
    {
      title: 'Profile',
      icon: <CircleUserRound className="w-20 h-20 p-2" />,
      description: 'Manage your profile information and settings.',
      href: '/profile',
    },
  ];

  return (
    <div className="w-full h-screen bg-stone-50">
      <h1 className="text-c font-bold text-6xl p-10">Get Started</h1>
      <div className="flex row-span-2 gap-20 m-10">
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
