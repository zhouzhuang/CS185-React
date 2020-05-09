import React from 'react';
import { Link } from 'react-router-dom';
import ScrollUpButton from "react-scroll-up-button"; 
import {NavLink} from  'react-router-dom';
import '../../style.css';
const Navbar = () => {
    return (
        <nav className='nav-wrapper'>
            <div className='container'>
        
		<div class="container">
			<ul>

			<li><NavLink to="/CS185-react">Home</NavLink></li>
			<li><NavLink to="/CS185-react/images">Images</NavLink></li>
			<li><NavLink to="/CS185-react/videos">Videos</NavLink></li>
			<li><NavLink to="/CS185-react/Projects" className='current'>Projects</NavLink></li>
			<li><NavLink to="/CS185-react/guestBook" >GuestBook</NavLink></li>
		
			</ul>
		</div>
        <ScrollUpButton />

            </div>
        </nav>
        
    )
}

export default Navbar;