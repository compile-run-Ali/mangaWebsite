import React from 'react'
import {IoMdCopy} from 'react-icons/io'

const FirstMangaAI = () => {
  return (

<div className='bg-main-purple pb-5 overflow-clip'>
       
       
        <div className='flex flex-col sm:flex-row bg-main-gray xl:h-[450px]'> 
              <div className=' sm:w-1/2 p-3 ml-10 pt-5'>
                    <h1 className='text-purple-700 text-3xl sm:text-4xl'>MANGA AI</h1>
                    <h3 className='text-green-400 text-lg sm:text-xl'>Unleash Your Anime Creativity </h3>
                    <p className='text-white text-sm sm:text-base sm:w-96'>Welcome to Manga AI, where creativity meets technology to revolutionize anime content creation. Our platform blends AI and blockchain, offering a unique space for creators and fans to explore, collaborate, and thrive.</p>
                    <button className="rounded-md text-white bg-gradient-to-r from-purple-500 to-green-500 p-2 mt-2 sm:mt-4 float-left">Generate Anime Art</button>
                    <div className='border-1 h-12 border-purple-500 rounded-full inline-block mb-2 mr-3 ml-3  float-left'></div>
                    <p className='text-white text-sm sm:text-base mt-4 sm:mt-4  '><u>Documentation</u></p>
              </div>
              
              <div className='flex items-center sm:w-[35%] sm:ml-auto justify-center relative'>
                    <div className="relative inset-0 flex items-center justify-center">
                        <img className=' sm:h-auto w-full h-[32%]  ' src="./images/divp1.svg" alt="error" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img className='w-96 h-auto' src="./images/divp2.svg" alt="error" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img className=' w-80' src="./images/divp3.svg" alt="error" />
                    </div>
              </div>

        </div>

        <div className='flex border-dashed border-1 rounded-lg w-fit m-auto mt-5  '>
            <button className='text-white text-2xl p-2' ><IoMdCopy /></button>
            <div className='border-1 h-10  border-white rounded-full border-dashed inline-block  mr-2 ml-2 float-left'></div>
            <input className='bg-transparent text-lg p-2 w-80 ' type="text" placeholder='00000000000000000000000000000000' />
        </div>
        <button className="rounded-md text-white bg-gradient-to-r from-purple-500 to-green-500 p-2 flex m-auto sm:mt-4 mt-3 ">Buy $Manga</button>

</div>

  )
}

export default FirstMangaAI
