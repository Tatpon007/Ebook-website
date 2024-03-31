import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Modal from 'react-modal';


function CustomerE() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [modalIsOpen3, setModalIsOpen3] = useState(false);
    const [modalIsOpen4, setModalIsOpen4] = useState(false);
    const [modalIsOpen5, setModalIsOpen5] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
        setModalIsOpen2(true);
        setModalIsOpen3(true);
        setModalIsOpen4(true);
        setModalIsOpen5(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setModalIsOpen2(false);
        setModalIsOpen3(false);
        setModalIsOpen4(false);
        setModalIsOpen5(true);
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
                    <h1 className='text-4xl font-bold'>CUSTOMER’S EBOOKS</h1>
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
                            <button className='D' onClick={openModal}>Delete Account</button>
                        </ul>
                    </div>
                    <div className='boxs'>
                        <div class="flex flex-wrap md:flex-nowrap">
                            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                                <img src='https://via.placeholder.com/130x170' alt='Book Cover' class="rounded" />
                            </div>
                            <div class="w-full md:w-1/2">
                                <p class="text-sm font-semibold mb-1">ชื่อหนังสือ </p>
                                <p class="text-sm mb-1">Ebook ID </p>
                                <p class="text-sm mb-1">Category</p>
                                <p class="text-sm font-semibold mb-1">ราคา</p>
                                <button class="bg-green-500 text-white px-6 py-0 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={openModal}>OPEN</button>
                            </div>
                        </div>

                        <div class="flex flex-wrap md:flex-nowrap" style={{ marginTop: '9rem', marginLeft: '-14.7rem' }}>
                            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                                <img src='https://via.placeholder.com/130x170' alt='Book Cover' class="rounded" />
                            </div>
                            <div class="w-full md:w-1/2">
                                <p class="text-sm font-semibold mb-1">ชื่อหนังสือ </p>
                                <p class="text-sm mb-1">Ebook ID </p>
                                <p class="text-sm mb-1">Category</p>
                                <p class="text-sm font-semibold mb-1">ราคา</p>
                                <button class="bg-green-500 text-white px-6 py-0 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={openModal}>OPEN</button>
                            </div>
                        </div>

                        <div class="flex flex-wrap md:flex-nowrap" style={{ marginTop: '18rem', marginLeft: '-14.7rem' }}>
                            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                                <img src='https://via.placeholder.com/130x170' alt='Book Cover' class="rounded" />
                            </div>
                            <div class="w-full md:w-1/2">
                                <p class="text-sm font-semibold mb-1">ชื่อหนังสือ </p>
                                <p class="text-sm mb-1">Ebook ID </p>
                                <p class="text-sm mb-1">Category</p>
                                <p class="text-sm font-semibold mb-1">ราคา</p>
                                <button class="bg-green-500 text-white px-6 py-0 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={openModal}>OPEN</button>
                            </div>
                        </div>

                        <div class="flex flex-wrap md:flex-nowrap" style={{ marginTop: '27rem', marginLeft: '-14.7rem' }}>
                            <div class="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                                <img src='https://via.placeholder.com/130x170' alt='Book Cover' class="rounded" />
                            </div>
                            <div class="w-full md:w-1/2">
                                <p class="text-sm font-semibold mb-1">ชื่อหนังสือ </p>
                                <p class="text-sm mb-1">Ebook ID </p>
                                <p class="text-sm mb-1">Category</p>
                                <p class="text-sm font-semibold mb-1">ราคา</p>
                                <button class="bg-green-500 text-white px-6 py-0 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={openModal}>OPEN</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{ content: { width: '50%', height: '60%', margin: 'auto' } }}>
                <div className='lo'>
                    <div>
                        <img src='https://via.placeholder.com/1220x800' alt='Book Cover' class="rounded" />
                    </div>

                </div>
            </Modal>

            <Modal isOpen={modalIsOpen2} onRequestClose={closeModal} style={{ content: { width: '50%', height: '60%', margin: 'auto' } }}>
                <div className='lo'>
                    <div>
                        <img src='https://via.placeholder.com/1280x800' alt='Book Cover' class="rounded" />
                    </div>

                </div>
            </Modal>

            <Modal isOpen={modalIsOpen3} onRequestClose={closeModal} style={{ content: { width: '50%', height: '60%', margin: 'auto' } }}>
                <div className='lo'>
                    <div>
                        <img src='https://via.placeholder.com/1280x800' alt='Book Cover' class="rounded" />
                    </div>
                </div>
            </Modal>

            <Modal isOpen={modalIsOpen4} onRequestClose={closeModal} style={{ content: { width: '50%', height: '60%', margin: 'auto' } }}>
                <div className='lo'>
                    <div>
                        <img src='https://via.placeholder.com/1280x800' alt='Book Cover' class="rounded" />
                    </div>
                </div>
            </Modal>

            <Modal isOpen={modalIsOpen5} onRequestClose={closeModal} style={{ content: { width: '25%', height: '50%', margin: 'auto' } }}>
          <div className='lo'>
            <h2 className='text-2xl' style={{ marginLeft: '10rem' }}>Login</h2>
            <form>
              <div className="user">
                <h1 className='text-xl'>Username</h1>
              </div>
              <div className="from-control">
                <h2 className='text-xl'>Password</h2>
              </div>
              <div className='Login' style={{ marginLeft: '8rem', marginTop: '2rem' }}>
                <button className='submit'>LOGIN</button>
              </div>
              <div className='flex ' style={{ marginLeft: '1rem', marginTop: '1rem' }}>
                <h3>You don't have an account yet?</h3>
                <button className='Re' style={{ marginLeft: '3rem', marginTop: '-1rem' }}>Register</button>
              </div>
            </form>
            <button onClick={closeModal}>o</button>
          </div>

        </Modal>

        </div>








    );
}

export default CustomerE;