import React from 'react'; 
import './SearchBar.css';

const SearchBar=()=>{
  return(
    <div className="searchbar">
       <input type="text" placeholder="Ask anything...."></input>
       <button>Search</button>
    </div>
  );
};

export default SearchBar;
