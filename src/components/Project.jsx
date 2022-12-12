import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const { id, name, path, description, img } = project
    console.log(img)
    return (
           
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                src={img}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
             
              <h2 data-aos="fade-down" data-aos-duration="2000" className=" py-1 rounded text-center bg-slate-800 w-2/3 mx-auto mt-4  duration-200 hover:scale-105" >{name}</h2>
               
         
              <div className="flex items-center justify-center">
                <button className="  m-4 duration-200 hover:scale-105">
                  <a href={path} target="_blank" rel="noreferrer">Live Site</a>
                </button>
                <button className="  m-4 duration-200 hover:scale-105">
                  Code
                </button>
                <Link to={`/project-details/${id}`}>Project Details</Link>
              </div>
            </div>
          
    );
};

export default Project;