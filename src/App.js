import React from 'react';
import './App.css';
import home from './Components/home';
import images from './Components/images';
import videos from './Components/Videos';
import projects from './Components/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox";

class App extends React.Component {

  render(){
  return (

    <SimpleReactLightbox>

    <div class = "App">
          <Router>
          <Switch>
    <Route path = '/'  exact component = {home} />
    <Route path = '/images' component = {images} className = 'images' />
    <Route path = '/videos' component = {videos} />
    <Route path = '/projects' component = {projects} />
    <Route path = 'images/:id' />

</Switch>
</Router>
<index/>

    </div>
    </SimpleReactLightbox>

  );
  } 
}


export default App;
