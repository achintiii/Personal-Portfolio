import React from 'react'
import HTML from '../assets/HTML.jpeg'
import CSS from '../assets/CSS.jpeg'
import ReactImg from '../assets/ReactImg.jpeg'
import Python from '../assets/Python.jpeg'
import Pytorch from '../assets/Pytorch_logo.png'
import Tensorflow from '../assets/TensorFlow.jpeg'
import Java from '../assets/Java.jpeg'
import C from '../assets/C.jpeg'







const Skills = () => {
  return (
    <div name='skills' className = 'bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>

            <p className='text-4xl text-gray-300'>
                Skills 
            </p>
            <p className = 'py-4'> These are the technologies that I have experiences with. </p>
        </div>

        <div className = 'w-full grid grid-cols-2 sm: grid-cols-4 gap-4 text-center py-8'>
            <div>
                <img className='w-20-mx-auto' src={HTML} alt="HTML Icon" />
                <p> HTML </p>
            </div>
        </div>
    </div>
        





        
        
        
    
    
    </div>
  )
}

export default Skills