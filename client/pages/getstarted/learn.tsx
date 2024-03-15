import React, { useState } from 'react';

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const levels: string[] = ['beginner', 'intermediate', 'expert'];
  const durationUnits: Array<keyof FormData['duration']> = ['days', 'weeks', 'months'];

  return (
    <div className="w-full h-screen bg-white text-black">
      <h1 className="text-black font-bold text-6xl p-10">What are you up for today?</h1>
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
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
            className="w-32 mr-5 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          {durationUnits.map(unit => (
            <div
              key={unit}
              onClick={() => handleDurationUnitChange(unit)}
              className={`cursor-pointer rounded-md p-2 mr-4 ${
                formData.duration[unit] ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
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
                formData.level === level ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
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
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Learn;
