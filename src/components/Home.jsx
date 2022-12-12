import React from "react";

import HeroImage2 from "../assets/ask2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contact from "./Contact";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <div>
      <div
        name="home"
        className="h-screen  w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div data-aos="fade-right" data-aos-duration="2000" className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl pt-20 lg:pt-0 font-bold text-white">
              I'm a Mern stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              I love to work on web application using technologies like
              React, Tailwind, Next JS and GraphQL.
            </p>

           <div className="flex gap-3">
              <div>
                <Link
                  to="portfolio"
                  smooth
                  duration={500}
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </Link>
              </div>
              <div>
                <a
                  href="https://drive.google.com/file/d/1wOhiZ6X6EXEyzUjUb5Gz_MIuiPqkSxv0/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                  smooth
                  duration={500}
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                  Resume
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </a>
              </div>
           </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="2000">
            <img
              src={HeroImage2}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 "
            />
          </div>
        </div>
      </div>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
   
  );
};

export default Home;
