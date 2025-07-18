import React from 'react'
import Kub from '../Assets/kub.png'
import github from '../Assets/github.png'
import Cloud from '../Assets/cloud.webp'
import Docker from '../Assets/Docker.webp'
import Bash from '../Assets/Bash.jpg'
import Python from '../Assets/python.jpg'
import Ansible from '../Assets/Ansible.webp'
import Jenkins from '../Assets/Jenkins.webp'
import Terraform from '../Assets/Terraform.png'
import Web from '../Assets/Web.webp'
import Prom from '../Assets/Prom.webp'
import SolarWinds from '../Assets/SolarWinds.webp'

const TechnicalSkills = () => {

    const techs = [

        {
            id:1,
            src:Cloud,
            title:"Cloud-Platforms",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:Kub,
            title:"Kubernetes",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:Docker,
            title:"Docker",
            style:"shadow-sky-400"
        },
        {
            id:4,
            src:Bash,
            title:"Bash",
            style:"shadow-yellow-500"
        },
        {
            id:5,
            src:Ansible,
            title:"Ansible",
            style:"shadow-blue-600"
        },
        {
            id:6,
            src:Terraform,
            title:"Terraform",
            style:"shadow-orange-200"
        },
        {
            id:7,
            src:Python,
            title:"Python",
            style:"shadow-blue-200"
        },
        {
            id:8,
            src:github,
            title:"GitHub/Gitlabs",
            style:"shadow-orange-400"
        },
        {
            id:9,
            src:Jenkins,
            title:"Jenkins",
            style:"shadow-orange-400"
        },
        {
            id:10,
            src:Web,
            title:"Web-Technologies",
            style:"shadow-orange-300"
        },
        {
            id:11,
            src:Prom,
            title:"Prometheus",
            style:"shadow-orange-300"
        },
        {
            id:12,
            src:SolarWinds,
            title:"SolarWinds",
            style:"shadow-orange-300"
        },
    ]





  return (
    <div name="technicalSkills" className='bg-gradient-to-b from-gray-800 to-black
        w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center
            w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500
                    p-2 inline'>Technical Skills</p>
                <p className='py-6'>These are the technologies I have worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center 
                py-8 px-12 sm:px-0'>
                    {
                        techs.map(({id,src,title,style}) => (
                            <div 
                                key={id} 
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt={title} className='w-20 mx-auto'/>
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }




                
            </div>
        </div>
      
    </div>
  )
}

export default TechnicalSkills
