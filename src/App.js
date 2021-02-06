import React from 'react';
import './App.css';
import projectData from './project-data';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  const date = new Date().getFullYear();
  return <div>
    <Header />
    <About />
    <div class="wrapper" id="Projects">
            <div class="container section">
                <div class="details">
                    <h2>Projects</h2>
                </div>
            </div>
            <div class="container">
            <div class="grid-3">
       {projectData.map(data => {
         return <Project
            key={data.key} 
            link={data.imgUrl} 
            image={data.location} 
            details={data.title} />
       })}
                </div>
            </div>
        </div>
    <Contact />
    <Footer year={date}/>
  </div>
}

export default App;
