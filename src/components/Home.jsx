import React from 'react'
import icon from '../assets/icon.png'

const Home = () => {
  return (
    <div className='text-white text-center py-16'>
        <img src={icon} alt="Developer Icon" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-800'>Roaa ElMir </span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
           I design and develop modern web applications and constantly explore AI to solve real-world challenges.
        </p>
        <div className='mt-8 space-x-4'>
            <a 
            href="/Roaa Elmir.pdf" 
            download="Roaa-Elmir-Resume.pdf"
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white
            transform transition-transform duration-300 hover:scale-105 
            px-4 py-2 rounded-full inline-block text-center">My Resume</a>
        </div>

    </div>
  )
}

export default Home