import React, { Component} from 'react';
import './Movies.css';
import { SRLWrapper } from "simple-react-lightbox";
import config from '../config';
import 'react-widgets/dist/css/react-widgets.css';
import DropdownList from 'react-widgets/lib/DropdownList';



const firebase = require('firebase')

export default class MovieGallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            title: '',
            director:'',
            imdbRating: '',
            imdbID:'',
            poster: '',
            listOfMovies: [],
            listName: '',
            visible: 8,
            loading: false,
            search: '',
            open: false,
            selectedPost: null,
        }
        this.loadmore = this.loadmore.bind(this);
    }

    onchange = event =>{
        this.setState({search : event.target.value})
    }

    
    componentDidMount(){

        if (!firebase.apps.length) {
            firebase.initializeApp(config);
          }
 
        firebase.database().ref('Movies').on('value', snapshot => {
            const data = snapshot.val();
            const update = [];
            
            for (let d in data) {
                update.push({
                poster: data[d].Poster,
                title: data[d].Title,
                director: data[d].Director,
                imdbRating: data[d].imdbRating,
                imdbID: data[d].imdbID
                })

            }
            
            this.setState({data: update},
            () => {
                console.log(this.state.data)
                console.log(this.state.data)})
 
 
            })   

            firebase.database().ref('lists').on('value', snapshot => {
                
                const data = snapshot.val();
                const updateList = [];
                
                for (let d in data) {
                    updateList.push({
                    listName: data[d].name
                    })
    
                }
                
                this.setState({
                    listOfMovies: updateList},
                () => {
                    console.log(this.state.listOfMovies)
                    console.log(this.state.listOfMovies)})
     
     
                })   
          

    }

    searchMovies() {
        let movChoice = document.getElementById('search').value.toLowerCase();

        let ref = firebase.database().ref('Movies');
        ref.once('value').then(snapshot => {
        let data = snapshot.val();
            let update= [];
            for (let d in data) {
        
            let title = (data[d].Title).toLowerCase();
            
            if (title.includes(movChoice)) {
                update.push({
                    poster: data[d].Poster,
                    title: data[d].Title,
                    director: data[d].Director,
                    imdbRating: data[d].imdbRating,
                    imdbID: data[d].imdbID
                })
            }
            }
            this.setState({data: update});
        })
    }


    loadmore(){
        this.setState((res)=>{
            return {visible: res.visible + 8}
        })
    }
    
    deleteMovie(ID) {
        const imdbID = this.state.imdbID
        console.log(ID)
        let ref = firebase.database().ref('Movies/' + imdbID);
        ref.child(ID).remove()
       
        console.log('testDeleteButton')
    
    }

      
    render(){
        
        console.log(this.state.data)
        console.log(this.state.data)
                return (
            <SRLWrapper>
            <div >
                <h1>Movie Collection</h1>
           
                <DropdownList   class='dropdown'
                                defaultValue={'All'}
                                data={this.state.listOfMovies.map((d,index) => {
                                    return (
                                        d.listName)
                                })}
                            />
         
                                
            <div>
              <input type='textarea' id='search' name='search' />
              <button onClick={this.searchMovies.bind(this)}>Search</button>
            </div>




                {this.state.data.slice(0,this.state.visible).map((d, index)=>{
                    return(

                        <div id = 'info'>
                            <img src = {d.poster}
                            alt={d.title + " Director: " + d.director  + " IMDB Rating: " + d.imdbRating } >
                            </img>

                            <button  onClick={()=>{this.deleteMovie(d.imdbID)}}>Delete</button>
                        </div>
                        
                )
            })}

            <div class='load-button'>
                {this.state.visible < this.state.data.length && 
                <button type='button' onClick={this.loadmore}>Load more</button>
            }
            </div>
            </div>
        </SRLWrapper>
    );
  }
                        
} 

    
