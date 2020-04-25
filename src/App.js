import React from 'react';
import './App.css';
import home from './home';
import images from './images';
import videos from './Videos';
import projects from './Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {

  render(){
  return (


    <div class = "App">
          <Router>
          <Switch>
    <Route path = '/'  exact component = {home} />
    <Route path = '/images' component = {images} />
    <Route path = '/videos' component = {videos} />
    <Route path = '/projects' component = {projects} />
    <Route path = 'images/:id' />

</Switch>
</Router>
<index/>

    </div>
  );
  } 
}

export default App;
