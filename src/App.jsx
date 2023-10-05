import React from "react";


// function App() {
//   return (
//     <>
//     <h2>giuglhh</h2>
//    <Login />
//    </>
//   )
// }          

// export default App;






// 





import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Navbar'
import InfiniteSlide from './InfiniteSlide'
import './App.css'
import axios from 'axios'



function App() {

  let images = [
    '/image/1.jpeg',
    '/image/2.jpeg',
    '/image/3.jpeg',
    '/image/5.jpeg',
    ];

    
  return (
    <>
      <div className='hidden linkHome md:flex bg-black lg:w-full  mx-auto text-white md:gap-28   justify-center items-center lg:justify-evenly lg:gap-80'>
        <h3 className='  md:block'>Free shipping, 30-day return or refund guarantee.</h3>
        <ul className='flex gap-12    py-3  items-center lg:mx-0 textSm lg:text-sm'>
          {/* ------- Use Link routing here ----------------------------------- */}
          <li><button className='uppercase '>sign in</button></li>
          <li><a className='uppercase cursor-pointer'>FAQS </a></li>
          <li className='flex items-center gap-1'><a className='uppercase cursor-pointer'>USD</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className='w-5 cursor-pointer'>
              <path d="M7 10L12 15L17 10" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </li>
        </ul>
      </div>
      <Navbar />
      <div>
 
  <InfiniteSlide autoslide={true}>
{images.map((image)=>(
<img src={image} className='image'/>


))}
</InfiniteSlide>
</div>
    </>
    
  )
}


export default App;










// <header className='top-0 flex relative  w-full py-5 px-8  justify-between'>
//   <h3 className='text-black cursor-pointer font-semibold'>
//   <span className='text-blue-700 text-lg font-bold relative'>Abd Djalil</span> .dev</h3>
//   <ul className='gap-8 flex  right-0'>
//     <li className='text-black cursor-pointer relative'>Home</li>
//     <li className='text-black cursor-pointer relative'>About</li>
//     <li className='text-black cursor-pointer relative'>Projects</li>
//     <li className='text-black cursor-pointer relative'>Contact</li>
//   </ul>
// </header>
// <div className=' home mb-6'>
// <div className='landing absolute flex w-full gap-24 mb-7'>
// <div className='text-black max'>
// <h2 className='text-5xl font-semibold mb-4'>Front-End React<br/> Developer</h2>
// <p>Hi,I'm AbdDjalil Saf.A passionate Front-end React Developer based in Algeria, Algeria </p>
// <div>
//   <a href=''></a>
//   <a href=''></a>
// </div>
// </div>
// <div className='image'>
// <img src='/image/images (1).jpeg' className='width'></img>
// </div>
// </div>
// <div className='flex text-black absolute stack w-full gap-9'>
// <h3>Stack  |</h3>
// <img src='/image/html.png' className='w-16'></img>
// <img src='/image/css.png'  className='w-20'></img>
// <img src='/image/js.png'  className='w-10'></img>
// <img src='/image/githup.png'  className='w-9'></img>
// <img src='/image/tailwind.png'  className='w-10'></img>
// <img src='/image/react.png'  className='w-10'></img>
// <img src='/image/npm.png'  className='w-20'></img>
// </div>
// </div>

