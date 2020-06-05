import React, { Component } from 'react'
import "../style.css";
import ScrollUpButton from "react-scroll-up-button"; 
import {NavLink} from  'react-router-dom';
import MovieGallery from './MovieGallery';
import './Movies.css';

  
export default class Movies extends Component {


    render() {

        return (
            <div>
                 <nav id="navbar">
		<div class="container">
			<ul>
			<li><NavLink to="/CS185-react">Home</NavLink></li>
			<li><NavLink to="/CS185-react/images">Images</NavLink></li>
			<li><NavLink to="/CS185-react/videos">Videos</NavLink></li>
			<li><NavLink to="/CS185-react/Projects" >Projects</NavLink></li>
			<li><NavLink to="/CS185-react/guestBook">GuestBook</NavLink></li>
      <li><NavLink to="/CS185-react/Movies" className='current'>Movies</NavLink></li>
      <li><NavLink to="/CS185-react/AddMovie">Add Movie</NavLink></li>
      <li><NavLink to="/CS185-react/createList">Create List</NavLink></li>
      <li><NavLink to="/CS185-react/graph">Graph</NavLink></li>


			</ul>
		</div>
	</nav>



  <MovieGallery />
	<ScrollUpButton />

	<footer id="main-footer">
	<p>Copyright &copy; 2020, Joe Zhuang's Website for CMPSC 185</p></footer>
            </div>
        )
    }
}
