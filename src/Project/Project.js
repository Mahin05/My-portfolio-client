import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css'

const Project = ({ project }) => {
    const { _id, name, img,liveSite, description, } = project;
    const navigate = useNavigate();
    const navigateToRecipeDetail = id => {
        navigate(`/project/${id}`);
    }
    return (
        <div class="card w-50 bg-base-100 mx-5 my-5 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="food" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title name-title">{name}</h2>
                <a target="__blank" href={liveSite}><h2 class="card-title live-site-style">LIVE SITE</h2></a>
                <p>{description}</p>
                <div class="card-actions">
                    <button onClick={() => navigateToRecipeDetail(_id)} class="btn btn-ghost mt-3 seemore">MORE DETAILS</button>
                </div>
            </div>
        </div>
    );
};

export default Project;