import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  
 
} from "@fortawesome/free-brands-svg-icons";




export default function Services() {

	return(

		<>
  
        
		<section className="myservices" id="service">
			<h2 className="section__title section__title--services">What I do</h2>
			<div className="services">
				<div className="service">
				<h3> Design + Development</h3>
				<p>I can design and develop frontend web applications using the HTML, CSS, Js, React & Redux and 
				build tools make sense in the context of the technical architecture.
				Creates and maintains website layout and design, and works with tools to improve design
				Consults with content providers regarding web site development assignments and Web Development
                Develops themes and assets for content management systems to support design and content work
                for maintenance and other tasks on existing sites Assist content providers with updating website content
                Participates as a team member in web site development projects. (Web Development)

                </p>
			</div> 	
			<div className="service">
				<h3>Html + Css + Js + React & Redux</h3>
				<p> using the latest technolagies I developed projects including this portfolio page.
				I can build and design web applications and websites with css, html, javascript, react and redux and some more.
				 

	            </p>
			</div> 	
		    </div> 
		    <a href="#work" className="btn">My Work </a>
		</section>
    
     
    
		<section className="about-me" id="about">
		
			<h2 className="section__title section__title--about">Who I am </h2>
			<p className="section__subtitle section__subtitle--about">
				Front End Web Developer and Designer.


			</p>
			
			<div className="about-me__body">
				
				<p> Highly motivated Self-taught Front-end Web developer and Designer seeking a career building web applications and services.
				    familiar with development and deployment process for many web-based technologies.

				</p>
				<p>
				I have experience as a self-thought web developer primarily working with front-end languages and frameworks 
				such as HTML5, CSS3, SaaS, JavaScript, react, redux, and some backend tools Node.js, express.js, PostgreSQL.
               </p>
                
				<p>
				I have built my portfolio page and projects. I'm really excited to work in an environment that takes real care
				that their process is as good as it can be. 
                ultimately I'm a developer because I love to learn new things and problem-solving! 
                working hard is very much part of my personality and the short time I've been in development 
                I'm immensely proud of what I've managed to achieve.
				</p>
			</div> 
			<img src="img/mohaan2.jpg" alt="mohaan leaning on bus" class="about__me-img" /> 
		</section>

		<section class="my-work" id="work">
			<h2 class="section__title">My Work</h2>
			<p class="section__subtitle-work">A Selection range of my Projects can be found my Git hub Acount.</p>
			<div class="portofolio">
				
				<a href="#" class="portofolio__item">
				<img src="img/portofolio-01.jpg" alt="" class="portofolio__img" /></a>
			
				<a href="#" class="portofolio__item">
				<img src="img/portofolio-02.jpg" alt="" class="portofolio__img" /></a>
				{/* portofolio__item-01 */}
				<a href="#" class="portofolio__item">
				<img src="img/portofolio-03.jpg" alt="" class="portofolio__img" /></a>
				{/* portofolio__item-01 */}
				<a href="#" class="portofolio__item">
				<img src="img/portofolio-04.jpg" alt="" class="portofolio__img" /></a>
				
				<a href="#" class="portofolio__item">
				<img src="img/portofolio-05.jpg" alt="" class="portofolio__img" /></a>
				
				<a href="#" class="portofolio__item">
				<img src="img/portofolio-06.jpg" alt="" class="portofolio__img" /></a>
			
				<a href="#" class="portofolio__item">
				<img src="img/portofolio-07.jpg" alt="" class="portofolio__img" /></a>
				
				<a href="#" class="portofolio__item">
				<img src="img/portofolio-08.jpg" alt="" class="portofolio__img" /></a>

				
				
				

			</div>
		</section>
		

         

		<footer className='footer'>
           
      <h3>Social Follow</h3>
      <a  href="https://linkedin.com/in/mohaan-abdi-54248a192/" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>


      
		<a href="https://github.com/Mohaan66"
		  className="github social">
		  <FontAwesomeIcon icon={faGithub} size="2x" />
		</a>
	

		</footer>

		</>
		  


			
			





			








			);
}
