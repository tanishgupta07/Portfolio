import React, { useState } from 'react';
import ExperienceSegment from './ExperienceSegment';
import ProjectSegment from './ProjectSegment';

const Main = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const handleExperienceClick = () => {
    setActiveTab('experience');
  };

  const handleProjectsClick = () => {
    setActiveTab('projects');
  };

  return (
    <>
      <div className="mb-4 flex justify-end">
        <button
          className={`bg-white hover:bg-cyan-500 text-cyan-500 hover:text-white font-bold py-2 px-4 rounded-full mr-2 ${
            activeTab === 'experience' ? 'border-2 border-cyan-500' : 'border'
          }`}
          onClick={handleExperienceClick}
        >
          Experience
        </button>
        <button
          className={`bg-white hover:bg-cyan-500 text-cyan-500 hover:text-white font-bold py-2 px-4 rounded-full ${
            activeTab === 'projects' ? 'border-2 border-cyan-500' : 'border'
          }`}
          onClick={handleProjectsClick}
        >
          Projects
        </button>
      </div>

      {activeTab === 'experience' && <ExperienceSegment />}
      {activeTab === 'projects' && <ProjectSegment />}
    </>
  );
};

export default Main;