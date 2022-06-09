import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;