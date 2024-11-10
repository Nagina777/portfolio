import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IoCloudDownloadOutline } from "react-icons/io5";

 const Navbar = () => {
  return (
    <div className="bg-blue-300 z-50 sticky top-0">
    <header className="text-black body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
  
    {/* <img src="/assets/pic/logo1.png" alt="logo" width={100} height={100} />
      <span className="ml-3 text-xl">My Portfolio</span> */}
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"}className="mr-5 hover:text-blue-900">Home</Link>
      <Link href={"#about"}className="mr-5 hover:text-blue-900">About</Link>
      <Link href={"#Contact"}className="mr-5 hover:text-blue-900">Contact</Link>
      <Link href={"#projects"}className="mr-5 hover:text-blue-900">Projects</Link>
      
    </nav>
    <a href="/assets/pic/cv.pdf">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
       
        Download Cv
        <IoCloudDownloadOutline  className="text ml-2"/>
      
    </button>
    </a>
  </div>
</header></div>
  )
}
export default Navbar
