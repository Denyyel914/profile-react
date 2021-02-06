import React from 'react';
import Tenor from './img/tenor.gif';
import './contact.css';

const Contact = () => {
    return  <div class="wrapper-2 section" id="Contact">
       <div class="container">
          <div class="details">
             <h2>Contact Me</h2>
          </div>
          <div class="contact-grid">
             <div>
                <img src={Tenor} alt="" />
             </div>
             <div class="social-links">
                <h2>Discuss something?</h2>
                <p>Email: denielsalvacion@gmail.com</p>
                <p>Address: Philippines</p>
                <p>Contact: +63 961 039 2529</p>
                
                <div>
                   <h2>Get in touch</h2>
                   <a href="https://twitter.com/Denyyel"><i class="fab fa-twitter-square tw"></i></a>
                   <a href="https://github.com/Denyyel914"><i class="fab fa-github-square github"></i></a>
                   <a href="https://www.linkedin.com/in/deniel-salvacion-75aba31b4/"><i class="fab fa-linkedin link"></i></a>
                   <a href="https://www.facebook.com/denyyelkid/"><i class="fab fa-facebook-square fb"></i></a>
                   <a href="https://www.instagram.com/denyyel/"><i class="fab fa-instagram-square ig"></i></a>
                </div>
             </div>
          </div>
       </div>
    </div>
}

export default Contact;