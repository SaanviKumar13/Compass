import Link from 'next/link';
import { ReactElement } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  icon: ReactElement;
  title: string;
  description: string;
  href: string;
}

export function Card({ icon, title, description, href }: CardProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="mt-6 w-96 shadow-lg bg-[#FAF3F0] text-black p-10 rounded-3xl">
      <div>
        {icon}
        <h5 className="mb-2 text-xl font-heading font-semibold">{title}</h5>
        <h1>{description}</h1>
      </div>
      <div className="pt-0">
        <Link href={href} className="flex items-center mt-6 gap-2 hover:font-bold">
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
        </Link>
      </div>
    </motion.div>
  );
}
