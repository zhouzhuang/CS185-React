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
    <Router >
    <Switch>
    <Route path = '/CS185-react'  exact component = {home} />
    <Route path = '/CS185-react/images' exact component = {images} className = 'images' />
    <Route path = '/CS185-react/videos' exact component = {videos} />
    <Route path = '/CS185-react/projects' exact component = {projects} />
    <Route path = '/CS185-react/images/:id' />

</Switch>
</Router>
<index/>

    </div>
    </SimpleReactLightbox>

  );
  } 
}


export default App;
