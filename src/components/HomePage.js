import React from 'react';
import SidePanel from './SidePanel';
import AboutMe from './AboutMe';
import Main from './Main';

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-white shadow-xl rounded-lg w-full md:w-2/6 md:mr-4 mb-4">
        <div className="p-4">
          <SidePanel/>
        </div>
      </div>
      <div className="flex flex-col md:w-4/6 ">
        <div className="bg-white shadow-xl rounded-lg mb-4">
          <div className="p-4">
            <AboutMe/>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-lg">
          <div className="p-4">
            <Main/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;