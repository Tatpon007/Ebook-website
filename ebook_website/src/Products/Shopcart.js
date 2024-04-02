import React from 'react';
import { Link } from "react-router-dom"

function Shopcart() {
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
            <div class="container mx-auto mt-5 p-5">
                <div class="flex flex-wrap md:flex-nowrap">
                    {/* <!-- Cart Items --> */}
                    <div class="w-full md:w-3/5 p-4">
                        {/* <!-- Repeat for each cart item --> */}
                        <div class="flex justify-between items-center p-2">
                            <div>
                                {/* <!-- Book details --> */}
                                <p class="font-bold">Book Title</p>
                                <p>THB Price</p>
                            </div>
                            <button class="text-xs">X</button>
                        </div>
                       <img src='https://via.placeholder.com/192x280' alt='Book Cover' />
                    </div>

                    {/* <!-- Order Summary --> */}
                    <div class="w-full md:w-2/5 bg-gray-100 p-4">
                        <div class="flex justify-between mb-2">
                            <p>Subtotal</p>
                            <p>100</p>
                            <p>THB Total</p>
                        </div>
                        {/* <!-- Coupon Code --> */}
                        <div class="mb-2">F
                            <input class="border p-2 w-full" placeholder="Coupon Code" />
                            <button class="bg-green-500 text-white w-full p-2 mt-2">Confirm</button>
                        </div>
                        {/* <!-- Total --> */}
                        <div class="flex justify-between mb-2 font-bold">
                            <p>Total</p>
                            <p> 100 </p>
                            <p>THB Total</p>
                        </div>
                        {/* <!-- Checkout Button --> */}
                        <button class="bg-green-500 text-white w-full p-2">Checkout</button>
                        {/* <!-- Continue Shopping Button --> */}
                        <button class="bg-transparent text-green-500 w-full p-2 mt-2">Continue Shopping</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shopcart