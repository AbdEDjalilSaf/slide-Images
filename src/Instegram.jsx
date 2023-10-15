import React from 'react'
import './App.css'

function Instegram() {
  return (
    <div className='my-16 appinst flex gap-3 flex-col'>
  <div className='gridApp grid w-full  place-items-center'>
<img src='/image/instagram-1.jpg' />
<img src='/image/instagram-2.jpg' />
<img src='/image/instagram-3.jpg' />
<img src='/image/instagram-4.jpg' />
<img src='/image/instagram-5.jpg' />
<img src='/image/instagram-6.jpg' />

  </div>
  <div className='textApp flex flex-col items-start justify-center gap-9'>

<h2 className='text-5xl'>Instagram</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

<h2 className='text-red-500 text-3xl'>#Male_Fashion</h2>

  </div> 
    
    
    
    
    
    </div>
  )
}

export default Instegram