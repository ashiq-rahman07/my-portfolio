import React from "react";


import reactApp from "../assets/portfolio/reacapp.png"
import techAcademy from "../assets/portfolio/techaca.png"
import tvHouse from "../assets/portfolio/tvhouse.png"
import learners from "../assets/portfolio/learners.png"
import dentFit from "../assets/portfolio/dentfit.png"
import fitness from "../assets/portfolio/fitness.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: 'Education Corner',
      src: reactApp,
      path:'https://education-corner-quiz.netlify.app/'
    },
    {
      id: 2,
      name: 'Tech Academy',
      src: techAcademy,
    },
    {
      id: 3,
      name: 'Tv House',
      src: tvHouse,
    },
    {
      id: 4,
      name: 'Learners',
      src: learners,
    },
    {
      id: 5,
      name: 'Dent Fitt',
      src: dentFit,
    },
    {
      id: 6,
      name: 'Fitness ',
      src: fitness,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full mb-50 text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,path,name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
             
              <h2 data-aos="fade-down" data-aos-duration="2000" className=" py-1 rounded text-center bg-slate-800 w-2/3 mx-auto mt-4  duration-200 hover:scale-105" >{name}</h2>
               
         
              <div className="flex items-center justify-center">
                <button className="  m-4 duration-200 hover:scale-105">
                <a href={path}>Live Site</a>
                </button>
                <button className="  m-4 duration-200 hover:scale-105">
                  Code
                </button>
                <a href="">Project Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
