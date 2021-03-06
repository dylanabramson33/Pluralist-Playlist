import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Link from 'react-router-dom/Link';
import Box from "./Box.js"
import "./Selector.css";



class Selector extends Component {

  constructor(props){
    super(props);


  }

  render (){

    if(this.props.isAuthenticated){
      return(
        <div className="Selector">
          <h1> What do you want to do? </h1>
          <Link to="/create">

            <Box action="Create Party" description="Spotify Premium Only"> </Box>
          </Link>
          <Link to="/search">
            <Box  action="Search Party" description="Search for a Party"> </Box>
          </Link>
        </div>
      );
    }
    else{
      return(
        <div className="Selector">
          <h1> What do you want to do? </h1>
          <Link to="/register">
            <Box action="Create Party" description="Create a New Party"> </Box>
          </Link>
          <Link to="/search">
            <Box  action="Search Party" description="Search for a Party"> </Box>
          </Link>
        </div>
      );

    }


  }



}



export default Selector;
