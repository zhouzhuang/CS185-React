import React, { Component} from 'react';
import './Movies.css';
import { SRLWrapper } from "simple-react-lightbox";

const axios = require('axios');


export default class MovieGallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieCollection: [],
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        var data = [];
        let one   = 'https://www.omdbapi.com/?i=tt0848228&apikey=41ed690d'
        let two   = 'https://www.omdbapi.com/?i=tt0214341&apikey=41ed690d'
        let three = 'https://www.omdbapi.com/?i=tt0898266&apikey=41ed690d'
        let four  = 'https://www.omdbapi.com/?i=tt4520988&apikey=41ed690d'
        let five  = 'https://www.omdbapi.com/?i=tt7605074&apikey=41ed690d'
        let six   = 'https://www.omdbapi.com/?i=tt0374463&apikey=41ed690d'
        let seven = 'https://www.omdbapi.com/?i=tt1663662&apikey=41ed690d'
        let eight = 'https://www.omdbapi.com/?i=tt1675434&apikey=41ed690d'

        const requestOne = axios.get(one);
        const requestTwo = axios.get(two);
        const requestThree = axios.get(three);
        const requestFour = axios.get(four);
        const requestFive = axios.get(five);
        const requestSix = axios.get(six);
        const requestSeven = axios.get(seven);
        const requestEight = axios.get(eight);

        requestOne.then(res => {
            const dragonBall = res.data;
            data.push(dragonBall);
        })
        requestTwo.then(res => {
            const Avengers = res.data;
            data.push(Avengers);
        })
        requestThree.then(res => {
            const bigBang = res.data;
            data.push(bigBang);
        })
        requestFour.then(res => {
            const frozen = res.data;
            data.push(frozen);
        })
        requestFive.then(res => {
            const pacific = res.data;
            data.push(pacific);
        })
        requestSix.then(res => {
            const intouchable = res.data;
            data.push(intouchable);
        })
        requestSeven.then(res => {
            const pacifi = res.data;
            data.push(pacifi);
        })
        requestEight.then(res => {
            const star = res.data;
            data.push(star);
        })
      
        
        axios.all([requestOne,requestTwo,requestThree,requestFour,
                  requestFive,requestSix,requestSeven,requestEight])
                  .then(res => {
                    var data = [];
                    const movies = res.data;
                    data.push(movies);
                  })
                  
        this.setState({movieCollection: data});

    }

    render(){
        return (
            <SRLWrapper>
            <div >
                <h1>Movie Collection</h1>
                <p><em>Click <b>Movies</b> tab if empty</em> </p>
                {this.state.movieCollection.map((d, index)=>{
                    return(
                        <img className = "movies" src={d.Poster} 
                        alt={d.Title + " Director: " + d.Director  + " IMDB Rating: " + d.imdbRating } >
                        </img>
        
                    )})
                }
            </div>

        </SRLWrapper>
    );
  }
                        
} 

    
