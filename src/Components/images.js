import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
import "../style.css";
import { SRLWrapper } from "simple-react-lightbox";
import img01 from '../images/img1.jpg'
import img02 from '../images/img2.jpg'
import img03 from '../images/img3.jpg'
import img04 from '../images/img4.jpg'
import img05 from '../images/img5.jpg'
import img06 from '../images/img6.jpg'
import img07 from '../images/img7.jpg'
import img08 from '../images/img8.jpg'
import img09 from '../images/img9.jpg'
import {NavLink} from  'react-router-dom';


export default class Images extends Component {
    render() {


        return (
            <div>
                 <nav id="navbar">
		<div class="container">
			<ul>
			<li><NavLink to="/CS185-react">Home</NavLink></li>
			<li><NavLink to="/CS185-react/images"  className='current'>Images</NavLink></li>
			<li><NavLink to="/CS185-react/videos">Videos</NavLink></li>
			<li><NavLink to="/CS185-react/Projects">Projects</NavLink></li>
			<li><NavLink to="/CS185-react/guestBook">GuestBook</NavLink></li>
			<li><NavLink to="/CS185-react/Movies">Movies</NavLink></li>
			<li><NavLink to="/CS185-react/graph">Graph</NavLink></li>


			</ul>
		</div>
	</nav>
    <SRLWrapper>

	<ScrollUpButton />
	 
  
		<h2> Animal Crossing Gallery</h2>
		<p> Nintendo Switch </p>
	<section id="index-gallery" class = "wrapper-gallery" >

        <SRLWrapper>
		<div class = "gallery-img img1" > 
        <img src={img01} alt="img1" />
		</div>

		<div class = "gallery-img img2" > 
        <img src={img02} alt="img2" />
		</div>

		<div class = "gallery-img img3" > 
        <img src={img03} alt="img3" />
		</div>
	
		<div class = "gallery-img img4" > 
        <img src={img04} alt="img4" />
		</div>

		<div class = "gallery-img img5" > 
        <img src={img05} alt="img5" />
		</div>

		<div class = "gallery-img img6" >
        <img src={img06} alt="img6" />
		</div>
		
		<div class = "gallery-img img7" > 
        <img src={img07} alt="img7" />
		</div>

		<div class = "gallery-img img1" > 
        <img src={img08} alt="img8" />
		</div>
			
		<div class = "gallery-img img9" > 
        <img src={img09} alt="img9" />
		</div>
	
		<div class = "gallery-img img9" > 
			<div><a href="/#">Click to view</a></div> 
		</div>
        </SRLWrapper>
		<topBotton/>
			
    </section>
    </SRLWrapper>    
    <footer id="main-footer">
	<p>Copyright &copy; 2020, Joe Zhuang's Website for CMPSC 185</p>
</footer>
   
 </div>
        )
    }
}