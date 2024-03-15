import router from 'next/router';
import { useState } from 'react';

export const CreateProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    github: '',
    linkedin: '',
    dob: '',
    year: '',
    semester: '',
    degree: '',
    interests: [],
    phone: '',
    skills: '',
  });
  const [step, setStep] = useState(1);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    if (step === 1) {
      setStep(2);
    } else {
      router.push('/getstarted');
      console.log('Form submitted');
    }
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  return (
    <div className="min-h-screen p-6 bg-stone-50 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-stone-600">Profile Form</h2>
          <p className="text-stone-600 mb-6">Please fill out all the fields.</p>

          <div className="bg-stone-50 text-stone-600 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
                  <div className="col-span-1">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="px-4 appearance-none outline-none text-stone-600 w-full bg-transparent border border-stone-600 rounded-md h-10"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="px-4 appearance-none outline-none text-stone-600 w-full bg-transparent border border-stone-600 rounded-md h-10"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="px-4 appearance-none outline-none text-stone-600 w-full bg-transparent border border-stone-600 rounded-md h-10"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="github">GitHub Link</label>
                    <input
                      type="text"
                      name="github"
                      id="github"
                      value={formData.github}
                      onChange={handleChange}
                      className="px-4 appearance-none outline-none text-stone-600 w-full bg-transparent border border-stone-600 rounded-md h-10"
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="linkedin">LinkedIn Link</label>
                    <input
                      type="text"
                      name="linkedin"
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="px-4 appearance-none outline-none text-stone-600 w-full bg-transparent border border-stone-600 rounded-md h-10"
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="px-4 appearance-none outline-none text-stone-600 w-full bg-transparent border border-stone-600 rounded-md h-10"
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="px-4 appearance-none outline-none text-stone-600 w-full bg-transparent border border-stone-600 rounded-md h-10"
                    />
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
                  <div className="col-span-1">
                    <label htmlFor="year">Year</label>
                    <input
                      type="text"
                      name="year"
                      id="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="px-4 appearance-none outline-none text-stone-600 w-full bg-transparent border border-stone-600 rounded-md h-10"
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="semester">Semester</label>
                    <input
                      type="text"
                      name="semester"
                      id="semester"
                      value={formData.semester}
                      onChange={handleChange}
                      className="px-4 appearance-none outline-none text-stone-600 w-full bg-transparent border border-stone-600 rounded-md h-10"
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="degree">Degree</label>
                    <input
                      type="text"
                      name="degree"
                      id="degree"
                      value={formData.degree}
                      onChange={handleChange}
                      className="px-4 appearance-none outline-none text-stone-600 w-full bg-transparent border border-stone-600 rounded-md h-10"
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="skills">Skills</label>
                    <input
                      type="text"
                      name="skills"
                      id="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      className="px-4 appearance-none outline-none text-stone-600 w-full bg-transparent border border-stone-600 rounded-md h-10"
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="interests">Interests</label>
                    <input
                      type="text"
                      name="interests"
                      id="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent border border-gray-700 rounded-md h-10"
                    />
                  </div>
                </div>
              )}
              <div className="flex justify-between">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="bg-blue-950 text-white font-bold py-2 px-4 rounded mt-5"
                  >
                    Previous
                  </button>
                )}
                <button type="submit" className="bg-stone-600 text-stone-50 font-bold py-2 px-4 rounded mt-5">
                  {step === 1 ? 'Next' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
