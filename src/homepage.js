import React from "react";

const Home = () => {
  return (
    <div className="text-white  bg-[#000000ea]  xsm:h-auto w-full lg:h-fit xl:h-[100vh] xsl:overflow-hidden flex flex-col xl:flex xl:flex-row justify-between z-0">
      <div className="max-w-[800px] mt-[-100px] md:mt-[100px] p-5 w-full h-auto pt-40 mx-auto lg:text-justify lg:m-1 md:p-10 lg:pl-10 xl:text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold text-3xl ">
          Education is a Global community
        </p>
        <h1 className="lg:xl  xl:text-7xl sm:text-5xl   text-3xl font-bold ">
          Take Your time to Decide your life
        </h1>
        <div className="xsm:flex xsm:flex-col md:flex justify-center items-center">
          <p className="md:text-4xl xsm:text-8xl lg:xl sm:text-3xl text-base font-bold py-4">
            we don't just teach &nbsp;
            <span className="writer">
              <span
                className="xsm font-bold md:text-4xl sm:text-3xl text-[#00df9a] text-base"
                id="writer_text"
              >
                we inspire more
              </span>
            </span>
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Education is the passport to the future, for tomorrow belongs to those
          who prepare for it today.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#7ee9c9] hover:scale-110 duration-1000">
          Get Started
        </button>
      </div>
      <div className="pr-1 xsm:float-left lg:pt-[-8vh] xl:pt-14">
        <img
          src="../assets/home.png"
          alt="Not found"
          height="100px"
          className="mt-2 m-auto xl:mt-7"
        />
      </div>
    </div>
  );
};

export default Home;
