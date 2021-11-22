import React from 'react';
import logo from '../../logo.png';

//import index from '../../index.css';

const Introduction = () => {

	
  return (
   <section className="intro" id="home">
			<h1 className="section__title section__title--intro">
				Hi, I am <strong>Mohamed Abdi</strong>
			</h1>
			<p className="section__subtitle section__subtitle--intro"> front End web developer.</p>
			  <img className="intro__img"  src={logo} alt="" />
		</section>
 );


}


export default Introduction;