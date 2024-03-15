import Head from 'next/head';
import React, { useState } from 'react';

interface FormData {
  topic: string;
  level: string | null;
}

const Learn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    topic: '',
    level: null,
  });

  const [responseData, setResponseData] = useState<any>(null);
  const handleLevelClick = (level: string) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      level: prevFormData.level === level ? null : level,
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const formatResponse = (response: string) => {
    const sections = response.split('**');
    return sections.map((section, index) => {
      if (index % 2 === 1) {
        return (
          <h2 key={index} className="text-2xl font-semibold mb-4">
            {section}
          </h2>
        );
      } else {
        const lines = section.split('*').filter(line => line.trim() !== '');
        return (
          <div key={index} className="">
            {lines.map((line, i) => (
              <p key={i} className="">
                {line.trim()}
              </p>
            ))}
          </div>
        );
      }
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const prompt = `Generate tasks for a programming project based on the following criteria:

    Topic: ${formData.topic}
    Difficulty Level: ${formData.level}
    
    Requirements:
    1. **Problem Statement:** Provide a clear description of the problem to be solved or the task to be accomplished.
    2. **Languages to Use:** Specify the programming languages allowed or required for implementing the solution.
    3. **Deadline:** Set a deadline for completing the tasks.
    4. **Solution Design:** Outline the approach or solution strategy for solving the problem.
    5. **Additional Instructions:** Any additional instructions or constraints for the tasks.
    
    Generate tasks that include problem statements, programming language requirements, deadlines, solution designs, and any additional instructions according to the specified topic and difficulty level.
    `;
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: formData.topic,
          prompt: prompt,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch Google Generative AI response');
      }
      const responseData = await response.json();
      setResponseData(responseData);
    } catch (error) {
      console.error('Error fetching Google Generative AI response:', error);
    }
  };

  const levels: string[] = ['beginner', 'intermediate', 'expert'];

  return (
    <div className="w-full h-full min-h-screen bg-stone-50 text-black">
      <Head>
        <title>Compass - Task Generator</title>
      </Head>
      <div className="">
        <h1 className="text-black font-bold font-heading text-6xl p-10"> What's your task for today?</h1>
        <form onSubmit={handleSubmit} className="p-10">
          <label htmlFor="topic" className="block text-lg font-semibold mb-2">
            Name your poison
          </label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="w-48 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#BEADFA]"
            required
          />
          <label className="block text-lg font-semibold mt-4 mb-2">Level</label>
          <div className="flex">
            {levels.map(level => (
              <div
                key={level}
                onClick={() => handleLevelClick(level)}
                className={`cursor-pointer rounded-md p-2 mr-4 ${
                  formData.level === level ? 'hover:bg-[#D0BFFF] bg-[#BEADFA] text-white' : 'bg-gray-200 text-black'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-8 px-4 py-2 block hover:bg-[#D0BFFF] bg-[#BEADFA] text-white rounded-md focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      {responseData && <div className="prose p-10"> {formatResponse(responseData.generatedText)}</div>}
    </div>
  );
};

export default Learn;
