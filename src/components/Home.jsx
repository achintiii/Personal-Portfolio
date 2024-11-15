import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name = 'home' className= 'w-full h-screen bg-[#0a192f]'>
        {/* Container*/}
        <div className = 'max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-teal-300'> Hi, my name is</p>
            <h1 className = 'text-4xl sm: text-7xl font bold text-[#ccd6f6]'> Ashwin Chintalapati</h1>
            <h2> I am a full stack developer </h2>
            <p>
            specializing in building AI applications. Currently, I am focusing on building large scale responsive web applications
            </p>
            <div>
                <button> View Work <HiArrowNarrowRight /> </button>
            </div>
            </div>
    </div>
  )
}

export default Home