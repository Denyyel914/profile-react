import React from "react";
import Image from  './img/deniel2.jpg';
import './about.css';

const About = () => {
  return (
    <div>
         <div class="container section" id="About">
         <div class="details">
            <h2>About me</h2>
         </div>
      </div>
        <section class="section flex">
        <div class="div1">
            <img src={Image} alt="" />
        </div>
        <div class="div2">
            <p>
            I'm Deniel Salvacion. I recently graduated from Far Eastern University 
            with a bachelor's degreee in Information Technology.
            </p>
            <div class="margin-2">
            <p>
            I'm an aspiring Front End Developer who is passionate and loves 
            to build cool and useful applications.
            </p>
            <p class="bold">
                Here are some technologies I've been working and improving with
                recently
            </p>
            <div class="grid-ul">
                <ul>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Php</li>
                <li>Node.js</li>
                <li>Express.Js</li>
                </ul>

                <ul>
                <li>Materialize Css</li>
                <li>Bootstrap Css</li>
                <li>React js</li>
                <li>Git</li>
                <li>Mysql</li>
                </ul>
            </div>
            </div>
        </div>
        </section>
    </div>
  );
};

export default About;