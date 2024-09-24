import React from 'react'; 
// import './SuggestionCard.css';

const SuggestionCard =({title})=>{
  return(
    <div className="sidebar">
       <h3>{title}</h3>
    </div>
  );
};

export default SuggestionCard;
