import React from 'react'
import ToDoApp from '../Assets/projectFolio/ToDoApp.png'
import WeatherApp from '../Assets/projectFolio/WeatherApp.png'

const Projects = () => {
    const projects = [
        {
            id : 1,
            src : WeatherApp,
            link:"abc.com",
            code:
        },
        {
            id : 2,
            src : ToDoApp,
            link:"https://to-do-app-jade-nine.vercel.app/",
            code:"https://github.com/Amit-Dev03/ToDoApp"
        },
    ]
  return (
    <div 
        name="projects" 
        className='bg-gradient-to-b from-black to-gray-800 w-full
             text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
            w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 
                     border-gray-500'>Projects</p>
                <p className='py-6'>Check out some of my Projects right here!</p >
            </div>

        <div  className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                projects.map(({id,src,link,code}) => (
                    
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                        <img src={src} alt="Project" 
                            className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={link}>Demo</a></button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code}>Code</a></button>
                        </div>
                    </div>
                ))
            }
        </div>





            

        </div>
      
    </div>
  )
}

export default Projects
