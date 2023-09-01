import React from 'react'

const MangaTokenomics = () => {
  return (
    
<div className='bg-main-gray pb-16 '>
    <h1 className=' w-fit ml-[8%] pt-11' >
                <span
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 'containor'>
                <div className='bg-gray-800 rounded-lg sm:w-1/3 pl-5 justify-center relative z-10"
                style={{ backgroundImage: 'linear-gradient(to right, #8F41B4, #7D98A6, #50C355)',}}>$MANGA Tokenomics
                </span>
                </h1>

        <div className='flex'>
                <div className='bg-gray-800 w-fit rounded-lg sm:p-9 p-3 mt-12  sm:ml-[8%] ml-2'>
                      <h4 className='text-purple-600 sm:text-2xl text-base pt-1'>Transfer Tax</h4>
                      <p className='text-white sm:w-72 w-44 text-justify pt-1 pb-1 sm:text-base text-xs'>You can transfer your tokens across your wallets without any payment.</p>
                      <div className='border-1 w-[90%] border-white rounded-full inline-block mb-2 mr-2  m-auto  '></div>

                      <h4 className='text-purple-600 sm:text-2xl text-base pt-1'>Buy Tax</h4>
                      <p className='text-white sm:w-72 w-44 text-justify pt-1 pb-1 sm:text-base text-xs'>Purchase $Manga with 4% tx - 2% to marketing, 1% to Ecosystem,  1% to lp</p>
                      <div className='border-1 w-[90%] border-white rounded-full inline-block mb-2 mr-2  m-auto  '></div>

                      <h4 className='text-purple-600 sm:text-2xl text-base pt-1'>Sell Tax</h4>
                      <p className='text-white sm:w-72 w-44 text-justify pt-1 pb-1 sm:text-base text-xs'>Sell $Manga with 4% tx - 2% to marketing, 1% to Ecosystem,  1% to lp</p>
                 </div>

                 <div>
                      <img className='sm:w-[64%] sm:ml-16 w-full h-full sm:h-auto' src="./images/divr1.svg" alt="error" />
                 </div>
                 
        </div>    

</div>

  )
}

export default MangaTokenomics
