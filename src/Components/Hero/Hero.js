import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero-main flex flex-col-reverse px-4 justify-between items-center mt-10 lg:flex lg:flex-row lg:px-20 xl:px-40">
        <div className="hero-left flex justify-center flex-col items-start">
          <h1 className="hero-title w-[100%] mt-6 text-left font-general font-[600] text-3xl leading-10 lg:mt-0 lg:w-[80%] xl:w-[70%]">
            Welcome to Jonkar Mahamub Spacial Course of web development.
          </h1>
          <p className="text-xl font-general text-left w-[100%] mt-8 font-medium lg:w-[80%] xl:w-[70%]">
            Explore new skills, deepen existing passions, and get lost in
            creativity. What you find just might surprise and inspire you.
          </p>
          <div className="button-group mt-8 block mb-6 mx-auto lg:mx-0 lg:mb-0 lg:flex">
            <button
              type="button"
              class="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 w-full lg:w-max dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign Up Now
            </button>
            <button
              type="button"
              class="text-orange-500 bg-transparent border border-orange-500 hover:bg-orange-500 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 w-full  lg:w-max dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="/assets/images/hero.svg"
            alt=""
            srcset=""
            className="w-[50rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
