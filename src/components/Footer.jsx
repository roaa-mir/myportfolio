import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-4 border-t border-gray-600">
      <div className="container mx-auto px-8 md:px-5 lg:px-5">
        <div className="flex flex-col md:flex-row md:space-x-5 items-center mb-4">
          <div className="flex-1 ">
            <p className="text-gray-400">
              Designed and Developed by Roaa Elmir
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Roaa. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.linkedin.com/in/roaa-elmir/"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/roaa-mir"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
