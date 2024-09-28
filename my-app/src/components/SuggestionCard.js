import React from 'react'; 
// import './SuggestionCard.css';

const SuggestionCard =({title})=>{
  return(
<div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 px-25">
  <div class="p-4">
    <h5 class="mb-2 text-slate-800 text-xl font-semibold">
      Website Review Check Text
    </h5>
    <p class="text-black leading-normal font-light">
    TRIUMP 400X SCRAMBLER BIKE IS A COMBINATION OF SPORTY AND OFFROAD BIKES.
    </p>
  </div>
</div>

  
  );
};

export default SuggestionCard;
