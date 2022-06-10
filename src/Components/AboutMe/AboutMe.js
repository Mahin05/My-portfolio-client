import React from 'react';
import image from '../../assets/unnamed.jpg'

const AboutMe = () => {
    return (
        <div class="card w-100 bg-base-100 mx-auto mt-1">
            <div class="card-body">
            <figure class="px-10 pt-10">
                <img style={{
                    'width': '30%', 'height': '20%',
                }}
                    src={image}
                    alt="food"
                    class="rounded-xl" />
            </figure>
                <h2 class="card-title text-4xl name">MD MINHAJUL ISLAM MAHIN</h2>
                <p className="steps"><span className='title'>About Me:</span></p>
                <p className="others">I am a junior full stack web developer. I have vast knowledge in HTML, CSS, BOOTSTRAP, TAILWIND, JAVASCRIPT, REACTJS, NODEJS, EXPRESSJS, MONGODB, GITHUB, FIREBASE.</p>
                <p className="others">I have done so many projects. In case of any project you can hire me. I will be wholeheartedly dedicated to your work.</p>
            </div>
        </div>
    );
};

export default AboutMe;