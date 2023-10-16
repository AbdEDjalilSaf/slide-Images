import React from 'react'
import "./App.css"

function FooterHome() {
  return (
  <div className='py-16 bg-black grid-cols-1 footerApp px-4'>
<div className='text-white flex flex-col mb-8 gap-9 widthmale'>
<img src='/image/footer-logo.png' />
<p className='text-gray-400'>The customer is at the heart of our unique business model, which includes design.</p>
<a href='#' ><img src='/image/payment.png' /></a>
</div>
<div className='text-white flex flex-col mb-8 gap-5'>
<h2 className='text-xl'>SHOPPING</h2>
<div className='flex flex-col gap-5'>
<a href='#' className='text-gray-400  hover:text-gray-300'>Clothing Store</a>
<a href='#' className='text-gray-400  hover:text-gray-300'>Trending Shoes</a>
<a href='#' className='text-gray-400  hover:text-gray-300'>Accessories</a>
<a href='#' className='text-gray-400 hover:text-gray-300'>Sale</a>
</div>
</div>
<div className='text-white flex flex-col mb-8 gap-5'>
<h2 className='text-2xl'>Contact</h2>
<div  className='flex flex-col gap-5'>
<a href='#' className='text-gray-400  hover:text-gray-300'>Contact Us</a>
<a href='#' className='text-gray-400  hover:text-gray-300'>Payment Methods</a>
<a href='#' className='text-gray-400  hover:text-gray-300'>Delivary</a>
<a href='#' className='text-gray-400  hover:text-gray-300'>Return & Exchanges</a>
</div>
</div>
<div className='text-white flex flex-col mb-8 gap-5'>
<h2 className='text-xl'>NEWLETTER</h2>
<p className='text-gray-400'>Be the first to know about new arrivals, look books, sales & promos!</p>
<div className='text-white flex mt-4 borderBottom pb-3 gap-3 items-center'>
  <input type='email' placeholder='Your email' className='bg-transparent focus:outline-none widthButton'/>
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#ffffff' className=' cursor-pointer'><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
</div>
</div>

    </div>
  )
}

export default FooterHome