import React, { createContext, useContext, useState } from "react";
import Navbar from './Navbar'
import InfiniteSlide from './InfiniteSlide'
import Shoes from './Shoes'
import './App.css'
import Sellers from "./Sellers";
import Collection from "./Collection"


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
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="w-8 cursor-pointer  leftArrow z-50"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="w-8 cursor-pointer  rightArrow z-50"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
      </div>
      <div className="flex gap-6 linkMedia ">
        <a href="https://www.facebook.com/search/top/?q=Abdeldjalil%20Frontend" className="text-black  z-50"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" className="w-4 cursor-pointer"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></a>
        <a href="https://twitter.com/NoodSaf" className="text-black  z-50"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="w-6 cursor-pointer"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>
        <a href="https://www.linkedin.com/in/abd-el-djalil-saf-076619265/" className="text-black  z-50"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="w-7 cursor-pointer"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
        <a href="#" className="text-black  z-50"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512" className="w-7 cursor-pointer"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg></a>
  </div>
      </div>
<Shoes />
<Sellers />
<Collection />






















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