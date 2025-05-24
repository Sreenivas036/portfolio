import React from 'react';
import IconOne from '../../public/project1.png'
import IconTwo from '../../public/project2.png'
import { PiArrowSquareOutBold } from "react-icons/pi";


const projectImages = [
  {
    src: IconOne,
    title: 'To-Do App',
    description:
      'This project is a simple and interactive task management app built using React, JavaScript, HTML, and CSS. It allows users to add tasks and organize them into three categories: Todo, Ongoing, and Completed. The app demonstrates component-based design, dynamic state handling, and a clean, responsive UI for seamless user experience.',
       link: 'https://taskbuddyv1.vercel.app/'
  },
  {
    src: IconTwo,
    title: 'SalesSavvy e-commerce-App',
    description:
      'SalesSavvy is a lightweight e-commerce website designed for an online shopping mall. Built with Java Spring Boot, MySQL, and a React + Vite.js frontend, it enables users to browse products, manage a cart, and place orders. The project showcases full-stack integration, API-driven architecture, and responsive UI for seamless shopping experiences.',
    link: 'https://salesv1.vercel.app/'
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-[#7cc771] to-[#1e293b] text-white px-4 py-10 pt-[100px]">
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="text-blue-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {projectImages.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg w-[370px] h-[400px] bg-white"
          >
            {/* Image with cover and center alignment */}
            <img
              src={item.src}
              alt={`project-${index}`}
              className="w-full h-full object-contain transition duration-300 group-hover:blur-sm"
            />

            {/* Slide-in overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000099] to-[#000000cc] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-in-out px-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-sm mb-4 text-white">{item.description}</p>


                {/* GitHub Link Icon */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center mx-auto"
                  >
                    <PiArrowSquareOutBold className="text-black text-xl" />
                  </a>
                )}


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;