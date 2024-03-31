import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Modal from 'react-modal';
function OrderM() {

    const [modalIsOpen, setModalIsOpen] = useState(false);


    const openModal = () => {
        setModalIsOpen(true);

    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    return (
        <div className='bg-white-300 text-dark'>
            <div className='mx-auto text-center font-serif '>
                <Link to="/UserM" className="mx-10 text-xl">User Management</Link>
                <Link to="/Stock" className="mx-10 text-xl">Stock Management</Link>
                <Link to="/OrderM" className="mx-10 text-xl">Order Management</Link>
                <Link to="/CustomerM" className="mx-10 text-xl">Customer Support Management</Link>
            </div>

            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold' style={{ marginTop: '2rem', marginLeft: '0rem' }}>ORDER MANAGEMENT</h1>
            </div>

            <div class="flex justify-center items-center mt-7 mb-7">
                <div class="overflow-x-auto w-11/12">
                    <table class="w-full bg-white shadow-md rounded border border-gray-300">
                        <thead class="bg-green-500 text-white">
                            <tr>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm border-b border-gray-300">Order Id</th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm border-b border-gray-300" style={{}}>Customer Name</th>
                                <th class="text-left py-3 scroll-p-1 uppercase font-semibold text-sm border-b border-gray-300">Payment status</th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm border-b border-gray-300">Shipping status</th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm border-b border-gray-300">  </th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700">
                            {/* <!-- Repeat for each user --> */}
                            <tr>
                                <td class="text-left py-3 px-4 border-b border-gray-300">00001</td>
                                <td class="text-left py-3 px-4 border-b border-gray-300">Jonathan001</td>
                                <td class="bg-red-400 text-white px-3 py-0 rounded-full">FAIL</td>
                                <td class="bg-blue-300 text-white px-3 py-0 rounded-full">IN TRANSIT</td>
                                <td class="flex justify-start space-x-1 py-3 px-4 border-b border-gray-300">
                                    <button class="bg-blue-500   0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
                                        Update
                                    </button>
                                </td>
                            </tr>
                            {/* <!-- ... other users --> */}
                        </tbody>


                        <tbody class="text-gray-700">
                            {/* <!-- Repeat for each user --> */}
                            <tr>
                                <td class="text-left py-3 px-4 border-b border-gray-300">00002</td>
                                <td class="text-left py-3 px-4 border-b border-gray-300">Jonathan001</td>
                                <td class="bg-red-400 text-white px-3 py-0 rounded-full">FAIL</td>
                                <td class="bg-gray-300 text-white px-3 py-0 rounded-full">PENDING</td>
                                <td class="flex justify-start space-x-1 py-3 px-4 border-b border-gray-300">
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
                                        Update
                                    </button>
                                </td>
                            </tr>
                            {/* <!-- ... other users --> */}
                        </tbody>

                        <tbody class="text-gray-700">
                            {/* <!-- Repeat for each user --> */}
                            <tr >
                                <td class="text-left py-3 px-4 border-b border-gray-300">00003</td>
                                <td class="text-left py-3 px-4 border-b border-gray-300">Jonathan001</td>
                                <td class="bg-green-500   text-white px-3 py-0 rounded-full">SUCCESS</td>
                                <td class=" bg-green-500   text-white px-3 py-0 rounded-full">DELIVERED</td>
                                <td class="flex justify-start space-x-1 py-3 px-4 border-b border-gray-300">
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
                                        Update
                                    </button>
                                </td>
                            </tr>
                            {/* <!-- ... other users --> */}
                        </tbody>

                    </table>
                </div>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{ content: { width: '50%', height: '100%', margin: 'auto' } }}>
                <div>
                    <h2 className='text-2xl' style={{ marginLeft: '30rem' }}>ORDER SUMMARY</h2>
                    <form>
                        <div>
                            <h1 className='text-xl'>Order Id</h1>
                            <input type="text" className="block w-64 p-3 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." ></input>
                        </div>
                        <div>
                            <h2 className='text-xl'>Customer Name</h2>
                            <input type="text" className="block w-64 p-3 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." ></input>
                        </div>
                        <div>
                            <h2 className='text-xl'>Email</h2>
                            <input type="text" className="block w-64 p-3 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." ></input>
                        </div>
                        <div>
                            <h2 className='text-xl'>Phonenumber</h2>
                            <input type="text" className="block w-64 p-3 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." ></input>
                        </div>
                        <div>
                            <h2 className='text-xl'>Address detail</h2>
                            <input type="text" className="block w-64 p-3 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." ></input>
                        </div>
                        <div>
                            <h2 className='text-xl'>Post Code</h2>
                            <input type="text" className="block w-64 p-3 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." ></input>
                        </div>
                        <div>
                            <h2 className='text-xl'>Amout</h2>
                            <input type="text" className="block w-64 p-3 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." ></input>
                        </div>
                        <div>
                            <h2 className='text-xl'>Total Price</h2>
                            <input type="text" className="block w-64 p-3 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." ></input>
                        </div>

                        <div>
                            <h1 className='text-xl'>Payment Status</h1>
                            <h2 class="bg-green-500 block w-64 text-white px-3 py-3 rounded-full">SUCCESS</h2>
                        </div>

                        <div>
                            <h1 className='text-xl'>Shipping Status</h1>

                        </div>

                        <div className='flex ' style={{ marginLeft: '1rem', marginTop: '18rem' }}>
                            <button className="bg-green-500 text-white px-16 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600 mt-8" onClick={closeModal}>CONFIRM</button>
                            <button className="bg-gray-500 text-black px-16 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600 mt-8" onClick={closeModal}>CANCEL</button>

                        </div>
                        <div className='flex'>
                            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                                <img src='https://via.placeholder.com/130x170' alt='Book Cover' class="rounded" style={{ marginLeft: '27rem', marginTop: '-65rem' }}/>
                            </div>
                            <div class="w-full md:w-1/2"style={{ marginLeft: '10rem', marginTop: '-63rem' }}>
                                <p class="text-xl font-semibold mb-1">ชื่อหนังสือ </p>
                                <p class="text-sm mb-1">Ebook ID </p>
                                <p class="text-sm mb-1">Category</p>
                                <p class="text-sm font-semibold mb-1">ราคา</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                                <img src='https://via.placeholder.com/130x170' alt='Book Cover' class="rounded" style={{ marginLeft: '27rem', marginTop: '-50rem' }}/>
                            </div>
                            <div class="w-full md:w-1/2"style={{ marginLeft: '10rem', marginTop: '-50rem' }}>
                                <p class="text-xl font-semibold mb-1">ชื่อหนังสือ </p>
                                <p class="text-sm mb-1">Ebook ID </p>
                                <p class="text-sm mb-1">Category</p>
                                <p class="text-sm font-semibold mb-1">ราคา</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                                <img src='https://via.placeholder.com/130x170' alt='Book Cover' class="rounded" style={{ marginLeft: '27rem', marginTop: '-35rem' }}/>
                            </div>
                            <div class="w-full md:w-1/2"style={{ marginLeft: '10rem', marginTop: '-35rem' }}>
                                <p class="text-xl font-semibold mb-1">ชื่อหนังสือ </p>
                                <p class="text-sm mb-1">Ebook ID </p>
                                <p class="text-sm mb-1">Category</p>
                                <p class="text-sm font-semibold mb-1">ราคา</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                                <img src='https://via.placeholder.com/130x170' alt='Book Cover' class="rounded" style={{ marginLeft: '27rem', marginTop: '-20rem' }}/>
                            </div>
                            <div class="w-full md:w-1/2"style={{ marginLeft: '10rem', marginTop: '-20rem' }}>
                                <p class="text-xl font-semibold mb-1">ชื่อหนังสือ </p>
                                <p class="text-sm mb-1">Ebook ID </p>
                                <p class="text-sm mb-1">Category</p>
                                <p class="text-sm font-semibold mb-1">ราคา</p>
                            </div>
                        </div>
                    </form>



                </div>
            </Modal>



        </div>
    );
}

export default OrderM;


