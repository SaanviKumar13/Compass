import React from 'react';

const formatResponse = (response: string) => {
  const sections = response.split(/(\*\*|\n#+\s)/); // Split sections based on bold text markers and heading markers
  return sections.map((section, index) => {
    if (index % 2 === 1) {
      // If index is odd, it's a heading
      const headingLevel = section.startsWith('**') ? '2' : section.match(/^#+/)![0].length.toString(); // Determine heading level
      const headingContent = section.replace(/^\*\*|\s*#+\s/, '').trim(); // Extract heading content
      return React.createElement(
        `h${headingLevel}` as keyof JSX.IntrinsicElements,
        { key: index, className: 'text-2xl font-semibold mb-4' },
        headingContent,
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

const ViewCoursePlansPage = () => {
  const coursePlans = [
    {
      id: 1,
      title: 'Introduction to React',
      duration: '4 weeks',
      description: `      
      ### Week 1: Getting Started with React
      
      - **Day 1-2:** Introduction to React and its core concepts. Understand the Virtual DOM and the benefits of React in modern web development.
      - **Day 3-4:** Setting up the development environment: Install Node.js, npm, and create-react-app. Initialize a new React project and explore its structure.
      - **Day 5-7:** Understanding JSX: Learn the syntax of JSX and how it integrates HTML-like code with JavaScript. Create basic React components using JSX.
      
      ### Week 2: Building React Components
      
      - **Day 8-9:** State and Props: Explore the concepts of state and props in React components. Understand the difference between them and how they affect component rendering.
      - **Day 10-11:** Handling Events: Learn how to handle user events such as onClick, onChange, etc., and update component state accordingly.
      - **Day 12-14:** Component Lifecycle: Dive into the lifecycle of React components. Understand lifecycle methods like componentDidMount, componentDidUpdate, componentWillUnmount, etc., and their use cases.
      
      ### Week 3: Managing State and Data
      
      - **Day 15-16:** Working with Forms: Implement forms in React applications. Handle form submission, form validation, and controlled components.
      - **Day 17-18:** Introduction to React Hooks: Explore React Hooks such as useState and useEffect. Understand how Hooks simplify state management and side effects in functional components.
      - **Day 19-21:** Context API and Redux: Learn advanced state management techniques using Context API and Redux. Understand the principles of global state management and when to use each approach.
      
      ### Week 4: Routing and Fetching Data
      
      - **Day 22-23:** React Router: Implement client-side routing in React applications using React Router. Create multiple pages and navigate between them seamlessly.
      - **Day 24-25:** Making API Calls: Integrate APIs into React applications. Fetch data from external sources using Axios or fetch API and display it in components.
      - **Day 26-28:** Final Project: Apply all the concepts learned throughout the course to build a simple React application. This project could involve creating multiple components, managing state, implementing routing, fetching data from an API, and handling user interactions.
      
      ### Additional Resources and Practice:
      
      - Codecademy's React Course: Complete hands-on exercises and projects to reinforce learning.
      - FreeCodeCamp's React Tutorial: Learn React through interactive lessons and challenges.
      - React Official Documentation: Explore the official documentation to deepen your understanding of React concepts and best practices.
      - Practice Exercises: Solve coding challenges on platforms like LeetCode, HackerRank, or CodeSignal to sharpen your React skills further.
      `,
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      duration: '6 weeks',
      description: `
            
      - **Day 1:** Review of JavaScript fundamentals (variables, data types, functions, etc.)
      - **Day 2:** Advanced functions (closures, higher-order functions)
      - **Day 3:** Object-oriented programming in JavaScript (classes, prototypes)
      - **Day 4:** Error handling and debugging techniques
      - **Day 5:** Asynchronous JavaScript (callbacks, promises, async/await)
      
      ### Week 2: DOM Manipulation and Event Handling
      
      - **Day 1:** Introduction to the Document Object Model (DOM)
      - **Day 2:** Selecting and manipulating DOM elements
      - **Day 3:** Event handling and propagation
      - **Day 4:** Advanced DOM manipulation techniques (creating elements, modifying attributes)
      - **Day 5:** Project: Building an interactive web application using DOM manipulation and event handling
      
      ### Week 3: Advanced Topics in JavaScript
      
      - **Day 1:** Functional programming concepts in JavaScript
      - **Day 2:** Modules and modularization (CommonJS, ES6 modules)
      - **Day 3:** JavaScript frameworks and libraries overview (React, Vue, Angular)
      - **Day 4:** Tooling and automation with npm, Webpack, and Babel
      - **Day 5:** Project: Integrating a JavaScript framework into a web application
      
      ### Week 4: Data Manipulation and APIs
      
      - **Day 1:** Working with JSON data
      - **Day 2:** Making HTTP requests with fetch and XMLHttpRequest
      - **Day 3:** Consuming RESTful APIs
      - **Day 4:** Introduction to server-side JavaScript (Node.js)
      - **Day 5:** Project: Building a client-side web application that interacts with a RESTful API
      
      ### Week 5: Advanced Frontend Development Techniques
      
      - **Day 1:** Responsive design principles with CSS and media queries
      - **Day 2:** Introduction to CSS preprocessors (Sass, Less)
      - **Day 3:** Animations and transitions using CSS and JavaScript
      - **Day 4:** Accessibility best practices for web development
      - **Day 5:** Project: Enhancing the UI/UX of a web application with advanced frontend techniques
      
      ### Week 6: Final Project and Performance Optimization
      
      - **Day 1:** Introduction to performance optimization techniques
      - **Day 2:** Analyzing and improving website performance (network optimization, code splitting)
      - **Day 3:** Browser compatibility and polyfills
      - **Day 4:** Security best practices in JavaScript development
      - **Day 5:** Final Project: Building a high-performance, secure, and feature-rich web application using advanced JavaScript techniques
      
      Note: Each day includes a mix of theoretical concepts, hands-on coding exercises, and projects to reinforce learning. Additionally, encourage students to work on mini-projects and exercises throughout the week to solidify their understanding of the topics covered.
      `,
    },
  ];

  return (
    <div className="h-full w-full min-h-screen bg-stone-50 container mx-auto px-4 py-8">
      <h1 className="text-7xl text-black font-heading font-semibold mb-4">Course Plans</h1>
      <div className="flex flex-col m-32 my-48 gap-12 mt-20">
        {coursePlans.map(course => (
          <div key={course.id} className="bg-[#FAF3F0]  rounded-lg p-4 shadow-2xl">
            <h2 className="text-xl font-semibold mb-2 text-black font-heading">{course.title}</h2>
            <p className="text-gray-600 mb-2">Duration: {course.duration}</p>

            <div className="text-black">{formatResponse(course.description)}</div>

            <div className="flex justify-end mt-4">
              <button className="bg-[#d0bfff] hover:bg-[#D0BFFF] text-black font-bold py-2 px-4 rounded-full shadow-md mr-2">
                Download Materials
              </button>
              <button className="bg-[#d0bfff] hover:bg-[#D0BFFF] text-black font-bold py-2 px-4 rounded-full shadow-md">
                Mark Finished
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCoursePlansPage;
