
import React from 'react';
import { bool } from 'prop-types';


import { StyledMenu } from './Menu-Styled';


const Menu = ({ open }) => {

   return (

   	<StyledMenu open={open}>
     


      <div className='navbar'>

            <nav className='nav'>
            <ul className='nav__list'>
            <li className='nav__item'><a href='#home' className='nav__link'>Home</a></li>
            <li className='nav__item'><a href='#service' className='nav__link'>My Services</a></li>
            <li className='nav__item'><a href='#about' className='nav__link'>About Me</a></li>
            <li className='nav__item'><a href='#work' className='nav__link'>My Work</a></li>


          </ul>

        </nav>

          </div>


     </StyledMenu>

   	)

}

Menu.propTypes = {
  open: bool.isRequired,
}


export default Menu;