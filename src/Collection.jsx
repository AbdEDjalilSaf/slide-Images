import React, { useEffect, useState } from 'react';
import './App.css';


function Collection() {

// let appendZero = (value) => (value < 10 ? "0" + value : value);

// let [time,setTime] = useState(new Date());

// useEffect(()=>{

// let interValid = setInterval(()=>{
//      setTime(new Date());
// },1000);

// return ()=>{
//     clearInterval(interValid);
// }

// },[]);
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());

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
    {/* <iframe  src="https://w2.countingdownto.com/5048537" frameborder="0" className='fitwidth'></iframe> */}
    <div id="countdown">
    <ul>
      <li><span id="days"></span>days</li>
      <li><span id="hours"></span>Hours</li>
      <li><span id="minutes"></span>Minutes</li>
      <li><span id="seconds"></span>Seconds</li>
    </ul>
  </div>
</div>
<button className="bg-black text-white w-fit textbutton font-semibold py-4 px-11"> S H O P <span className="ml-3">N O W </span></button>
</div>
</div>
     
    </div>
  )
}

export default Collection