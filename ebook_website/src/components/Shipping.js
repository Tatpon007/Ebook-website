import React from 'react'
import { Link } from "react-router-dom"
function Shipping() {
    return (
        <div>
            <div className='bg-white-300 text-dark'>
                <div className='mx-auto text-center font-serif '>
                    <Link to="/Home" className="mx-10 text-xl">Home</Link>
                    <Link to="/ComicNovels" className="mx-10 text-xl">Comic&Novels</Link>
                    <Link to="/Sciences" className="mx-10 text-xl">Sciences</Link>
                    <Link to="/Business" className="mx-10 text-xl">Business and Economics</Link>
                    <Link to="/Support" className="mx-10 text-xl">Customer Support</Link>
                </div>
            </div>
            <div className='u'>

                <div class="container mx-auto px-4 py-8">
                    <h1 className='text-4xl font-bold'>SHIPPING ADDRESS</h1>
                </div>


                <div className='container mx-auto px-4 py-8'>
                    <div className="box">
                        <ul class="list">
                            <li>Account</li>
                            <li class="py-2"><Link to="/User">Profile</Link></li>
                            <li class="py-2"><Link to="/Payment">Payment Method</Link></li>
                            <li class="py-2"><Link to="/Shipping">Shipping Address</Link></li>
                            <li class="py-2"><Link to="/OrderHi">Order History</Link></li>
                            <li class="py-2"><Link to="/CustomerE">Customer Support</Link></li>
                            <li>Delete Account</li>
                        </ul>
                    </div>
                    <div className='boxs'>
                        <ul>
                            <li className='text-xl'>First Name</li>
                            <input type="text" className="block w-full p-1 ps-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ width: '20rem' }} placeholder="Username" ></input>
                        </ul>

                        <ul className='a' style={{ marginLeft: '2rem' }}>
                            <li className='text-xl'>Address Detail</li>
                            <input type="text" className="block w-full p-1 ps-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ width: '20rem' }} placeholder="Email" ></input>
                        </ul>

                        <ul className='a' style={{ marginTop: '5rem', marginLeft: '-42rem' }}>
                            <li className='text-xl'>Last Name</li>
                            <input type="text" className="block w-full p-1 ps-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ width: '20rem' }} placeholder="Email" ></input>
                        </ul>


                        <ul className='a' style={{ marginTop: '10rem', marginLeft: '-20rem' }}>
                            <li className='text-xl'>Phone number</li>
                            <input type="text" className="block w-full p-1 ps-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ width: '20rem' }} placeholder="Phone Number" ></input>
                        </ul>

                        <ul className='a' style={{ marginTop: '5rem', marginLeft: '2rem' }}>
                            <li className='text-xl'>Post Code</li>
                            <input type="text" className="block w-full p-1 ps-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ width: '20rem' }} placeholder="Email" ></input>
                        </ul>



                        <div className='b' style={{ marginTop: '15rem', marginLeft: '-35rem' }}>
                            <Link to="/ShippingEDIT" class="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600">EDIT</Link>
                        </div>

                    </div>

                </div>

            </div>





        </div>








    );
}

export default Shipping;