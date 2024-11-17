import React from 'react'

const Contact = () => {
  return (
    <div name = "Contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/bollopoa" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>

                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                    Contact
                </p>
                <p className='text-gray-50-py-4'>
                    Submit the form below or shoot me an email - achintiii@outlook.com
                </p>
            </div>
            <input classname='bg-[#0a192f] border-b-2 border-gray-300 text-gray-300 py-2 px-4 mb-4' type="text" placeholder='Name' name = 'name'/>
            <input classname='bg-[#0a192f] border-b-2 border-gray-300 text-gray-300 py-2 px-4 mb-4' type="email" placeholder='Email' name = 'email'/>
            <textarea classname='bg-[#0a192f] border-b-2 border-gray-300 text-gray-300 py-2 px-4 mb-4' type="text" placeholder='Message' name = 'message'/>
            <button className='bg-pink-600 text-white py-2 px-4 hover:bg-pink-700 transition-colors duration-300'>Let's Talk</button>

        </form>
    </div>
  )
}

export default Contact