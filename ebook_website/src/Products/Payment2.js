import React from 'react'
import {Link} from "react-router-dom"
function Payment2() {
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
            <div class="flex flex-col items-center my-8">
                {/* <!-- Title --> */}
                <h2 class="text-3xl font-bold mb-6">PAYMENT METHODS</h2>

                {/* <!-- Payment Methods List --> */}
                <div class="space-y-4">
                    {/* <!-- Each card would repeat for each payment method --> */}
                    <div class="flex items-center justify-between border p-4 rounded-lg shadow-md w-96">
                        <span>Master Card</span>
                        <div class="flex items-center">
                            {/* <!-- Card Logo Placeholder: Replace with actual logos --> */}
                            <span class="bg-red-500 text-white p-1 rounded-full">Logo</span>
                            <span class="ml-2">****8201</span>
                        </div>
                    </div>
                    {/* <!-- Repeat other payment method entries --> */}
                </div>

                {/* <!-- Action Buttons --> */}
                <div class="flex space-x-4 mt-6">
                    <button class="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
                        ADD OTHER PAYMENT METHOD
                    </button>
                    <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
                        CONFIRM
                    </button>
                </div>
            </div>





        </div>
    )
}

export default Payment2