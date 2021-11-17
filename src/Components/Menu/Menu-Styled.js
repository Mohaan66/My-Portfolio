



import styled from 'styled-components';




export const StyledMenu = styled.nav`


 
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--clr-light);
  color: var(--clr-dark);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  bottom:0;
  left:0;
  
  
  transition: all 0.3s linear;;
  z-index: 10;

 .nav__list {
	list-style: none;
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: left;
	margin: 0;
	padding: 0;


}


 .nav__link {
	color: inherit;
	font-weight: var(--fw-bold);
	font-size: var(--fs-h1);
	text-decoration: none;
}

 .nav__link:hover {
	color: var(--clr-accent);
} 



`;