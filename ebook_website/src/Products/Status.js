import React from 'react'
import { Link } from "react-router-dom"
function Status() {
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
                <h2 class="text-4xl font-bold mb-6">ORDER STATUS</h2>

                {/* <!-- Payment Methods List --> */}
                <div class="space-y-4">
                    {/* <!-- Each card would repeat for each payment method --> */}
                    <div class=" items-center justify-between w-96">
                        <h2 class=" text-2xl font-bold mb-6" style={{ marginLeft: '4rem' }}  >PAYMENT SUSCESSFUL</h2>
                        <span>Congratulations! Your order will be shipping soon...</span>
                        <div class="flex items-center">

                        </div>
                    </div>
                    {/* <!-- Repeat other payment method entries --> */}
                </div>

                {/* <!-- Action Buttons --> */}
                <div class="flex space-x-4 mt-6">

                    <Link to ='/Home'button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
                        Home
                    </Link>
                </div>
            </div>





        </div>
    )
}

export default Status