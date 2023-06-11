import React from 'react'

const ProjectSegment = () => {
  return (
    <div className="bg-white p-4 rounded shadow h-96 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-2">NFT Assure</h2>
      <p className="text-gray-600 mb-4">Cognizant Product </p>

      <ul className="list-disc pl-6 mb-6">
        <li>
        NFT Assure is a cost- eﬀicient internal tool for non-functional testing, utilizing JMeter and a microservices
architecture which <b> reduced the user effort by 40%</b>
        </li>
        <li>
        Designed a scalable architecture utilizing multiple load generators, enabling the tool to <b> handle 10x more concurrent users </b>
compared to JMeter, achieving a <b> throughput of more than 10,000 requests per second </b>
        </li>
        <li>
        Integrated <b> InfluxDB for real-time data collection </b>, capturing and visualizing critical performance metrics and Leveraged
<b> MongoDB as the database backend </b>, storing 10000 test records
        </li>
        <li>
        Integrated <b> Material UI to provide a consistent and user-friendly interface </b>, enhancing the overall user experience and
Utilized D3 charts to create interactive and informative visualizations of performance metrics, enabling users to analyze
and interpret test results eﬀiciently
        </li>
        <li>
        Used <b> ELK stack to collect the tomcat Logs </b> and display it on the UI
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Accessibility Chrome Plugin</h2>
      <p className="text-gray-600 mb-4">Cognizant Product</p>

      <ul className="list-disc pl-6 mb-6">
        <li>
        Developed an Accessibility Chrome Plugin leveraging <b> WCAG 2.0 and 2.1 standards </b> to improve website accessibility
        </li>
        <li>
        Increased accessibility coverage from <b> 40% to 70% </b> by implementing functions for Accessibility checks
        </li>
        <li>
        Created a unique feature within the plugin to seamlessly send accessibility evaluation results to a MongoDB database
using an internal API.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Performancr analyzer Chrome Plugin</h2>
      <p className="text-gray-600 mb-4">Cognizant Product</p>

      <ul className="list-disc pl-6 mb-6">
        <li>
        Developed a highly efficient Chrome extension that enables users to retrieve various matrices, including <b> TTLB (Time to First Byte), Page Load Time, Dom Load Timing, and average timing.</b>
        </li>
        <li>
        Implemented a unique feature that allows users to compare current results with the previous reload results, providing valuable insights into website performance improvements.
        </li>
        <li>
        Integrated functionality to generate comprehensive reports in PDF format, enabling users to analyze and share performance data easily.
        </li>
      </ul>
    </div>
  )
}

export default ProjectSegment