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
      src: reactApp,
      path:'https://education-corner-quiz.netlify.app/'
    },
    {
      id: 2,
      src: techAcademy,
    },
    {
      id: 3,
      src: tvHouse,
    },
    {
      id: 4,
      src: learners,
    },
    {
      id: 5,
      src: dentFit,
    },
    {
      id: 6,
      src: fitness,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,path }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={path}>Live Site</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
