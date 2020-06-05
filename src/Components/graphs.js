import React, { Component } from 'react'
import config from '../config';
import ScrollUpButton from "react-scroll-up-button"; 
import {NavLink} from  'react-router-dom';

var d3 = require("d3");
const firebase = require('firebase')
	
var tooltip = d3.select("body")
.append("div")
.style("opacity", 0)
.style("position", "absolute")
.style("background-color", "#white")
.style("border", "solid")
.style("border-width", "2px")
.style("padding", "3px")

export default class graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieNodes: {},
            linkNodes: {},
            actorNode: {},
            actorLink: {}
        } 
    }

    drag = (simulation) => {
        function dragStarted(d) {
            if(!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragEnded(d) {
            if(!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
        
        return d3.drag()
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end", dragEnded);
    }

    chart(nodes, links) {
        const width = 1920;
        const height = 1080;
        
        const obj_links = links.map(d => Object.create(d));
        const obj_nodes = nodes.map(d => Object.create(d));

        const svg = d3.create("svg")
            .attr("viewBox", [0, 0, width, height]);
        const radius = (node) =>{
            if (node.group === 'actor')
                return 15;
            return 75;
        }

        const color = (node) => {
            if (node.group === 'actor') // it's the actor
                return d3.color("steelblue")

            return null;
        }

        const simulation = d3.forceSimulation(obj_nodes)
            .force("link", d3.forceLink().links(links).id(d => { return d.index; }).distance(500))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width/2, height/2));
        
        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(obj_links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value));

        var defs = svg.append("svg:defs")

        const poster = (node) => {
            if (node.group === "movie") {
                defs.append('svg:pattern')
                    .attr('id', 'id'+ node.id)
                    .attr('svg:patternUnits', 'svg:objectBoundingBox')
                    .attr('width', 1)
                    .attr('height', 1)
                    .append('svg:image')
                    .attr('xlink:href', node.poster)
                    .attr("width", 300)
                    .attr("height", 384)
                    .attr("x", -100)
                    .attr("y", -50);
                console.log(node.poster)
                return "url(#id" + node.id+ ')'
            }
            return d3.color("steelblue")
        }
        
        var mouseover = function(d) {
            tooltip.style("opacity", 1)
            d3.select(this)
                .style("stroke", "black")
                .style("opacity", 100)
        }
        var mousemove = function(d) {
            tooltip
            .html(d.name) 
            .style('left', d3.event.x +'px')
            .style('top',  d3.event.y + 20 + 'px')

        }
        var mouseleave = function(d) {
            tooltip.style("opacity", 0)
            d3.select(this)
                .style("stroke", "#fff")
        }

        const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(obj_nodes)
            .join("circle")
            .attr("r", radius)
            .attr("fill", poster)
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
            .call(this.drag(simulation))
                    
        simulation.on("tick", () => {
            link   
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        });

        return svg.node();
    }            

    AccessingFirebase (data) {
            var Movienodes = [];
            var Movielinks = [];
            var movieindex = 0;
            const keys = Object.keys(data);

            for (let i = 0; i < keys.length; i++) {
                const d = keys[i];
                var movieNodes = {}
                var movieActors =  data[d]["Actors"]
                var actors = movieActors.split(', ')
                console.log(actors)

                movieNodes["poster"] = data[d]["Poster"];
                movieNodes["name"] = data[d]["Title"];
                movieNodes["id"] = d;
                movieNodes["group"] = "movie"; 
                Movienodes.push(movieNodes);
                movieindex = Movienodes.length - 1;
                console.log(movieNodes['name'])
                for (var j = 0; j < actors.length; j++) {
                    for (var x = 0; x < Movienodes.length; x++) {
                        if(Movienodes[x]["group"] === "actor" && Movienodes[x]["name"] === actors[j]) {
                            console.log(Movienodes[x]["name"])
                            var link = {}
                            link["source"] = x;
                            link["target"] = movieindex;
                            Movielinks.push(link)
                        }
                    }
                        var actorNode = {}
                        var actorLink = {}

                        actorNode["name"] = actors[j];
                        actorNode["group"] = "actor";
                        Movienodes.push(actorNode)

                        actorLink["source"] = Movienodes.length-1;
                        actorLink["target"] = movieindex;

                        Movielinks.push(actorLink)

                }
            }
            
            this.setState({
                movieNodes: Movienodes,
                linkNodes: Movielinks
            })
        }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 

        let ref = firebase.database().ref('GraphViz')
        ref.on('value', snapshot => {
            var data = snapshot.val()
            this.AccessingFirebase(data)
        })
    }
    
    componentDidUpdate() {
        const elem = document.getElementById("mySvg");
        const movieLength = Object.keys(this.state.movieNodes).length;
        const linkLength = Object.keys(this.state.linkNodes).length
        if (movieLength !== 0 && linkLength !== 0) elem.appendChild(this.chart(this.state.movieNodes, this.state.linkNodes)); 
        else d3.selectAll("svg > *").remove();

    }


    render() {
        return (
            <div id="mySvg">
                
            <nav id="navbar">
                <div class="container">
                    <ul>
                    <li><NavLink to="/CS185-react" >Home</NavLink></li>
                    <li><NavLink to="/CS185-react/images">Images</NavLink></li>
                    <li><NavLink to="/CS185-react/videos">Videos</NavLink></li>
                    <li><NavLink to="/CS185-react/Projects">Projects</NavLink></li>
                    <li><NavLink to="/CS185-react/guestBook">GuestBook</NavLink></li>
                    <li><NavLink to="/CS185-react/Movies">Movies</NavLink></li>
                    </ul>
                </div>
            </nav>
    <ScrollUpButton />

            </div>
        )
    }
}