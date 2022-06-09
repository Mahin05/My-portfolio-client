import React from 'react';
import image from '../../assets/unnamed.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img className='banner-image' src={image} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='banner'>
                    <h1 class="text-5xl font-bold">MD MINHAJUL ISLAM</h1>
                    <h1 class="text-3xl font-bold">FULL STACK DEVELOPER</h1>
                    <p class="py-6">Hello Good Peoples! I am MD MINHAJUL ISLAM a fullstack web developer. I have experience in REACTJS, NODEJS, MONGODB and many more...</p>
                    <a target="_blank" href='https://drive.google.com/file/d/1yavMu9BlW8VIndTuFhxx0Ds2_ll4aBYj/view?usp=sharing'><button class="btn btn-primary">DOWNLOAD RESUME</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;