import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Modal from 'react-modal';
function OrderHi() {
        const [modalIsOpen5, setModalIsOpen5] = useState(false);
    
        const openModal5 = () => {
            setModalIsOpen5(true);
        };
    
        const closeModal5 = () => {
            setModalIsOpen5(false);
        };
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
                    <h1 className='text-4xl font-bold'>ORDER history</h1>
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
                            <button className='D' onClick={openModal5}>Delete Account</button>
                        </ul>
                    </div>
                    <div className='boxs'>
                        <div class="flex flex-wrap md:flex-nowrap">
                            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                                <img src='https://via.placeholder.com/130x170' alt='Book Cover' class="rounded"/>
                            </div>
                            <div class="w-full md:w-1/2">
                                <p class="text-sm font-semibold mb-1">ชื่อหนังสือ </p>
                                <p class="text-sm mb-1">Ebook ID </p>
                                <p class="text-sm mb-1">Category</p>
                                <p class="text-sm font-semibold mb-1">ราคา</p>
                            </div>

                        </div>

                        <div class="flex flex-wrap md:flex-nowrap"style={{ marginTop: '9rem',marginLeft: '-13rem' }}>
                            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                                <img src='https://via.placeholder.com/130x170' alt='Book Cover' class="rounded"/>
                            </div>
                            <div class="w-full md:w-1/2">
                                <p class="text-sm font-semibold mb-1">ชื่อหนังสือ </p>
                                <p class="text-sm mb-1">Ebook ID </p>
                                <p class="text-sm mb-1">Category</p>
                                <p class="text-sm font-semibold mb-1">ราคา</p>
                            </div>
                        </div>

                        <div class="flex flex-wrap md:flex-nowrap"style={{ marginTop: '18rem',marginLeft: '-13rem' }}>
                            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                                <img src='https://via.placeholder.com/130x170' alt='Book Cover' class="rounded"/>
                            </div>
                            <div class="w-full md:w-1/2">
                                <p class="text-sm font-semibold mb-1">ชื่อหนังสือ </p>
                                <p class="text-sm mb-1">Ebook ID </p>
                                <p class="text-sm mb-1">Category</p>
                                <p class="text-sm font-semibold mb-1">ราคา</p>
                            </div>
                        </div>

                        <div class="flex flex-wrap md:flex-nowrap"style={{ marginTop: '27rem',marginLeft: '-13rem' }}>
                            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                                <img src='https://via.placeholder.com/130x170' alt='Book Cover' class="rounded"/>
                            </div>
                            <div class="w-full md:w-1/2">
                                <p class="text-sm font-semibold mb-1">ชื่อหนังสือ </p>
                                <p class="text-sm mb-1">Ebook ID </p>
                                <p class="text-sm mb-1">Category</p>
                                <p class="text-sm font-semibold mb-1">ราคา</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <Modal isOpen={modalIsOpen5} onRequestClose={closeModal5} style={{ content: { width: '25%', height: '50%', margin: 'auto' } }}>
                    <div className='lo'>
                        <h2 className='text-2xl' style={{ marginLeft: '1rem' }}>Are you sure to delete your account?</h2>
                        <form>
                            <div className="user">
                                <h1 className='flex text-sm'>You will not be able to log in again to this account if you delete your account.</h1>
                            </div>
                            <div className='del' style={{ marginLeft: '2rem', marginTop: '3rem' }}>
                                <button class="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600">CANCLE</button>
                            </div>
                            <div className='flex ' style={{ marginLeft: '15rem', marginTop: '-2.5rem' }}>
                                <button class="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 focus:outline-none focus:bg-yellow-600">DELETE</button>
                            </div>
                        </form>
                    </div>

                </Modal>
        </div>
    );
}

export default OrderHi;