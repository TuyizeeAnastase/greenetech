import React from 'react';
import './App.css';
import './script';


import Card from './sections/card/Card';
import Contact from './sections/contact/Contact';
import Team from './sections/team/Team';
import Footer from './sections/footer/Footer';
import About from './sections/about/About';
import Navigation from './sections/navigation/Navigation'
import Works from './sections/project/Works';

function Home (){    
      return (
          <div >
         <Navigation />
         <section id="services" className="works">
           <Works/>
           </section>
           <section id="works" className="services">
           <Card />
           </section>
           <section id="about" className="home">
            <About />
          </section>
          <section id="team" className="team">
         <Team />
      </section>
      <section id="contact" className="contact">
             <Contact />
      </section>
         <Footer />
           </div>
        );
}

export default Home;
