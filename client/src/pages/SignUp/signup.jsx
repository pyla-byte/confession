import React from 'react';
import Loginbutton from '../../components/buttons/Loginbutton';
const Signup = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center py-12">
            <h1 className="text-white text-4xl font-serif mb-8">SIGNUP</h1>
            <div className="border-t border-gray-300 w-1/3 mb-12"></div>

            <div className="w-1/3 flex flex-col items-start space-y-4">
                <label className="text-white text-2xl font-medium">EMAIL</label>
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />  
                
            </div>
            <div className="w-1/3 flex flex-col items-start space-y-4">
                <label className="text-white text-2xl font-medium pt-5">NAME</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
            </div>
            <div className="w-1/3 flex flex-col items-start space-y-4">
                <label className="text-white text-2xl font-medium pt-5">PASSWORD</label>
                <input
                    type="text"
                    placeholder="It's not 12345!"
                    className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
            </div>
            <div className="w-1/3 flex flex-col items-start space-y-4">
                <label className="text-white text-2xl font-medium pt-5">CONFIRM PASSWORD</label>
                <input
                    type="text"
                    placeholder="It's not 12345!"
                    className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                
            <div className="pl-2 py-7">
          <Loginbutton/>
          </div>
        </div>
          
    );
};

export default Signup;