import React, { createContext, useContext, useState } from "react";
// import reactLogo from './assets/react.svg'
import Navbar from './Navbar'
import InfiniteSlide from './InfiniteSlide'
import './App.css'
// import axios from 'axios'


function App() {

   let images = [
    "bg-[url('/image/hero-1.jpg')]",
    "bg-[url('/image/hero-2.jpg')]",
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
      <InfiniteSlide />
      <div>
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="w-8 cursor-pointer leftArrow z-50"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="w-8 cursor-pointer rightArrow z-50"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
      </div>
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








// -----------------Slides Images-----------------------//
  {/* <InfiniteSlide autoslide={true}>
{images.map((image)=>(
<img src={image} className='image'/>


))}
</InfiniteSlide> */}







{/* <div className="frl bg-[url('/image/hero-2.jpg')] flex items-end text-left relative ">
<div className="  textwidth md:text-left">
<h4 className="text-red-500 text-left  font-semibold">S U M M E R <span className="ml-2">C O L L E C T I O N</span></h4>
<h2 className="text-5xl my-9  font-semibold">Fall - Winter<br/>Collections 2030</h2>
<p className="lineparag">A specialist label creating luxury essentials.
Ethically crafted with an unwavering commitment to exceptional quality.</p>
<button className="bg-black text-white w-fit textbutton font-semibold py-4 px-11"> S H O P <span className="ml-3">N O W </span></button>
<div className="flex my-12">
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="w-6 md:hidden leftArrowOne"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="w-6 md:hidden leftArrowTwo"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
</div>
</div>
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="w-6 cursor-pointer leftArrow"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="w-6 cursor-pointer rightArrow"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
</div>, */}