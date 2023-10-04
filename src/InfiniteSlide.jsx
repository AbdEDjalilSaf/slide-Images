import React, { useEffect, useState } from 'react';

// import Landing from './Landing';

let InfiniteSlide = ({
  children:slides,
autoslide = false,
autoslideinterval = 3000,

})=>{
let [curr,setCurr] = useState(0)

let prev = ()=>
setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
let next = ()=>
setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

useEffect(()=>{
  if(!autoslide) return
  let slideinterval = setInterval(next, autoslideinterval);
  return ()=> clearInterval(slideinterval)
},[])

return (
 

<div className='overflow-hidden relative'>
  <div className='flex transition-transform
   ease-out duration-500' style={{transform:`translateX(-${curr * 100}%)`}}>{slides}</div>
  <div className='absolute inset-0 flex items-center justify-between p-4'>
    <button onClick={prev} className='rounded-full p-1 shadow bg-white/80 hover:bg-white '>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className='w-12 rotate-90 left'>
<path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
    <button onClick={next} className='rounded-full p-1 shadow bg-white/80 hover:bg-white '>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className='w-12 -rotate-90 right'>
<path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
  </div>
  </div>




)}














export default InfiniteSlide












