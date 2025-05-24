import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiSpringboot, SiMysql } from 'react-icons/si';

const skills = [
  { name: "Java", icon: <FaJava size={55} className="text-[#f89820]" /> },
  { name: "Spring Boot", icon: <SiSpringboot size={55} className="text-green-600" /> },
  { name: "HTML", icon: <FaHtml5 size={55} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={55} className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={55} className="text-sky-400" /> },
  { name: "JavaScript", icon: <FaJsSquare size={55} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={55} className="text-cyan-400" /> },
  { name: "MySQL", icon: <SiMysql size={55} className="text-[#00758F]" /> },
];

const Skills = () => {
  return (
    <section className=" bg-gradient-to-br from-[#7cc771] to-[#1e293b] py-10 min-h-screen ">
      <div className="text-center mb-8 pt-[100px] ">
        <h2 className="text-2xl font-bold text-white">
          Technical <span className="text-sky-400 ">Skills</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white rounded-xl shadow-md w-28 h-28 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-200"
          >
            <div className="mb-2">{skill.icon}</div>
            <p className="text-base font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
