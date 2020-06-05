import React, { Component } from 'react'
import "../style.css";
import ScrollUpButton from "react-scroll-up-button"; 
import {NavLink} from  'react-router-dom';

export default class home extends Component {
    render() {
        return (
            <div>
   
      <div id="main-header">
		<h1>My raw website</h1>
	</div>

	<div>
	<nav id="navbar">
		<div class="container">
			<ul>
			<li><NavLink to="/CS185-react" className='current'>Home</NavLink></li>
			<li><NavLink to="/CS185-react/images">Images</NavLink></li>
			<li><NavLink to="/CS185-react/videos">Videos</NavLink></li>
			<li><NavLink to="/CS185-react/Projects">Projects</NavLink></li>
			<li><NavLink to="/CS185-react/guestBook">GuestBook</NavLink></li>
			<li><NavLink to="/CS185-react/Movies">Movies</NavLink></li>
			<li><NavLink to="/CS185-react/graph">Graph</NavLink></li>

		
			</ul>
		</div>
    
	</nav>
  </div>
  <div></div>
  <ScrollUpButton />

	<section id="showcase">
		<div class="container">
		<h1> This website is a class assignment of CMPSC 185.</h1>
		</div>
	</section>
		
		<div class="links">
			<a href="https://google.com">Google</a> &nbsp; &nbsp;
			<a href="https://github.com/zhouzhuang?tab=repositories">My Github Repo Page</a> &nbsp; &nbsp;
			<a href="https://github.com/zhouzhuang/CS185-React">Link to my master branch</a> 
		</div>

	<section id="main">
	


		</section>

<br/>


<br/>
<br/>



	<div>
		<center><h2>About me</h2></center>	
			
			<div id="image-index">
			<div>
				<img src ={require('../images/pistachios.jpg')} alt = "pistachois" />
				</div>
		    </div>

			<span > Pistachios are my favorite snack. <em>The pistachio, a member of the cashew family, 
			is a small tree originating from Central Asia and the Middle East.
			The tree produces seeds that are widely consumed as food. 
			Pistacia vera often is confused with other species in the genus Pistacia that are also known as pistachio.</em>
			<br/><br/>
			Pistachio nuts are not only tasty and fun to eat but also super healthy.

			These edible seeds of the Pistacia vera tree contain healthy fats and are a good source of protein, fiber, and antioxidants.

			What’s more, they contain several essential nutrients and can aid weight loss and heart and gut health.

			Interestingly, people have been eating pistachios since 7000 BC. Nowadays, they're very popular in many dishes, including ice cream and desserts (1Trusted Source).
			Here are 9 evidence-based health benefits of pistachios.

			<br/><br/>
			What's more, they're delicious, versatile, and fun to eat. For most people, including pistachios in their diet is a great way to improve overall health.

      </span>
      <footer id="main-footer">
	<p>Copyright &copy; 2020, Joe Zhuang's Website for CMPSC 185</p>
</footer>
			</div>

            </div>
        )
    }
}
