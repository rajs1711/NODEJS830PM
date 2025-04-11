

import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
               <nav>
                  <Link to="/">Home</Link>
                  <Link to="/login">SignIn</Link>
                  <Link to="/signup">SignUp</Link>
                </nav>
            
        </>
    )
}
export default Navbar

