import React from "react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div
        className={`flex items-center p-2 bg-[black] lg:p-0 h-[70px] justify-between lg:justify-around  w-[screen]`}
      >
        <div className=" text-3xl font-bold text-[#00df9a]">E educate</div>

        <div className="hidden  text-xl lg:flex lg:items-center lg:space-x-16 cursor-pointer text-white ml-52">
          <ul className=" md:flex xl:space-x-16 xl:pr-40">
            <li className="p-2 m-4 hover:bg-[#00df9a] hover:rounded-xl hover:scale-110 duration-1000 hover:px-3 ">
              Home
            </li>
            <li className="p-2 m-4 hover:bg-[#00df9a] hover:rounded-xl hover:scale-110 duration-1000 hover:px-3 ">
              Company
            </li>
            <li className="p-2 m-4 hover:bg-[#00df9a] hover:rounded-xl hover:scale-110 duration-1000 hover:px-3 ">
              Resources
            </li>
            <li className="p-2 m-4 hover:bg-[#00df9a] hover:rounded-xl hover:scale-110 duration-1000 hover:px-3 ">
              About
            </li>
            <li className="p-2 m-4 hover:bg-[#00df9a] hover:rounded-xl hover:scale-110 duration-1000 hover:px-3 ">
              Contact
            </li>
          </ul>
        </div>

        <div
          className="lg:hidden
        "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
            onClick={() => setOpen(!open)}
          >
            {console.log(open)}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={`${
          open
            ? "bg-[black] flex items-center justify-start pt-10 flex-col gap-[5vh] text-2xl w-[30vw] xsm:w-[20vw] h-[100vh] absolute top-0 self-start"
            : "hidden"
        }  `}
      >
        <h1 className=" text-3xl font-bold text-[#00df9a]">E educate</h1>
        <ul className=" text-white">
          <li className="p-2 m-4 hover:border-b-2  border-[#00df9a] hover:scale-110 duration-1000 hover:px-3 ">
            Home
          </li>
          <li className="p-2 m-4 hover:border-b-2  border-[#00df9a] hover:scale-110 duration-1000 hover:px-3  ">
            Company
          </li>
          <li className="p-2 m-4 hover:border-b-2  border-[#00df9a] hover:scale-110 duration-1000 hover:px-3  ">
            Resources
          </li>
          <li className="p-2 m-4 hover:border-b-2  border-[#00df9a] hover:scale-110 duration-1000 hover:px-3  ">
            About
          </li>
          <li className="p-2 m-4 hover:border-b-2  border-[#00df9a] hover:scale-110 duration-1000 hover:px-3  ">
            Contact
          </li>
        </ul>
        <div
          className="absolute top-0 cursor-pointer right-0 p-4"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className=" items-center flex-col justify-center w-screen gap-[4vh] flex "></div>
      </div>
    </>
  );
};

export default Navbar;
