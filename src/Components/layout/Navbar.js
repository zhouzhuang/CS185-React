import React from 'react';
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
            <li><NavLink to ='/' className ='btn btn-floating pink lighten-1'>M</NavLink></li>
			<li><NavLink to="/CS185-react/Movies">Movies</NavLink></li>
			<li><NavLink to="/CS185-react/graph">Graph</NavLink></li>


			</ul>
		</div>
        <ScrollUpButton />

            </div>
        </nav>
        
    )
}

export default Navbar;