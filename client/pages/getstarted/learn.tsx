import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface FormData {
  topic: string;
  duration: {
    days: boolean;
    weeks: boolean;
    months: boolean;
    number: string;
  };
  level: string | null;
  priorKnowledge: string;
  learningStyle: string;
}

const Learn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    topic: '',
    duration: { days: false, weeks: false, months: false, number: '' },
    level: null,
    priorKnowledge: '',
    learningStyle: '',
  });

  const [responseData, setResponseData] = useState<any>(null);
  const router = useRouter();

  const handleDurationNumberChange = (value: string) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      duration: {
        ...prevFormData.duration,
        number: value,
      },
    }));
  };

  const handleDurationUnitChange = (unit: keyof FormData['duration']) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      duration: {
        days: unit === 'days',
        weeks: unit === 'weeks',
        months: unit === 'months',
        number: prevFormData.duration.number,
      },
    }));
  };

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
    const prompt = `Give a detailed course plan for "${formData.topic}". 
    Topic: ${formData.topic}
    Duration: ${formData.duration.number} ${
      formData.duration.days ? 'days' : formData.duration.weeks ? 'weeks' : 'months'
    }
    Level: ${formData.level || 'N/A'}
    Prior Knowledge: ${formData.priorKnowledge}
    Learning Style: ${formData.learningStyle}`;
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
  const durationUnits: Array<keyof FormData['duration']> = ['days', 'weeks', 'months'];

  return (
    <div className="w-full h-full bg-stone-50 text-black">
      <div className="">
        <h1 className="text-black font-bold font-heading text-6xl p-10">What are you up for today?</h1>
        <form onSubmit={handleSubmit} className="p-10">
          <label htmlFor="topic" className="block text-lg font-semibold mb-2">
            What's the topic?
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
          <label className="block text-lg font-semibold mt-4 mb-2">Duration</label>
          <div className="flex flex-row mb-4">
            <input
              type="number"
              id="number"
              name="number"
              value={formData.duration.number}
              onChange={e => handleDurationNumberChange(e.target.value)}
              className="w-48 mr-5 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:border-[#BEADFA]"
              required
            />
            {durationUnits.map(unit => (
              <div
                key={unit}
                onClick={() => handleDurationUnitChange(unit)}
                className={`cursor-pointer rounded-md p-2 mr-4 ${
                  formData.duration[unit] ? 'hover:bg-[#D0BFFF] bg-[#BEADFA] text-white' : 'bg-gray-200 text-black'
                }`}
              >
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </div>
            ))}
          </div>
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
          <label htmlFor="priorKnowledge" className="block text-lg font-semibold mt-4 mb-2">
            Prior Knowledge
          </label>
          <input
            type="text"
            id="priorKnowledge"
            name="priorKnowledge"
            value={formData.priorKnowledge}
            onChange={handleChange}
            className="w-48 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#BEADFA]"
            required
          />
          <label htmlFor="learningStyle" className="block text-lg font-semibold mt-4 mb-2">
            Learning Style Preferences
          </label>
          <input
            type="text"
            id="learningStyle"
            name="learningStyle"
            value={formData.learningStyle}
            onChange={handleChange}
            className="w-48 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#BEADFA]"
            required
          />
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
