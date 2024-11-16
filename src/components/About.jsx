import React from 'react'

const About = () => {
  return (
    <div name = 'about' className='w-full-h-screen bg-[#0a192f] text-gray-300'>
        <div className = 'flex flex-col justify-center items-center w-full h-full'>
            <div className = 'max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-u-4 border-pink-600'>
                    About
                </p>
                </div>
                <div>
                    
                </div>
                <div className = 'max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className = 'sm:text-right text-4xl font-bold'>
                        <p> Hello, I am Ashwin Chintalapati. It is nice to meet you. Feel free to look around my personal website. </p>
                    </div>
                    <div>
                        <p> I am passionate about using AI to build applications to solve real world problems. I specialize in researching and testing AI algorithms and techniques ranging from clustering, neural networks, and decision trees to do tasks such as object detection, fake image analysis, and anomaly detection. 
                            
                        </p>
                    </div>

                </div>  

                    
                
            </div>

        </div>

    </div>
  )
}

export default About