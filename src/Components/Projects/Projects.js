import React from 'react';
import './Projects.css'
import phone from '../../assets/projects/phone.png';
import food from '../../assets/projects/food.png';
import toools from '../../assets/projects/tools.png';
const Projects = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div>
                <h2 className='recipes-title mt-12'>My Projects</h2>
                <div className="recipes-container">
                    <div class="card w-50 bg-set mx-5 my-5 shadow-xl">
                        <figure class="px-2 mt-4">
                            <img className='project-image' src={phone} alt="project" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title name-title">PHONE SHOP</h2>
                            <a target="__blank" href='https://online-phone-shop.netlify.app/'><h2 class="card-title">LIVE SITE</h2></a>
                            <p>This website is designed & developed to search your desired phone. You can search any branded any model smart phone & gears here.</p>
                            <div class="card-actions">
                                <button class="btn btn-ghost mt-3 seemore">See details</button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-50 bg-set mx-5 my-5 shadow-xl">
                        <figure class="px-2 mt-4">
                            <img src={food} alt="project" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title name-title">FOOD RECIPE</h2>
                            <a target="__blank" href='https://online-food-recipe.web.app/'><h2 class="card-title">LIVE SITE</h2></a>
                            <p>This website is designed & developed to search your desired food. After search you can see detailed recipe of the searced food but you must login.</p>
                            <div class="card-actions">
                                <button class="btn btn-ghost mt-3 seemore">See details</button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-50 bg-set mx-5 my-5 shadow-xl">
                        <figure class="px-2 mt-4">
                            <img src={toools} alt="project" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title name-title">TOOLS SHOP</h2>
                            <a target="__blank" href='https://islams-tools-shop.web.app/'><h2 class="card-title">LIVE SITE</h2></a>
                            <p>This is a warehouse management project. I built this site for a company.It is a perfect warehouse management system.</p>
                            <div class="card-actions">
                                <button class="btn btn-ghost mt-3 seemore">See details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;