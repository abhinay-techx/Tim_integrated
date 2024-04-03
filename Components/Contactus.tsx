import React from 'react';
import { HiUser, HiMail, HiChatAlt } from 'react-icons/hi'; // Import necessary icons from Hero Icons

function Contact() {
  return (
    <div className="xl:container mx-auto mb-32 mt-10">
      <div className="flex justify-center" style={{
        background: '#00A3D4',
        height: '250px'
      }}>
        <h1 className="text-5xl sm:text-7xl text-white uppercase pt-12">Contact Us</h1>
      </div>
      <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto">
        <div className="rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:p">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <HiUser className="w-6 h-6 mr-2" /> 
              <input type="text" placeholder="Name" className="border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center mb-2">
              <HiMail className="w-6 h-6 mr-2" /> 
              <input type="email" placeholder="Email" className="border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center mb-2">
              <HiChatAlt className="w-6 h-6 mr-2" /> 
              <textarea placeholder="Message" className="border rounded px-4 py-2 w-full h-32 focus:outline-none focus:border-blue-400" />
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;