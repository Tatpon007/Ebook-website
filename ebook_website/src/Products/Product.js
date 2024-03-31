import React  from 'react'
import { Link } from "react-router-dom"
function Product() {
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

            <div class="container mx-auto px-4 py-8">
                <div class="mb-8">
                    <h1 class="text-3xl font-bold uppercase mb-2">I'm so happy you're here</h1>
                    <div class="h-1 bg-gray-300 mb-6"></div>
                        
                    <div class="flex flex-wrap md:flex-nowrap">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
                            {/* <img src="" alt="I'm So Happy You're Here" class="rounded"> */}
                        </div>
                        <div class="w-full md:w-1/2">
                            <p class="text-sm font-semibold mb-1">Writer: <span class="font-normal">Climo, Liz</span></p>
                            <p class="text-sm font-semibold mb-1">Publisher: <span class="font-normal">HarperCollins</span></p>
                            <p class="text-sm font-semibold mb-1">Categories: <span class="font-normal">Comics and Novels</span></p>
                            <p class="text-sm font-semibold mb-1">Pages: <span class="font-normal">96p</span></p>
                            <p class="text-sm font-semibold mb-1">Ebook ID: <span class="font-normal">1203</span></p>
                            <p class="text-2xl font-bold my-4">THB 100</p>
                            <button class="bg-white-500 text-black px-6 py-2 mr-2 rounded-full shadow-md hover:bg-white-600 focus:outline-2 focus:bg-green-600">Read Sample</button>
                            <button class="bg-green-500 text-white px-6 py-2  rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600">Add to Cart</button>
                          
                        </div>
                    </div>
                </div>

                <div class="mb-8">
                    <h2 class="text-2xl font-bold mb-3">Description</h2>
                    <p class="text-gray-700">From internationally bestselling author Liz Climo comes 'I'm So Happy You're Here', a book to remind us to love ourselves. We all need a reminder that we're loved and we matter, and international bestselling author Liz Climo delivers that dose of warmth and love in her new book Sometimes we just need a little pep talk to remind us that we're doing our best. With help from her charming animal drawings, Liz Climo encourages us to embrace the joyful moments, get back up after falling down, and always love ourselves.</p>
                    <p class="text-gray-700 mt-4">A little book to let someone know how important they are to you or a thoughtful gift you can give to yourself, 'I'm So Happy You're Here' highlights how truly amazing we are. Like a good friend, it will lift you out of low moments and keep you company until they've passed, making you laugh and cry while reminding you that you're loved, you matter, and we're all really happy you're here.</p>
                </div> 
                <div class="flex justify-between items-center">
                    
                    <div class="h-1 bg-gray-300 flex-grow mx-4"></div>
                    
                </div>
            </div>

            


        </div>








    );
}

export default Product