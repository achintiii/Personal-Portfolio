// src/components/Experience.js

import React, { useState } from 'react';
import SuspectTechnologiesImg from '../assets/SuspectTechnologiesImage.jpeg';
import AiResearchImg from '../assets/AiResearch.jpeg';

const Experience = () => {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);

  const handleDescriptionToggle1 = () => {
    setShowDescription1(!showDescription1);
  };

  const handleDescriptionToggle2 = () => {
    setShowDescription2(!showDescription2);
  };

  return (
    <div name = "experience" className='w-full min-h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* Header Section */}
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
           Experience
          </p>
          <p className='py-6'>Check out some of my recent experience</p>
        </div>

        {/* Grid Container */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Card 1 */}
          <div
            style={{
              backgroundImage: `url(${SuspectTechnologiesImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center relative h-64'
          >
            {/* Overlay on Hover */}
            <div className='absolute inset-0 bg-black bg-opacity-50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center'>
              <span className='text-2xl font-bold text-blue-600 tracking-wider mb-4'>
                AI Internship at Suspect Technologies
              </span>
              <button
                className='rounded-lg px-4 py-2 bg-red-500 text-white font-bold text-lg hover:bg-red-700 transition-colors duration-300'
                onClick={handleDescriptionToggle1}
              >
                Description
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              backgroundImage: `url(${AiResearchImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center relative h-64'
          >
            {/* Overlay on Hover */}
            <div className='absolute inset-0 bg-black bg-opacity-50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider mb-4'>
                AI Research for Fake Image Detection
              </span>
              <button
                className='rounded-lg px-4 py-2 bg-red-500 text-white font-bold text-lg hover:bg-red-700 transition-colors duration-300'
                onClick={handleDescriptionToggle2}
              >
                Description
              </button>
            </div>
          </div>
        </div>

        {/* Description Pop-Up for Card 1 */}
        {showDescription1 && (
          <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50'>
            <div className='bg-[#0a192f] rounded-lg shadow-lg p-6 max-w-[600px] w-11/12 md:w-3/4 text-white relative'>
              <h2 className='text-3xl font-bold border-b-2 border-pink-600 pb-2 mb-4 text-blue-600'>
                AI Internship at Suspect Technologies
              </h2>
              <p className='mt-4'>
                During my internship at Suspect Technologies, I researched and developed various AI techniques. I trained, tested, and implemented Convolutional Neural Networks for image analysis, and developed custom forward and backward propagation techniques. I focused on fine-tuning and optimizing YOLO object detection models to detect different vehicle types, TVs, beds, and more. This involved manual data annotation using CVAT, sourcing Kaggle datasets in YOLO format, and utilizing frameworks like Optuna to enhance model accuracy.
              </p>
              <button
                className='mt-6 rounded-lg px-4 py-3 bg-pink-600 text-white font-bold text-lg hover:bg-pink-700 transition-colors duration-300'
                onClick={handleDescriptionToggle1}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Description Pop-Up for Card 2 */}
        {showDescription2 && (
          <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50'>
            <div className='bg-[#0a192f] rounded-lg shadow-lg p-6 max-w-[600px] w-11/12 md:w-3/4 text-white relative'>
              <h2 className='text-3xl font-bold border-b-2 border-pink-600 pb-2 mb-4 text-white'>
                AI Research for Fake Image Detection
              </h2>
              <p className='mt-4'>
                Under the guidance of Dr. Vishnu Pendyala, I researched how several foundation models can be used to help detect real vs fake images. I compared and constrasted the benefits of using
                standard deepfake detection techniques compared to foundation models. I researched and implemented explainability techniques like LIME and integrated gradients to understand regions of 
                images with high/low importance. 
              </p>
              <button
                className='mt-6 rounded-lg px-4 py-3 bg-pink-600 text-white font-bold text-lg hover:bg-pink-700 transition-colors duration-300'
                onClick={handleDescriptionToggle2}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
