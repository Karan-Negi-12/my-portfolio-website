import React from 'react'
import heroImage from '../Assets/me.jpg'
import { BsArrowReturnRight } from "react-icons/bs";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800 '>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row'>

            <div className='flex flex-col justify-center h-full'>
                
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a DevOps Enginner.
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Hi everyone, I'm Karan Negi, a Cloud Infrastructure Engineer at HCLTech. I bring strong hands-on experience with DevOps workflows and a solid understanding of various DevOps tools, enabling me to build and manage efficient cloud infrastructures.
                </p>

                <div>
                    <Link to='projects' className='group text-white w-fit px-6 py-3 my-2 flex items-center
                    rounded-md bg-gradient-to-r from-cyan-50
                     to-blue-500 cursor-pointer'>
                        Projects 
                        <span className='group-hover:rotate-90 duration-300'>
                            <BsArrowReturnRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={heroImage} alt="My profile" 
                className='rounded-2xl mx-auto w-36 md:w-60' />
            </div>
        </div>
    </div>
  )
}

export default Home
