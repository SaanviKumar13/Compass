import { ReactElement } from 'react';

interface CardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className="mt-6 w-96 bg-blue-300 p-10 rounded-3xl">
      <div>
        {icon}
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <h1>{description}</h1>
      </div>
      <div className="pt-0">
        <a href="#" className="inline-block">
          <button className="flex items-center gap-2 hover:text-purple-400">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}
