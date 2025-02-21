import React from 'react'
import ResumeCheckerProject from '../Assets/projectFolio/ResumeCheckerProject.png'
import ShoppingCart from '../Assets/projectFolio/ShoppingCart.png'
import ToDoApp from '../Assets/projectFolio/ToDoApp.png'
import WeatherApp from '../Assets/projectFolio/WeatherApp.png'

const Projects = () => {
    const projects = [
        {
            id : 1,
            src : ResumeCheckerProject
        },
        {
            id : 2,
            src : ShoppingCart
        },
        {
            id : 3,
            src : ToDoApp
        },
        {
            id : 4,
            src : WeatherApp
        }
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
                projects.map(({id,src}) => (
                    
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                        <img src={src} alt="Resume Checker Project" 
                            className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
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
