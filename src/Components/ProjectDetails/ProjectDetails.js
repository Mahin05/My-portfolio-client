import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css'

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    useEffect(() => {
        const url = `https://lit-sierra-13286.herokuapp.com/project/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id])
    return (
        <div class="card w-100 bg-base-100 shadow-xl mx-auto mt-1">
            <figure class="px-10 pt-10">
                <div class="carousel w-full">
                    <div id="slide1" class="carousel-item relative w-full">
                        <img  src={project.img} class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <img src={project.img2}class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <img src={project.img3}class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </figure>
            <div class="card-body">
                <h2 class="card-title text-4xl name">{project.name}</h2>
                <p className="steps"><span className='title'>Description:</span></p>
                <p className="others">{project.description}</p>
                <p className="steps"><span className='title'>Live Site:</span></p>
                <a className='text-primary' target="__blank" href={project.liveSite}><p className="others">{project.liveSite}</p></a>
                <p className="steps"><span className='title'>Client Side Code:</span></p>
                <a className='text-primary' target="__blank" href={project.clientSide}><p className="others">{project.clientSide}</p></a>
                <p className="steps"><span className='title'>Server Side Code:</span></p>
                <a className='text-primary' target="__blank" href={project.serverSide}><p className="others">{project.serverSide}</p></a>
            </div>
        </div>
    );
};

export default ProjectDetails;