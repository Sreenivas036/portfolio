import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20  bg-gradient-to-br from-[#7cc771] to-[#1e293b] text-white text-center min-h-screen flex items-center justify-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-[#3ea6ff]">Me</span>
        </h2>
        <div className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed px-6">
          <p>
            I’m a Full Stack Developer with a strong foundation in front-end and back-end technologies including HTML, CSS, JavaScript, React, Java, SpringBoot, MYSQL. I enjoy building responsive, dynamic web applications that provide seamless user experiences.
          </p>
          <p className="mt-4">
            I’m passionate about solving real-world problems through clean, efficient code and continuously strive to learn new frameworks and tools to stay ahead in the fast-evolving tech landscape. Currently, I’m looking for an opportunity to contribute to an innovative team and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
