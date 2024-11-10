
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about">
        <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src={require("../../../public/assets/pic/pic.png")}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       About Me
          
        </h1>
        <p className="mb-8 leading-relaxed">
          
"Iam Nagina Aziz.I have an MBA in finance. I am currently taking a web development course on the metaverse under a government initiative."
        </p>
        <div className="flex justify-center">
         
          <a href={"/assets/pic/cv.pdf"}>
          <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            View CV
          </button>
          </a>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default About