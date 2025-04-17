

import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
                <div className="navbarsection"> 
                    <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">SignIn</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                    </ul>
                    </nav>
                </div>
                
        </>
    )
}
export default Navbar

