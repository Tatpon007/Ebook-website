import React from 'react';
import { Link } from "react-router-dom"
function Support() {
  return (
    <div className='bg-white-300 text-dark'>
      <div className='mx-auto text-center font-serif '>
        <Link to="/Home" className="mx-10 text-xl">Home</Link>
        <Link to="/ComicNovels" className="mx-10 text-xl">Comic&Novels</Link>
        <Link to="/Sciences" className="mx-10 text-xl">Sciences</Link>
        <Link to="/Business" className="mx-10 text-xl">Business and Economics</Link>
        <Link to="/Support" className="mx-10 text-xl">Customer Support</Link>
      </div>
      <div className='container mx-auto'>
        <div className='font-serif' style={{ marginLeft: '30rem', marginTop: '2rem' }}>
        <h2 className='text-4xl'>CUSTOMER SUPPORT</h2>
      </div>
        <div className='sup'style={{ marginLeft: '18rem' }}>
          <div className='ข้อความ'>
            <h1 className='text-2xl'>
              Problem Title
            </h1>
            <input type="text" id="search-navbar" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search E-Books" style={{ width: '25rem' }} />
            <h2 className='text-2xl'>
              Description
            </h2>
            <input type="text" id="search-navbar" className="block w-full p-10 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search E-Books" style={{ width: '25rem' }} />
          </div>

          <div>
            <button class="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600" style={{ marginLeft: '19rem', marginTop: '2rem' }}>Add to Cart</button>
          </div>


        </div>

      </div>


    </div>
  );
}

export default Support