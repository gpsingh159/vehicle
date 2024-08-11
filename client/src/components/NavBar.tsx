import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar: React.FC = () => {    
   
    return (
        <nav>
            <div className="nav-wrapper #673ab7 deep-purple">
                <NavLink to="/" className="brand-logo left">Vehical App</NavLink>
                <ul id="nav-mobile" className="right">
                    <li><NavLink to="/" >Home</NavLink> </li>

                    {
                       
                            <>
                                <li><NavLink to="/society">About Society</NavLink> </li>
                                <li><NavLink to="/create">Add Vehical Data </NavLink> </li>
                               
                            </>
                    } 

                </ul>
            </div>
        </nav>
    )
}

export default NavBar