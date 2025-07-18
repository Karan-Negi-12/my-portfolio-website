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
                Hi, I am Karan Negi, As a Cloud Infrastructure Engineer, I am passionate about optimizing infrastructure through automation and continuous delivery. I leverage my foundational knowledge in DevOps workflows and tools like Docker and Kubernetes to build scalable and efficient cloud environments, constantly seeking new opportunities to grow as an aspiring DevOps Engineer. 
            </p>
            <br />  
            <p  className='text-xl mt-2'>
                Currently, I'm diving deep into CI/CD pipeline automation and infrastructure as code to build more robust and faster deployment cycles. Recently, I automated the deployment process for a critical application using Terraform and Jenkins, significantly reducing manual effort and improving reliability. I'm passionate about streamlining development workflows and fostering seamless collaboration across teams.
                Feel free to reach out for collaborations or just to talk tech!
            </p> 
        </div>

    </div>
  )
}

export default About
