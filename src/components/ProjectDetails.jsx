import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = ({}) => {
    const [projects, setProjects] = useState([]);
console.log(projects)
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
          <div>
                <div data-aos="fade-right" data-aos-duration="2000" className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl pt-20 lg:pt-0 font-bold text-white">
                        Project Details
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I love to work on web application using technologies like
                        React, Tailwind, Next JS and GraphQL.
                    </p>

                    <div>

                    </div>
                </div>
                <div>

                </div>
          </div>
            
        </div>
    );
};

export default ProjectDetails;