import React, { Component } from 'react';
import config from '../../config.js'
import '../../App.css';
const firebase = require('firebase')

export class Notifications extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        name: '',
        description: '',
        message: '',
        ifPost: 'Yes',
        email: '',
      }
    }
  
    componentDidMount(){
      
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
      
      firebase.database().ref('SayHi').on('value', snapshot => {
          const data = snapshot.val();
          const update = [];
          
          for (let d in data) {
             update.push({
              date: data[d].date,
              name: data[d].name,
              description: data[d].description,
              message: data[d].message,
              ifPost: data[d].ifPost,
              email: data[d].email,
            })

          }
          
          this.setState({data: update});
      })
    }
  
    render() {
      return (
        <div>
            <h1> </h1> Message Collection
            <div className = 'center-col'>
           
            {this.state.data.map((d, index) => {
                if(d.ifPost === 'Yes') {
                    return (
                     <div>
                        <p>Date: {d.date}<br/></p> 
                        <p>Name: {d.name}<br/></p>
                        <p>Bio: {d.description}<br/></p>
                        <p>Message: {d.message}</p>
                        <hr/>
                      </div>
               
                    )
                }
              })}
          
              </div>
        </div>
      );
      }
    }

export default Notifications;