import React, { Component } from 'react'
import config from '../config';
import {NavLink} from  'react-router-dom';

const firebase = require('firebase')


export default class createList extends Component {
 
    constructor() {
        super();
        this.state = {
           name: '',
           lists:{
               name:''
           }
        }

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
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event)=>{
        
        event.preventDefault();
      

        var Error = false
        const ref = firebase.database().ref('lists');

        if (!Error) {
            var listTitle = document.getElementById('createList').value;

        ref.orderByChild(listTitle).equalTo(this.state.name).on('value', function (snapshot) {
                
                if (!snapshot.exists()) {
                ref.child( listTitle).set({
                   name:listTitle
                }
              )
                alert('List added!');

            }
                else{
                    alert('List title has been taken, please enter a new title')
                }
          
         
        });
    }
}

    render() {
        return (
            <div className="add-create-body">
                 <nav id="navbar">
            <div class="container">
			<ul>
			<li><NavLink to="/CS185-react">Home</NavLink></li>
			<li><NavLink to="/CS185-react/images">Images</NavLink></li>
			<li><NavLink to="/CS185-react/videos">Videos</NavLink></li>
			<li><NavLink to="/CS185-react/Projects" >Projects</NavLink></li>
			<li><NavLink to="/CS185-react/guestBook">GuestBook</NavLink></li>
            <li><NavLink to="/CS185-react/Movies">Movies</NavLink></li>
            <li><NavLink to="/CS185-react/AddMovie">Add Movie</NavLink></li>
            <li><NavLink to="/CS185-react/createList" className='current'>Create List</NavLink></li>


			</ul>
		    </div>
        </nav>

                <h1>Create a new List</h1>
                <p>List Title</p>
                <div className="CreateList" >

                <form onSubmit={this.handleSubmit}>  
                    <input type="textarea" id ="createList" name="createList" minLength ="2" maxLength="50"  placeholder="ListTitle"/>
                    <div>
                    <input type="submit" name="Submit" value="Submit"/>
                    </div>
                    <p>Please enter a title for the new list</p>
                    </form>
                </div>

            
              
		    </div>
        )
    }
}