import React from 'react';
import Loginbutton from '../../components/buttons/Loginbutton';
const Form=()=>
{
    return(
        <div className="bg-gray-800 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white text-center mb-6">LOGIN</h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                    <input type="email" id="email" className="w-full mt-1 px-3 py-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-400">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full mt-1 px-3 py-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="It's not 12345!"/>
                </div>
                <Loginbutton/>
            </form>
           
        </div>
    </div>
    )
}

export default Form