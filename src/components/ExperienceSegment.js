import React from 'react';

const ExperienceSegment = () => {
  return (
    <div className="bg-white p-4 rounded shadow h-96 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Programmer Analyst</h2>
      <p className="text-gray-600 mb-2">February 2022 – Present</p>
      <p className="text-gray-600 mb-6">Cognizant Product Development Team</p>

      <ul className="list-disc pl-6 mb-6">
      <li>
          Developed internal testing tools using React, JavaScript, and other related technologies such as InfluxDB, RabbitMQ,
          ElasticSearch, JAVA SpringBoot, etc.
        </li>
        <li>
        Worked with a team to develop cost-efficient and user-centric testing tools, contributing to improved efficiency and quality of software development processes.
        </li>
        <li>
          Conducted thorough testing and debugging of applications, identifying and resolving performance bottlenecks and
          software defects.
        </li>
        <li>
          Collaborated with stakeholders to gather requirements, define project scope, and prioritize feature development.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Programmer Analyst Trainee</h2>
      <p className="text-gray-600 mb-2">July 2021 – January 2022</p>
      <p className="text-gray-600 mb-6">Pacific Gas and Energy</p>

      <ul className="list-disc pl-6">
        <li>
          Collaborated with a US-based company, Pacific Gas And Energy, to develop and enhance their document management product, Documentum,
          which efficiently stores and manages tens of thousands of electronic documents.
        </li>
        <li>
          Utilized React and JavaScript to build user-friendly interfaces, streamline workflows, and improve overall user
          experience.
        </li>
        <li>
          Worked closely with cross-functional teams to gather requirements, identify technical specifications, and deliver
          high-quality solutions within tight deadlines.
        </li>
        <li>
          Conducted code reviews, identified bugs, and implemented necessary fixes to ensure optimal performance and
          maintainable codebase.
        </li>
        <li>
          Actively participated in agile development methodologies, including daily stand-ups, sprint planning, and
          retrospectives, to foster effective teamwork and continuous improvement.
        </li>
      </ul>
    </div>
  );
};

export default ExperienceSegment;