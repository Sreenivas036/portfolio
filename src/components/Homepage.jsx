import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';


const HomePage = () => {
 
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#7cc771] to-[#1e293b] text-white pt-24 px-4 flex items-center justify-center font-poppins">
      <div className="text-left max-w-2xl">
        <h2 className="text-2xl font-semibold mb-2 text-white">Hello, I am</h2>
        <h1 className="text-[clamp(2rem,3vw,4rem)] font-extrabold mb-2 text-white">Sreenivasulu chitteti</h1>
        {/* <h2 className="text-[clamp(1.7rem,3vw,4rem)]  font-extrabold mb-4 text-white">
          I'm a <span className="text-blue-400">Full Stack Developer</span>
        </h2> */}
        <div style={{ fontSize: 'clamp(1.7rem,3vw,2.2rem)' }}>
          I am a{' '}
          <TypeAnimation
            sequence={[
              // Only type the highlighted parts
              'Full Stack Developer',
              1000,
              'Web Developer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{
             // color: '#d5fb2a', // Customize this color as you like 
             color:'#d5fb2a',
              fontWeight: 'bold',
            }}
          />
        </div>


        <p className="text-gray-300 text-lg font-normal mb-6 ">
          Proficient in Java, Spring, Web Technologies and MySQL
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.linkedin.com/in/chitteti-sreenivasulu-405bb02ab/" className="border-2 border-blue-400 p-3 rounded-full text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/Sreenivas036" className="border-2 border-blue-400 p-3 rounded-full text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300">
            <FaGithub size={20} />
          </a>
        </div>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://drive.google.com/file/d/1ZSOoKm3FEuqPuqrfWBPsHCGpaqedTZ_7/view?usp=sharing"
            className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg font-medium shadow-lg transition duration-300"
          >
            Download Resume <FaDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
