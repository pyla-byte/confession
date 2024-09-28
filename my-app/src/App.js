import React from 'react';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import SuggestionCard from './components/SuggestionCard';
import './App.css';



function App() {
  return (
    <div className='bg-slate-900 min-h-screen'>
      <Sidebar />
      <div className="main-content">
        <SearchBar />
        <div className="suggestions">
          <SuggestionCard title="What is Perplexity AI?" />
          <SuggestionCard title="Why is Japan's GDP declining?" />
          <SuggestionCard title="Healthiest cooking oils" />
        </div>
      </div>
    </div>
  );
}

export default App; 