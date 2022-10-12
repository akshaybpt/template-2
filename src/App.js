import React from 'react';
import Home from'./component/home';
import Feature from'./component/feature';
import Screenshot from'./component/screenshot';
import Navigationbar from './component/nav';

const App=()=> {
    return (      
       <div>
        <Navigationbar />
             <Home />
             <Feature />
             <Screenshot />
       </div>
        
    );
  
}
 
export default App;