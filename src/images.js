import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

import "./style.css";
export default class Images extends Component {
    render() {
        return (
            <div>
                 <nav id="navbar">
		<div class="container">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a class="current" href="/images">Images</a></li>
				<li><a href="/videos">Videos</a></li>
				<li><a href="/projects">Projects</a></li>
			</ul>
		</div>
	</nav>
	<ScrollUpButton />
     <h1 id = "h11"> Images </h1>
	 

	<section id="index-gallery" class = "wrapper-gallery">
		<p> Nitendo Switch </p>
		<h2> Animal Crossing Gallery</h2>

		<div class = "gallery-img img1" > 
			<div><a href="/#">Click to view</a></div> 
		</div>

		<div class = "gallery-img img2" > 
			<div><a href="/#">Click to view</a></div> 
		</div>

		<div class = "gallery-img img3" > 
			<div><a href="/#">Click to view</a></div> 
		</div>
	
		<div class = "gallery-img img4" > 
			<div><a href="/#">Click to view</a></div> 
		</div>

		<div class = "gallery-img img5" > 
			<div><a href="/#">Click to view</a></div> 
		</div>

		<div class = "gallery-img img6" >
			<div><a href="/#">Click to view</a></div>
		</div>
		
		<div class = "gallery-img img7" > 
			<div><a href="/#">Click to view</a></div> 
		</div>

		<div class = "gallery-img img1" > 
			<div><a href="/#">Click to view</a></div> 
		</div>
			
		<div class = "gallery-img img8" > 
			<div><a href="/#">Click to view</a></div> 
		</div>
	
		<div class = "gallery-img img9" > 
			<div><a href="/#">Click to view</a></div> 
		</div>
		<topBotton/>
			
    </section>

    <footer id="main-footer">
	<p>Copyright &copy; 2020, Joe Zhuang's Website for CMPSC 185</p>
</footer>

            </div>
        )
    }
}
