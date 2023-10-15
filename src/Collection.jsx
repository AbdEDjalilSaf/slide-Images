import React, { useEffect, useState } from 'react';
import './App.css';


function Collection() {

// let appendZero = (value) => (value < 10 ? "0" + value : value);

let [time,setTime] = useState(new Date());

useEffect(()=>{

let interValid = setInterval(()=>{
     setTime(new Date());
},1000);

return ()=>{
    clearInterval(interValid);
}

},[]);

// let day = appendZero(time.getDay());
// let hour = appendZero(time.getHours());
// let minutes = appendZero(time.getMinutes());
// let seconds = appendZero(time.getSeconds());


  return (
    <div className='collect py-28 flex flex-col gap-3'>
<div className='bg-white text-black  bgSite flex flex-col gap-3 rounded py-12 pl-5'>
    <h3 className='text-gray-500 text-3xl gotoRight'>Clothings Hot</h3>
    <h2 className='text-4xl gotoRight' id='gotoCenter'>Shoe Collection</h2>
    <h3 className='text-gray-500 text-3xl gotoRight'>Accessories</h3>
</div>
<div className='collectImg relative'>
    <img src='/image/product-sale.png'/>
    <div className='flex flex-col items-center bg-black py-6 px-4 rounded-full coponPrix absolute '>
    <span className='text-white text-lg'>Sale Of</span>
    <span className='font-semibold text-2xl text-white'>$29.99</span>
    </div>
</div>
<div className='flex nine justify-center items-center nine'>
<div className='flex flex-col gap-3 multiText'>
<h4 className="text-red-500 text-left  font-semibold">DEAL OF THE WEEK</h4>
<h2 className='text-4xl font-semibold'>Multi-pocket Chest Bag Black</h2>
<div>
    {/* <div className='timeNumber  flex'>
<span className='daysNumber flex flex-col items-center gap-2'>{day}<h4 className='String '>Days</h4></span>
<span>:</span>
<span className='hourNumber flex flex-col items-center gap-2'>{hour}<h4 className='String'>Hours</h4></span>
<span>:</span>
<span className='minuteNumber flex flex-col items-center gap-2'>{minutes}<h4 className='String'>Minutes</h4></span>
<span>:</span>
<span className='secondNumber flex flex-col items-center gap-2' >{seconds}<h4 className='String'>Seconds</h4></span>
    </div> */}
    <iframe  src="https://w2.countingdownto.com/5048537" frameborder="0" className='fitwidth'></iframe>
</div>
<button className="bg-black text-white w-fit textbutton font-semibold py-4 px-11"> S H O P <span className="ml-3">N O W </span></button>
</div>
</div>
     
    </div>
  )
}

export default Collection