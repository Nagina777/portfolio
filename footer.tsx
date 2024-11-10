import React from 'react'
import { FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="bg-gray-400">
 
  <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
   
      <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2020 Copy right
       
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-red-600 text-3xl hover:text-[#ff0000]">
    <FaYoutube />
      
        
        </a>
      </span>
    </div>
  </footer>
  {/* End footer */}
</div>
  )
}
export default Footer