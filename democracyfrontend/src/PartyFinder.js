import React, { useEffect, useState } from 'react';
import './PartyFinder.css';
import  Song from './Song';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';


function PartyFinder() {


  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("");
  const [partys,setPartys] = useState([]);

  useEffect(() => {
      getPartys();

  },[query])

  const getPartys = async () => {
    const response = await fetch(`http://127.0.0.1:8000/partys/name=${search}`);
    const data = await response.json();
    setPartys(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);

  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="PartyFinder">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" value={search} onChange={updateSearch} />
        <button className="search-button">
          Search
        </button>
      </form>
      {partys.map(party => (
        <Link to={`partys/${party.id}`}><h1> {party.party_name} </h1></Link>
      ))}

    </div>
  );
}

export default PartyFinder;