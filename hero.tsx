"use client";
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div><>
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Iam 
          <Typewriter
  options={{
    strings: [
       
"Web Developer",
"Graphic Designer",
"Data analytic",
  
],
    autoStart: true,
    loop: true,
  }}
/>
           
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-900"></div>
          <p className="mb-8 leading-relaxed">
          I have completed my MBA. Now, I am taking an Artificial Intelligence, Web 3.0 & Metaverse course under the Governor of Sindh.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
           
            <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={require("../../../public/assets/pic/pic.png")}
          />
        </div>
      </div>
    </section>

  </>
  </div>
  )
}

export default Hero