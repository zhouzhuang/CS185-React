import React, { Component } from 'react';
import "../style.css";
import ScrollUpButton from "react-scroll-up-button"; 


export default class Videos extends Component {
    
    render() {
        return (
            <div>
                <nav id="navbar">
		<div class="container">
			<ul>
				<li><a href="/CS185-react">Home</a></li>
				<li><a href="/CS185-react/images">Images</a></li>
				<li><a class="current" href="/CS185-react/videos">Videos</a></li>
				<li><a href="/CS185-react/projects">Projects</a></li>
			</ul>
		</div>

	</nav>
    <ScrollUpButton />

     <h1> Videos </h1>
            
        <div class="wrapper">
          

            <iframe title = 'v1' width="400" height="215"  src="https://www.youtube.com/embed/0eHukNfg8Lo"  frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <iframe title = 'v2' width="400" height="215"  src="https://www.youtube.com/embed/sRWjpjNVOCM" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <iframe title = 'v3' width="400" height="215" src="https://www.youtube.com/embed/_3YNL0OWio0" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <iframe title = 'v4' width="400" height="215" src="https://www.youtube.com/embed/qz2S2QqGjTE" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <iframe title = 'v5' width="400" height="215" src="https://www.youtube.com/embed/Ie4WZCLbtVs" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
            <iframe title = 'v6' width="400 " height="215" src="https://www.youtube.com/embed/4S37-oqh0XI" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>

<footer id="main-footer">
	<p>Copyright &copy; 2020, Joe Zhuang's Website for CMPSC 185</p>
</footer> 

        </div>


 
            </div>
        )
    }
}
