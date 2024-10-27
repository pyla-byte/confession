import React from 'react'
import Loginbutton from '../../components/buttons/Loginbutton';
import Signupbutton from '../../components/buttons/Signupbutton';

function Homescreen() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-white text-8xl font-bold tracking-wide">CONFEE</h1>
        <p className="text-gray-400 text-lg mt-2">"Unveil your truths, anonymously."</p>
      </div>
      <div className="flex space-x-2 pr-30 py-3">
        <Loginbutton/>
        <Signupbutton />
      </div>
    </div>
  );
}
export default Homescreen