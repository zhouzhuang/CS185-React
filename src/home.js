import React, { Component } from 'react'
import "./style.css";
import ScrollUpButton from "react-scroll-up-button"; 

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
				<li><a class="current" href="/">Home</a></li>
				<li><a href="images">Images</a></li>
				<li><a href="videos">Videos</a></li>
				<li><a href="projects">Projects</a></li>
		

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
			<a href="https://github.com/zhouzhuang/CS185-Assignment1">Link to my master branch</a> 
		</div>

	<section id="main">
		<h1>Welcome</h1>
	


		</section>

<br/>


<br/>
<br/>

	

	<div>
			<h2>About me</h2>
			
			<div id="image-index">
			<div><a href="./images/pistachios.jpg">
				<img src ={require('./images/pistachios.jpg')} alt = "pistachois" /></a>
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
