import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram,FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className=' from-purple-900 via-indigo-900 to-black text-white py-16 text-center'>
      
      <h2 className='text-4xl font-bold mb-2'>FIND ME ON</h2>
      <p className='text-lg text-gray-300 mb-12'>Feel free to <span className='text-purple-400 font-semibold'>connect</span> with me</p>

      
      <div className='flex justify-center space-x-6 mb-24'>
        <a 
          href="https://github.com/roaa-mir" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='bg-purple-700 hover:bg-purple-800 p-4 rounded-full transition-colors duration-300 transform hover:scale-110'
        >
          <FaGithub className='text-white text-3xl' />
        </a>
        
        <a 
          href="https://www.linkedin.com/in/roaa-elmir/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='bg-purple-700 hover:bg-purple-800 p-4 rounded-full transition-colors duration-300 transform hover:scale-110'
        >
          <FaLinkedinIn className='text-white text-3xl' />
        </a>
        <a 
         href="https://wa.me/96171557284" 
         target="_blank" 
         rel="noopener noreferrer" 
         className='bg-purple-700 hover:bg-purple-800 p-4 rounded-full transition-colors duration-300 transform hover:scale-110'
        >
           <FaWhatsapp className='text-white text-3xl' />
        </a>
        <a 
          href="https://instagram.com/_roaa_elmir_" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='bg-purple-700 hover:bg-purple-800 p-4 rounded-full transition-colors duration-300 transform hover:scale-110'
        >
          <FaInstagram className='text-white text-3xl' />
        </a>
      </div>
    </div>
  );
};

export default Contact;