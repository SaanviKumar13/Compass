import { Card } from '@/components/Card';

export default function GetStarted() {
  const features = [
    {
      title: 'Course Plan',
      icon: 'course-plan-icon', // Add appropriate icon path or class name
      description: 'Create and manage your course plan with ease.',
    },
    {
      title: 'Resume Builder',
      icon: 'resume-builder-icon', // Add appropriate icon path or class name
      description: 'Build and customize your resume effortlessly.',
    },
    {
      title: 'Tasks',
      icon: 'tasks-icon', // Add appropriate icon path or class name
      description: 'Organize your tasks and stay on top of your work.',
    },
    {
      title: 'Profile',
      icon: 'profile-icon', // Add appropriate icon path or class name
      description: 'Manage your profile information and settings.',
    },
  ];

  return (
    <div className="w-full h-screen bg-white">
      <h1 className="">Get Started</h1>
      <div className="flex row-span-2 gap-20 m-20">
        {features.map((feature, index) => (
          <Card key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
}
