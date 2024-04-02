import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Modal from 'react-modal';
function CustomerM() {

    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);



    const openModal1 = () => {
        setModalIsOpen1(true);

    };

    const closeModal1 = () => {
        setModalIsOpen1(false);
    };

    const openModal2 = () => {
        setModalIsOpen2(true);

    };

    const closeModal2 = () => {
        setModalIsOpen2(false);
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
                <h1 className='text-4xl font-bold' style={{ marginTop: '2rem', marginLeft: '0rem' }}>CUSTOMER SUPPORT MANAGEMENT</h1>
            </div>
            <div class="flex justify-center items-center mt-7 mb-7">
                <div class="overflow-x-auto w-11/12">
                    <table class="w-full bg-white shadow-md rounded border border-gray-300">
                        <thead class="bg-green-500 text-white">
                            <tr>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm border-b border-gray-300">Username</th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm border-b border-gray-300">Email</th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm border-b border-gray-300">Phone Number</th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm border-b border-gray-300">Password</th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm border-b border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700">
                            {/* <!-- Repeat for each user --> */}
                            <tr>
                                <td class="text-left py-3 px-4 border-b border-gray-300">Jonathan001</td>
                                <td class="text-left py-3 px-4 border-b border-gray-300">Jonathan001@gmail.com</td>
                                <td class="text-left py-3 px-4 border-b border-gray-300">0123456789</td>
                                <td class="text-left py-3 px-4 border-b border-gray-300">*****wqd24801</td>
                                <td class="flex justify-start space-x-1 py-3 px-4 border-b border-gray-300">
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal1}>
                                        VIEW
                                    </button>
                                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={openModal2}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            {/* <!-- ... other users --> */}
                        </tbody>
                    </table>
                </div>
            </div>




            <Modal isOpen={modalIsOpen1} onRequestClose={closeModal1} style={{ content: { width: '25%', height: '70%', margin: 'auto' } }}>
                <div>
                    <form>
                        <div>
                            <h1 className='text-xl'>Problem ID</h1>
                            <input type="text" className="block w-full p-3 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" ></input>
                        </div>
                        <div>
                            <h2 className='text-xl'>Send By</h2>
                            <input type="text" className="block w-full p-3 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" ></input>
                        </div>
                        <div>
                            <h2 className='text-xl'>Problem Status</h2>
                            <button className="bg-green-500 text-white px-16 py-1 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600 mt-8" style={{ marginTop: '1rem' }}>Success</button>
                        </div>
                        <div>
                            <h2 className='text-xl'>Problem Title</h2>
                            <input type="text" className="block w-full p-3 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ProblemTitleA" ></input>
                        </div>
                        <div className='o' style={{ marginLeft: '0rem', marginTop: '1rem' }}>
                            <h2 className='text-xl'>Description</h2>
                            <input type="text" className="block w-full p-20 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description of problem ......." ></input>
                            <button className="bg-green-500 text-white px-16 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600 mt-8"style={{ marginLeft: '7rem' }} onClick={closeModal1}>SEND</button>
                        </div>
                    </form>

                </div>
            </Modal>

            <Modal isOpen={modalIsOpen2} onRequestClose={closeModal2} style={{ content: { width: '30%', height: '30%', margin: 'auto' } }}>
                <div className='lo'>
                    <h2 className='text-3xl' style={{ marginLeft: '1rem' }}>Are you sure to delete your account?</h2>
                    <form>
                        <div className="user" style={{ marginLeft: '1rem' }}>
                            <h1 className='flex text-xl'>You will not be able to log in again to this account if you delete your account.</h1>
                        </div>
                        <div className='del' style={{ marginLeft: '4rem', marginTop: '3rem' }}>
                            <button class="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600">CANCLE</button>
                        </div>
                        <div className='flex ' style={{ marginLeft: '18rem', marginTop: '-2.5rem' }}>
                            <button class="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 focus:outline-none focus:bg-yellow-600">CONFIRM</button>
                        </div>
                    </form>
                </div>

            </Modal>

        </div>
    );
}

export default CustomerM;

