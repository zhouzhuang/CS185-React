import React, { Component } from 'react'
import "../style.css";
import ScrollUpButton from "react-scroll-up-button"; 
import {NavLink} from  'react-router-dom';

export default class Projects extends Component {
    render() {
        return (
            <div>
                 <nav id="navbar">
		<div class="container">
			<ul>
			<li><NavLink to="/CS185-react">Home</NavLink></li>
			<li><NavLink to="/CS185-react/images">Images</NavLink></li>
			<li><NavLink to="/CS185-react/videos">Videos</NavLink></li>
			<li><NavLink to="/CS185-react/Projects" className='current'>Projects</NavLink></li>
			</ul>
		</div>

	</nav>
	<ScrollUpButton />

        <h1> Projects </h1>
	    <div id = "pro1">	
			<a href="https://cs56-w20-project-zhouzhuang.herokuapp.com">
			<img src = {require("../projects/eqSearch.jfif") } alt ='earthquake search' /></a>
		</div>
        <span> <b>Earthquake Search:</b> <em>Earthquakes in the last 30 days</em></span>

		<div id = "pro2">
		<a href="https://cs56-s20-zhouzhuang-lab04.herokuapp.com">
		<img src = {require('../projects/RatCal.jfif')} alt="Earthquake Search" />	</a>
	
			
		</div>
        <span> <b>Basic Calculator:</b> <em> Simple Calculations</em></span>


	<footer id="main-footer">
	<p>Copyright &copy; 2020, Joe Zhuang's Website for CMPSC 185</p></footer>
            </div>
        )
    }
}
