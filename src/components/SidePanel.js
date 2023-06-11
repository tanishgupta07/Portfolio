import React from 'react';
import { FaLinkedin, FaGithub, FaDownload , FaEnvelope} from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import ProfilePicture from '../images/Image3.png'

const SidePanel = () => {
  const handleResumeDownload = () => {
    // Logic to initiate the resume download
    const fileID = '1XAg5uhLPcgpMy7ohUGCslISe95FJzJpi'; // Replace with the ID of your Google Drive file
  const downloadLink = document.createElement('a');
  downloadLink.href = `https://drive.google.com/uc?export=download&id=${fileID}`;
  downloadLink.download = 'Tanish_Resume.pdf'; // Replace with your desired filename
  downloadLink.click();
  };

  const handleEmailMe = () => {
    // Logic to open the default email application
    const email = 'tanishgupta07@outlook.com';
    const subject = 'Regarding Job Opportunity';
    const body = 'Dear Tanish Gupta,';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="text-center">
      <div className="flex justify-center pt-8">
        <img
          src={ProfilePicture}
          alt="Profile"
          className="w-48 h-48 rounded-full"
        />
      </div>
      <h1 className="text-2xl font-bold mt-4 pt-4">Tanish Gupta</h1>
      <p className="text-m">Software Developer</p>

      <div className="pt-8 pb-8 mt-16 mb-16">
        <div className="mb-2">
          <button
            className="block w-full shadow-md rounded-full text-white py-2 px-4 cursor-pointer font-semibold bg-cyan-500 hover:bg-cyan-700"
            onClick={handleResumeDownload}
          >
            <FaDownload className="inline-block mr-2 mb-1" />
            Resume
          </button>
        </div>
        <div>
          <button
            className="block w-full shadow-md rounded-full bg-cyan-500 text-white py-2 px-4 cursor-pointer font-semibold hover:bg-cyan-700"
            onClick={handleEmailMe}
          >
            <FaEnvelope className="inline-block mr-2 mb-1" />
            Email Me
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-center space-x-10">
        <a
          href="https://www.linkedin.com/tanishgupta07"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-black hover:text-blue-500 cursor-pointer"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a
          href="https://github.com/tanishgupta07"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-black hover:text-gray-800 cursor-pointer"
        >
          <FaGithub className="text-3xl" />
        </a>
      </div>
      <div className="mt-8 mb-4 flex justify-center">
        <a
          href="tel:+91-9149637132"
          className="flex items-center text-black"
        >
          <IoMdCall className="mr-2" />
          <span>Contact: (+91)914-963-7132</span>
        </a>
      </div>
      
    </div>
  );
};

export default SidePanel;