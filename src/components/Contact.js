import React from 'react'
//import Header from './Header'

const Contact = () => {
  return (
    <>  
    <div className="bg-gray-100">
    <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
            <form>
                <div className="mb-4">
                    <label for="name" className="block text-gray-700 font-medium">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" required />
                </div>
                <div className="mb-4">
                    <label for="email" className="block text-gray-700 font-medium">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" required />
                </div>
                <div className="mb-4">
                    <label for="message" className="block text-gray-700 font-medium">Message</label>
                    <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" required></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default Contact