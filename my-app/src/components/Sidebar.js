import React from 'react'; 
import './Sidebar.css';

const Sidebar =()=>{
  return(
    <div className="sidebar">
       <ul>
        <li><i className="fas fa-home"></i> Home</li>
        <li><i className="fas fa-search"></i> Discover</li>
        <li><i className="fas fa-book"></i> Library</li>
        <li><i className="fas fa-sign-in-alt"></i> Sign In</li>
      </ul>
    </div>
  );
};

export default Sidebar;
