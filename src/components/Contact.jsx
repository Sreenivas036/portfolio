import Lottie from 'lottie-react';
import React, { useRef } from 'react';
import HelloAnimation from "../assets/animation.json"
import emailjs from '@emailjs/browser';


const Contact = () => {
const form = useRef()
 const sendEmail = (e) => {
    e.preventDefault();
console.log("form0",form)
    emailjs.sendForm(
      'service_jqpg7yj',      // Replace with your EmailJS Service ID
      'template_tzgo5pf',     // Replace with your EmailJS Template ID
      form.current,
      'OViFtRTBCSMI-4ph4'       // Replace with your EmailJS Public Key
    )
    .then((result) => {
      alert("Message sent successfully!");
    }, (error) => {
      console.error(error)
      // alert("Failed to send message: " + error.text);
    });

    // e.target.reset(); // Clear the form
  };
  return (
    <div
      id="Contact"
      className="min-h-screen px-6 py-16 flex items-center justify-center bg-gradient-to-br from-[#7cc771] to-[#1e293b] text-white  "
    >
      <Lottie animationData={HelloAnimation} style={{width:400,height:1000}} loop={true} />
      <div className="w-full max-w-md bg-[#15192e] rounded-2xl shadow-xl p-8">
        <h3 className="text-sm tracking-widest text-gray-400 uppercase mb-2">
          Get in Touch
        </h3>
        <h2 className="text-4xl font-extrabold text-white mb-8">Contact.</h2>

        <form ref={form} onSubmit={sendEmail}  className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name = "name"
              placeholder="What's your good name?"
              className="w-full px-4 py-3 bg-[#1f2336] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="What's your email?"
              className="w-full px-4 py-3 bg-[#1f2336] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="What you want to say?"
              className="w-full px-4 py-3 bg-[#1f2336] text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-200 font-bold py-3 rounded-md shadow-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
