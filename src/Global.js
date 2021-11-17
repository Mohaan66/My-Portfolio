import { createGlobalStyle} from 'styled-components';



export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before{
	box-sizing: border-box;
}

:root {
	--ff-primary: 'Lora', serif;
	--ff-secondary: 'Roboto Slab', serif;


	--fw-reg:400;
	--fw-bold:700;

	--clr-light: #fff;
	--clr-dark: #303030;
	--clr-accent: #16e0bd;


	--fs-h1: 3rem;
	--fs-h2: 2.25rem;
	--fs-h3: 1.25rem;
	--fs-body: 1rem;

	--bs: 0.25em 0.25em 0.75em rbga(0,0,0,.25),
	       0.125em 0.125em 0.25em rgba(0,0,0,.15);
}

@meadia (min-width: 800px){
	:root {
		--fs-h1: 4.5rem;
		--fs-h2: 3.7rem;
		--fs-h3: 1.5rem;
		--fs-body: 1.25rem;
	}
}

html {
	scroll-bahavior: smooth;
}

body{
	background: var(--clr-light);
	color: var(--clr-dark); 
	margin:0;
	font-family: var(--ff-primary);
	font-size: var(--fs-body);
	line-height: 1.6;

}


section {
	padding: 5em 2em;
}

img {
	display: block;
	max-width: 100%;
	heigh: 70%;
}

Strong { font-weight: var(--fw-bold)}

:focus {
	outline: 3px solid var(--clr-accent);
	outline-offset: 3px;
}



h1,
h2,
h3 {
	line-height: 1em;
	margin: 0;
}

h1 { font-size: var(--fs-h1)}
h2 { font-size: var(--fs-h2)}
h3 { font-size: var(--fs-h3)}


.section__title {
	margin-bottom: .25em;
	font-size: h3;
	

}

.section__title--intro {
	font-weight: var(--fw-reg);

}

.section__title--intro Strong {
	display: block;
}
.section__subtitle {
	margin: 0;
	font-size: var(--fs-h3);
}

.section__subtitle--intro,
.section__subtitle--about {
	background: var(--clr-accent);
	padding: .25em 1em;
	font-family: var(--ff-secondary);
	font-weight: var(--fw-bold);
	margin-bottom: 1em;
}


.intro__img {
	box-shadow: var(--bs);
}

.section__subtitle--intro {
	display: inline-block;
}
	@media (min-width: 600px) {
	.intro {
		display: grid;
		width:min-content;
		margin:auto;
		grid-column-gap:1em;
		grid-template-areas:
		"img title"
		"img subtitle";
		grid-template-columns: min-content max-content;
	}

	.intro__img {
		grid-area: img;
		
		min-width:250px;
		position:relative;
		z-index: 2;
	}

.section__subtitle--intro {
	align-self: start;
	grid-column: -1 / 1;
	grid-row: 2;
	text-align: right;
	position:relative;
	left:-1.5em;
	width: calc(100% + 1.5em);
}

}


.myservices {
	background: var(--clr-dark);
	background-image: url(img/services-bg.png);
	background-size: cover;
	color: var(--clr-light);
	/* background-blend-mode: multiply; */
    text-align: center;
}

.section__title--services {
	color: var(--clr-accent);
	display:relative;
	
}

.section__title--services::after {
	content: '';
	display: block;
	width: 3em;
	height: 1px;
	margin: 0.5em auto 1em;
	background: var(--clr-light);
	opacity: 0.5;


}
.service {
	margin-bottom: 4em;
}
.service {
	max-width: 500px;
	margin-left:auto;
	margin-right:auto;

}



@media (min-width: 800px) {
	.services {
		display: flex;
		max-width: 1000px;
		margin: 0 auto;

	}

	.service + .service {
		margin-left: 2em;
	}
}


.about-me {
	max-width:1000px;
	margin: 0 auto;
}

.about__me-img {
	box-shadow: var(--bs);
}

@media(min-width:600px) {
	.about-me {
		display:grid;
		grid-template-columns: 2r 200px;
		grid-template-areas:
		"title img"
		"subtitle img"
		"text img";
		grid-column-gap: 2em;
	}


	.section__title--about
	 {
		grid-area: title;
		

	}

	.section__subtitle--about {
		grid-column: 1 / -1;
		grid-row: 2;
		position: relative;
		left: -1em;
		width: calc(100% + 2em);
		padding-left: 1em;
	    padding-right: calc(200px + 4em);

	}

	.about__me-img {
		grid-area: img;
		position:relative;
		z-index: 2;
	}
    .about-me__body {
    	text-align:left;
    }

}


.btn {
	display: inline-block;
	padding: .5em 2.5em;
	background: #f14e4e;
	color: var(--clr-dark);
	text-decoration: none;
	cursor: pointer;
	font-size: .8rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: var(--fw-bold);
	transition: transform 200ms ease-in-out;
}

.btn:hover {
	transform: scale(1.1);

}




.my-work {
	background: var(--clr-dark);
	color: var(--clr-light);
	text-align: center;
}


.portofolio {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.portofolio__item {
	//background: var(--clr-accent);
	overflow: hidden;
}

.portofolio__img {
	transition: 
	  transform 750ms cubic-bezier(.5, 0, .5, 1),
	  opacity 250ms linear;
}

.portofolio__item:focus {
	position:relative;
	z-index: 2;
}

.portofolio__img:hover,
.portofolio__item:focus .portofolio__img {
	transform: scale(1.2);
	opacity: .5;
}





.footer {
	background: #111;
	color: var(--clr-accent);
	text-align: center;
	padding: 2.5em 0; 
}

.footer a { color: #f2f2f2;
            text-decoration: none; }

            a.social {
			  margin: 0 1rem;
			  transition: transform 250ms;
			  display: inline-block;
}




h3 {
 
  padding: 2.3em 0;
}



a.social {
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
}



a.social:hover {
  transform: translateY(-2px);
}



a.linkedin {
  color: #FFFFFF;
}

a.github {
  color: #FFFFFF;
}

a.twitter {
  color: #FFFFFF;
}



`