import React from 'react'

const About = () => {
  return (
    <div name="about"
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black
        text-white' >

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full
         h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 
                border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-7'>
                Hi, I am Amit Pandey, a frontend developer who loves turning
                ideas into interactive web experiences. With a keen eye for
                design and a passion for clean code, I focus on building smooth,
                responsive, and engaging user interfaces.I am always exploring new
                technologies, refining my skills, and working on exciting projects. 
            </p>
            <br />  
            <p  className='text-xl mt-2'>
                Currently, I’m diving deep into React and JavaScript to create faster, more interactive web apps.
                Recently, I developed a Shopping Cart using React and Redux, where I implemented efficient state management.
                I’m passionate about creating seamless user experiences and improving accessibility for all.
                Feel free to reach out for collaborations or just to talk tech!
            </p> 
        </div>

    </div>
  )
}

export default About
