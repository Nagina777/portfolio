import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div id="projects">
      <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
    Projects
        </h1>
      
        
      </div>
      <div className="flex flex-wrap -m-5 -mt-9">
        <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../../public/assets/project/Create-Next-App-10-01-2024_06_00_PM.png')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
               Next js Projects
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              web development Projects
              </h1>
              <p className="leading-relaxed">
              "This is my Next.js project. I have made other projects like this as well."
              </p>
              <Link href={"https://pixabay.com/photos/salmon-fish-seafood-veggies-salad-518032/"}>
              <p className="leading-relaxed text-blue-800 hover:underline">
              View Projects
              </p>
              </Link>
            </div>
            
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../../public/assets/project/Create-Next-App-10-01-2024_06_00_PM.png')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
               Next js Projects
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              web development Projects
              </h1>
              <p className="leading-relaxed">
              "This is my Next.js project. I have made other projects like this as well."
              </p>
              <Link href={"https://pixabay.com/photos/salmon-fish-seafood-veggies-salad-518032/"}>
              <p className="leading-relaxed text-blue-800 hover:underline">
              View Projects
              </p>
              </Link>
            </div>
            
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../../public/assets/project/Create-Next-App-10-01-2024_06_00_PM.png')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
               Next js Projects
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              web development Projects
              </h1>
              <p className="leading-relaxed">
              "This is my Next.js project. I have made other projects like this as well."
              </p>
              <Link href={"https://pixabay.com/photos/salmon-fish-seafood-veggies-salad-518032/"}>
              <p className="leading-relaxed text-blue-800 hover:underline">
              View Projects
              </p>
              </Link>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  </section>
  </div>
  )
}

export default Projects