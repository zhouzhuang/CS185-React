import React from 'react';
import './App.css';
import home from './Components/home';
import images from './Components/images';
import videos from './Components/Videos';
import projects from './Components/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox";
import config from './config.js';

import Dashboard from './Components/dashboard/Dashboard';
import ProjectDetails from './Components/projects/ProjectDetails';
import Movies from './Components/Movies';
import AddMovie from './Components/addMovie';
import createList from './Components/createList';
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
    <Route path = '/CS185-react/config' exact component = {config} />
    <Route path = '/CS185-react/images/:id' />
    <Route path = '/CS185-react/guestBook' exact component = {Dashboard} />
    <Route path = '/CS185-react/project/:id'  exact component= {ProjectDetails} />
    <Route path = '/CS185-react/Movies'  exact component= {Movies} />
    <Route path = '/CS185-react/AddMovie' exact component = {AddMovie} />
    <Route path = '/CS185-react/createList' exact component = {createList} />
    
</Switch>
</Router>
<index/>

    </div>
    </SimpleReactLightbox>

  );
  } 
}



export default App;
