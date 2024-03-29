import React from 'react';
import {Link} from "react-router-dom"
function Home() {
  return (
    <div className='bg-white-300 text-dark'>
      <div className='mx-auto text-center font-serif '>
        <Link to="/Home" className="mx-10 text-xl">Home</Link>
        <Link to="/ComicNovels" className="mx-10 text-xl">Comic&Novels</Link>
        <Link to="/Sciences" className="mx-10 text-xl">Sciences</Link>
        <Link to="/Business" className="mx-10 text-xl">Business and Economics</Link>
        <Link to="/Support" className="mx-10 text-xl">Customer Support</Link>
      </div>
      <div className='font-serif 'style={{ marginLeft: '50rem', marginTop: '2rem'}}>
        <h2 className='text-4xl'>ALL E-BOOKS</h2>
      </div>

      <div className='cropped-image'>
        <img src='https://via.placeholder.com/192x280' alt='Book Cover'  />
        <div className='title text-xl'>
          รายละเอียด
        </div>
        <div> 
        <button className="btn-details ">ราคา</button>
        </div>
      </div>
 

      <div className='cropped-image'>
        <img src='https://via.placeholder.com/192x280' alt='Book Cover'  />
        <div className='title text-xl'>
          รายละเอียด
        </div>
        <div> 
        <button className="btn-details2 ">ราคา</button>
        </div>
      </div>

      <div className='cropped-image'>
        <img src='https://via.placeholder.com/192x280' alt='Book Cover'  />
        <div className='title text-xl'>
          รายละเอียด
        </div>
        <div> 
        <button className="btn-details3">ราคา</button>
        </div>
      </div>

      <div className='cropped-image'>
        <img src='https://via.placeholder.com/192x280' alt='Book Cover'  />
        <div className='title text-xl'>
          รายละเอียด
        </div>
        <div> 
        <button className="btn-details4 ">ราคา</button>
        </div>
      </div>

      <div className='cropped-image'>
        <img src='https://via.placeholder.com/192x280' alt='Book Cover'  />
        <div className='title text-xl'>
          รายละเอียด
        </div>
        <div> 
        <button className="btn-details5 ">ราคา</button>
        </div>
      </div>
 
      

    </div>
  );
}

export default Home
