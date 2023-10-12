import React from 'react';
import './App.css';


function Collection() {
  return (
    <div className='collect py-28 flex flex-col gap-3'>
<div className='bg-white text-black  bgSite flex flex-col gap-3 rounded py-12 pl-5'>
    <h3 className='text-gray-500 text-3xl gotoRight'>Clothings Hot</h3>
    <h2 className='text-4xl gotoRight' id='gotoCenter'>Shoe Collection</h2>
    <h3 className='text-gray-500 text-3xl gotoRight'>Accessories</h3>
</div>
<div className='collectImg'>
    <img src='/image/product-sale.png'/>
</div>
<div className='flex justify-center items-center '>
<div className='flex flex-col gap-3 multiText'>
<h4 className="text-red-500 text-left  font-semibold">DEAL OF THE WEEK</h4>
<h2 className='text-4xl font-semibold '>Multi-pocket Chest Bag Black</h2>
<div>
    <div className='timeNumber w-full flex'>
<span className='daysNumber flex flex-col items-center gap-2'>30<h4 className='String '>Days</h4></span>
<span>:</span>
<span className='hourNumber flex flex-col items-center gap-2'>57<h4 className='String'>Hours</h4></span>
<span>:</span>
<span className='minuteNumber flex flex-col items-center gap-2'>34<h4 className='String'>Minutes</h4></span>
<span>:</span>
<span className='secondNumber flex flex-col items-center gap-2'>27<h4 className='String'>Seconds</h4></span>

    </div>
</div>
<button className="bg-black text-white w-fit textbutton font-semibold py-4 px-11"> S H O P <span className="ml-3">N O W </span></button>
</div>
</div>






        
    </div>
  )
}

export default Collection