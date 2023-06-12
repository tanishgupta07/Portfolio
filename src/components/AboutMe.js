import React from 'react';

const AboutMe = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'MongoDB', 'MySQL','ExpressJS', 'InfluxDB', 'ELK', 'TailwindCSS', 'RabbitMQ'];

  return (
    <div>
      <h1 className='font-bold text-2xl mb-2'>About Me</h1>
      <h2>
        I am a skilled Full Stack Developer with 2 years of experience, specializing in turning ideas into impactful
        products. As a vital part of product-building teams, I create user-friendly interfaces and powerful backend systems.
        With a passion for problem-solving, I bring simplicity and elegance to complex challenges.
      </h2>
      

      <div className="mt-4">
        <h1 className='font-bold text-xl'>Skills:</h1>
        <div className="flex flex-wrap mt-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-cyan-500 shadow-md text-white rounded-full px-3 py-1 text-sm font-semibold m-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default AboutMe;