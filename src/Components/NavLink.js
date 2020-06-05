import React, { Component } from 'react'
import "../style.css";
import ScrollUpButton from "react-scroll-up-button"; 
import {NavLink} from  'react-router-dom';

export default class home extends Component {
    render() {
        return (
            <div>

	<nav id="navbar">
		<div class="container">
			<ul>
			<li><NavLink to="/CS185-react" >Home</NavLink></li>
			<li><NavLink to="/CS185-react/images">Images</NavLink></li>
			<li><NavLink to="/CS185-react/videos">Videos</NavLink></li>
			<li><NavLink to="/CS185-react/Projects">Projects</NavLink></li>
			<li><NavLink to="/CS185-react/guestBook">GuestBook</NavLink></li>
			<li><NavLink to="/CS185-react/Movies">Movies</NavLink></li>


		
			</ul>
		</div>
    
	</nav>
    <ScrollUpButton />
  </div>



	
        )
    }
}
