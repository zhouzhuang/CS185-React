import React from 'react';
import config from '../../config';
import BaseSelect from 'react-select';
import FixRequiredSelect from "./FixRequiredSelect";

const firebase = require('firebase')

const options = [
    { value: 'Yes', label: 'Yes' , name:'ifPost'},
    { value: 'No', label: 'No' , name:'ifPost'},
  ]

  const Select = props => (
  <FixRequiredSelect
    {...props}
    SelectComponent={BaseSelect}
    options={props.options || options}
  />
);
class ProjectSummary extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
      }
      
    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        console.log("The value of FormData is", data)

        var Json = {};
        data.forEach(function(value, key){
            Json[key] = value;
        });

        var Error = false

        if (!Error) {
            
            Json["date"] = new Date().toLocaleString();
            firebase.database().ref('SayHi').push().set(Json);
            alert("Your message was sent!")
        }
        
        else {
            alert("Failed to send greeting. You are missing required fields")
        }

    }

  
    componentDidMount() {
        
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
        let ref = firebase.database().ref('SayHi')
    	ref.on('value', snapshot => {
		const data = snapshot.val()
        this.setState({data: data})
        console.log("show me some data")
	})
    }

    
    render(){
    return (
        
   
        <div className='card z-depth-0 project-summary'>
            
            <div className='card-conteng grey-text text-darken-3'>
                <span className='card-title'>Talk to me, and optionally let everyone know you visited! (* area is required)</span>
        
             
                <form onSubmit={this.handleSubmit}>  
          
                <div>
                    * What is your name?
                    <label for="name"></label>
                    <br/>
                    <input type="text" name="name" minlength="6" maxLength="19" required/>
                </div>
                <div>           
                    Offer a short description of yourself     
                    <label for="description"></label>
                    <br/>
                    <input type="text" name="description" maxLength="99"/>
                </div> 
                <div>
                    * What have you to say?
                    <label for="message"></label>
                    <br/>
                    <input type="text" name="message" minlength="16" maxLength="499" required/>
                </div>   
                <div>
                    <div >
                    * Would you like your name and message to be viewable by the other guests of this site? 
                    <br/>

                    <Select options={options} isSearchable required  name='ifPost'/>
                     
                      
                    </div>
                </div> 
                <div>
                    If you would like me to be able to contact you, what is your email? (it will not be posted)
                    <label for="form-email"></label>
                    <br/>
                    <input type="email" name="email"/>
                </div>
                <input type="submit" name="Send Message" value="Send Message"/>
            
            </form>
                <p className='grey-text'>May 2020</p>
            </div>


 
        </div>
    )
    }
}

export default ProjectSummary;