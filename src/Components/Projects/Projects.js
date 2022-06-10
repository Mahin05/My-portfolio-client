import React, { useEffect, useState } from 'react';
import './Projects.css'
import phone from '../../assets/projects/phone.png';
import food from '../../assets/projects/food.png';
import toools from '../../assets/projects/tools.png';
import Project from '../../Project/Project';
import './Projects.css'
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://lit-sierra-13286.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div id='projects' className='max-w-7xl mx-auto'>
            <div>
                <h2 className='recipes-title mt-12'>MY PROJECTS</h2>
                {/* {
                    dataSearch.length === 0 ? <Loading></Loading> : ''
                } */}
                <div className="recipes-container">
                    {
                        projects.map(project => <Project
                            key={project._id}
                            project={project}
                        ></Project>)
                    }
                    {

                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;