import React from 'react';
import image from '../../assets/unnamed.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img className='banner-image-style' src={image} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='banner'>
                    <h1 class="text-4xl font-bold name-style">MD MINHAJUL ISLAM MAHIN</h1>
                    <h1 class="text-2xl font-bold title-style">FULL STACK DEVELOPER</h1>
                    <p class="py-6 about-style">Hello, Good Peoples! I am <span className='name-again-style'>MD MINHAJUL ISLAM MAHIN</span> a fullstack web developer. I have experiences in REACTJS, NODEJS, MONGODB and many more...</p>
                    <a target="_blank" href='https://drive.google.com/file/d/1yavMu9BlW8VIndTuFhxx0Ds2_ll4aBYj/view?usp=sharing'><button class="btn btn-style-set-resume">DOWNLOAD RESUME</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;