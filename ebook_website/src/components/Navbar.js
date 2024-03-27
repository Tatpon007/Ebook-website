import React from 'react'

function Navbar() {
  return (
    

<nav className="bg-gradient-to-r from-green-500 to-green-300">
  <div className="flex flex-wrap items-center  mx-auto p-4">
    <a href="home.php" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Ebook</span>
    </a>
    <div className="flex md:order-2 justify-center flex-grow">
      <div className=" hidden md:block"style={{ marginRight: '-9rem' }}>
        <input type="text" id="search-navbar" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search E-Books"style={{ width: '20rem' }}/>
      </div>
      <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '20rem', marginTop: '1rem' }} >
        <path d="M17.5 6.01136L15.9321 4.39979C12.2476 0.612646 5.49969 1.91996 3.06328 6.67809C1.91742 8.91588 1.65977 12.146 3.75001 16.2697C5.76313 20.2412 9.94804 24.9954 17.5 30.1757C25.052 24.9954 29.2369 20.2412 31.25 16.2697C33.3402 12.146 33.0826 8.91588 31.9367 6.67809C29.5003 1.91996 22.7524 0.612646 19.0679 4.39979L17.5 6.01136ZM17.5 32.8125C-16.0412 10.6496 7.17228 -6.6519 17.1157 2.50049C17.2461 2.62056 17.3743 2.74517 17.5 2.87438C17.6257 2.74518 17.7539 2.62057 17.8843 2.50051C27.8277 -6.65192 51.0412 10.6496 17.5 32.8125Z" fill="white "/>
        </svg>
      
      <svg width="42" height="33" viewBox="0 0 42 39" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '1rem', marginTop: '0.8rem' }}>
        <path d="M0 7.28125C0 6.67719 0.489689 6.1875 1.09375 6.1875H4.375C4.87689 6.1875 5.31437 6.52908 5.43609 7.01598L6.32272 10.5625H31.7188C32.0464 10.5625 32.3568 10.7094 32.5646 10.9628C32.7723 11.2162 32.8555 11.5494 32.7913 11.8708L30.6038 22.8083C30.5055 23.2994 30.0863 23.661 29.586 23.6861L9.03047 24.7171L9.65773 28.0625H28.4375C29.0416 28.0625 29.5312 28.5522 29.5312 29.1562C29.5312 29.7603 29.0416 30.25 28.4375 30.25H26.25H10.9375H8.75C8.22367 30.25 7.77198 29.8751 7.67498 29.3578L4.39974 11.8899L3.52103 8.375H1.09375C0.489689 8.375 0 7.88531 0 7.28125ZM6.78664 12.75L8.62363 22.5473L28.6258 21.544L30.3846 12.75H6.78664ZM10.9375 30.25C8.52125 30.25 6.5625 32.2088 6.5625 34.625C6.5625 37.0412 8.52125 39 10.9375 39C13.3537 39 15.3125 37.0412 15.3125 34.625C15.3125 32.2088 13.3537 30.25 10.9375 30.25ZM26.25 30.25C23.8338 30.25 21.875 32.2088 21.875 34.625C21.875 37.0412 23.8338 39 26.25 39C28.6662 39 30.625 37.0412 30.625 34.625C30.625 32.2088 28.6662 30.25 26.25 30.25ZM10.9375 32.4375C12.1456 32.4375 13.125 33.4169 13.125 34.625C13.125 35.8331 12.1456 36.8125 10.9375 36.8125C9.72938 36.8125 8.75 35.8331 8.75 34.625C8.75 33.4169 9.72938 32.4375 10.9375 32.4375ZM26.25 32.4375C27.4581 32.4375 28.4375 33.4169 28.4375 34.625C28.4375 35.8331 27.4581 36.8125 26.25 36.8125C25.0419 36.8125 24.0625 35.8331 24.0625 34.625C24.0625 33.4169 25.0419 32.4375 26.25 32.4375Z" fill="white"/>
          <circle cx="33" cy="9" r="9" fill="#EF4C42"/>
          <path d="M30.3224 14L34.767 5.21023V5.13565H29.6264V3.81818H36.358V5.1804L31.9283 14H30.3224Z" fill="white"/>
          </svg>


    </div>

    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        
      </div>

    </div>
  </div>
</nav>

  )
}

export default Navbar