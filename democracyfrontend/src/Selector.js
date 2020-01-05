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
    return(
      <div className="Selector">
        <Link to="/create">
          <Box action="Create Party" description="Create a New Party"> </Box>
        </Link>
        <Link to="/search">
          <Box  action="Search Party" description="Search for a New Party"> </Box>
        </Link>
      </div>
    );

  }



}



export default Selector;