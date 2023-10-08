import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';


// import required modules
// import Landing from './Landing';








// let InfiniteSlide = ({
//   children:slides,
// autoslide = false,
// autoslideinterval = 3000,

// })=>{
// let [curr,setCurr] = useState(0)

// let prev = ()=>
// setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
// let next = ()=>
// setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

// useEffect(()=>{
//   if(!autoslide) return
//   let slideinterval = setInterval(next, autoslideinterval);
//   return ()=> clearInterval(slideinterval)
// },[])

// return (
 

// <div className='overflow-hidden relative'>
//   <div className='flex transition-transform
//    ease-out duration-500' style={{transform:`translateX(-${curr * 100}%)`}}>{slides}</div>
//   <div className='absolute inset-0 flex items-center justify-between p-4'>
//     <button onClick={prev} className='rounded-full p-1 shadow bg-white/80 hover:bg-white '>
//     <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className='w-12 rotate-90 left'>
// <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
//     </button>
//     <button onClick={next} className='rounded-full p-1 shadow bg-white/80 hover:bg-white '>
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className='w-12 -rotate-90 right'>
// <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
//     </button>
//   </div>
//   </div>


// )}



// export default InfiniteSlide













let InfiniteSlide = ({})=>{




  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
  <div className="url bg-[url('/image/hero-1.jpg')] flex items-end text-left relative " >
<div className="  textwidth md:text-left">
<h4 className="text-red-500 text-left  font-semibold">S U M M E R <span className="ml-2">C O L L E C T I O N</span></h4>
<h2 className="text-5xl my-9  font-semibold">Fall - Winter<br/>Collections 2030</h2>
<p className="lineparag">A specialist label creating luxury essentials.
Ethically crafted with an unwavering commitment to exceptional quality.</p>
<button className="bg-black text-white w-fit textbutton font-semibold py-4 px-11"> S H O P <span className="ml-3">N O W </span></button>
<div className="flex my-12">
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="leftArrowOne"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="w-6 md:hidden leftArrowTwo"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
</div>
</div>
{/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="w-6 cursor-pointer leftArrow"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="w-6 cursor-pointer rightArrow"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> */}
</div> 
</SwiperSlide>
        <SwiperSlide>
  <div className="frl bg-[url('/image/hero-1.jpg')] flex items-end text-left relative " >
<div className="  textwidth md:text-left">
<h4 className="text-red-500 text-left  font-semibold">S U M M E R <span className="ml-2">C O L L E C T I O N</span></h4>
<h2 className="text-5xl my-9  font-semibold">Fall - Winter<br/>Collections 2030</h2>
<p className="lineparag">A specialist label creating luxury essentials.
Ethically crafted with an unwavering commitment to exceptional quality.</p>
<button className="bg-black text-white w-fit textbutton font-semibold py-4 px-11"> S H O P <span className="ml-3">N O W </span></button>
<div className="flex my-12">
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="leftArrowOne"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512" className="w-6 md:hidden leftArrowTwo"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
</div>
</div>
</div>
 </SwiperSlide>
      </Swiper>

</>

)
}










export default InfiniteSlide


































































        // modules={[Pagination, Navigation]}

//    import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';




// // import required modules
// import { Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

