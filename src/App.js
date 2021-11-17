import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './Global';
import Burger from './Components/Burger/Burger'
import Menu from './Components/Menu/Menu'
import Introduction from './Components/Introduction/Introduction';
import Services from './Components/Services/Services';

//import FocusLock from 'react-focus-lock';








 function App() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

	

		
		

   return (
    <div className='App'>
     
   
     <GlobalStyles />
      <Introduction />
      <Services />
   


      <div ref={node}>
     
    
    

    
     <Menu  open={open} setOpen={setOpen} />
     <Burger open={open} setOpen={setOpen} />

     
     
     </div>
     </div>


  );
 }


export default App;
