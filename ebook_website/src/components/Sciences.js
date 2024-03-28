import React from 'react';
import {Link} from "react-router-dom"
function Sciences() {
  return (
    <div className='bg-white-300 text-dark'>
      <div className='mx-auto text-center font-serif '>
        <Link to="/Home" className="mx-10 text-xl">Home</Link>
        <Link to="/ComicNovels" className="mx-10 text-xl">Comic&Novels</Link>
        <Link to="/Sciences" className="mx-10 text-xl">Sciences</Link>
        <Link to="/Business" className="mx-10 text-xl">Business and Economics</Link>
        <Link to="/Support" className="mx-10 text-xl">Customer Support</Link>
      </div>
      <div className='font-serif    'style={{ marginLeft: '50rem', marginTop: '2rem'}}>
        <h2 className='text-4xl'>ALL E-BOOKS</h2>
      </div>
    </div>
  );
}

export default Sciences
