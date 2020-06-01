import React, { Component } from 'react'
import config from '../config';
import {NavLink} from  'react-router-dom';
import ScrollUpButton from "react-scroll-up-button"; 

const firebase = require('firebase')
const axios = require('axios').default;

export default class addMovie extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
    }
    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 
    }
 
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
      }
    
    handleSubmit = (event)=> { 

        event.preventDefault();
        const data = new FormData(event.target);

        console.log("The value of FormData is", data)

        var Json = {};
        data.forEach(function(value, key){
            Json[key] = value;
        });

        var Error = false

        if (!Error) {
      
            const movieID = document.getElementById("imdbID").value;
            
            axios.get('https://www.omdbapi.com/?apikey=41ed690d&i='+ movieID )
            .then((response) => {
                firebase.database().ref('Movies').child(response.data.imdbID).set({
                    imdbID: response.data.imdbID,
                    Poster: response.data.Poster,
                    Title: response.data.Title,
                    imdbRating: response.data.imdbRating,
                    Director: response.data.Director,
                    Released: response.data.Released,
                    
                }); 
                 
            
            })
            .catch(function (error) {
                console.log(error);
            })
                alert("Movie added!")
        }
        
        else {
            alert("Please Enter a correct imdbID")
        }


     
    }

    render() {
        return (

            <div className="addNewMovie ">

        <nav id="navbar">
            <div class="container">
			<ul>
			<li><NavLink to="/CS185-react">Home</NavLink></li>
			<li><NavLink to="/CS185-react/images">Images</NavLink></li>
			<li><NavLink to="/CS185-react/videos">Videos</NavLink></li>
			<li><NavLink to="/CS185-react/Projects" >Projects</NavLink></li>
			<li><NavLink to="/CS185-react/guestBook">GuestBook</NavLink></li>
            <li><NavLink to="/CS185-react/Movies">Movies</NavLink></li>
            <li><NavLink to="/CS185-react/AddMovie" className='current'>Add Movie</NavLink></li>
            <li><NavLink to="/CS185-react/createList">Create List</NavLink></li>


			</ul>
		    </div>
        </nav>
                <h1>Add a new movie</h1>
                <p>Movie ID</p>
                
                <div className="add-movie" >
                <form onSubmit={this.handleSubmit}>  
                    <input type="textarea" id ="imdbID" name="imdbID" minLength ="7" maxLength="15"placeholder="imdb ID"/>
                    <div>
                    <input type="submit" name="Submit" value="Submit"/>
                    </div>
                    <p>Please give the imdbID of the movie.</p>
                    </form>
                </div>

                <ScrollUpButton />

		    </div>
            
        )
    }

}