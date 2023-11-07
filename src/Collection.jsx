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
<div>
    <img src='/image/product-sale.png'/>
</div>
<div>
<h4 className="text-red-500 text-left  font-semibold">DEAL OF THE WEEK</h4>
<h2>Multi-pocket Chest Bag Black</h2>

<div>
    <div className='timeNumber'>
<span className='daysNumber'>30</span>
<span>:</span>
<span className='hourNumber'>57</span>
<span>:</span>
<span className='minuteNumber'>34</span>
<span>:</span>
<span className='secondNumber'>27</span>

    </div>

    <div className='timeString'>
<h4 className='daysString'>Days</h4>
<h4 className='hourString'>Hours</h4>
<h4 className='minuteString'>Minutes</h4>
<h4 className='secondString'>Seconds</h4>

    </div>
</div>
<button className="bg-black text-white w-fit textbutton font-semibold py-4 px-11"> S H O P <span className="ml-3">N O W </span></button>

</div>






        
    </div>
  )
}

export default Collection