import React from 'react'

function Shoes() {
  return (
    <div className='my-20'>
  <div>
<div  className='flex flex-col md:flex-row-reverse justify-center items-center shoesAppOne mb-16'>
<img src='/image/banner-1.jpg' className='bannerImg'/>
<div className='bannerText' id='bannerTextMore'>
<h2 className=''>Clothing<br /> Collections 2030</h2>
<div>
<button className='borderBottom'>S H O P <span className='ml-3'>N O W</span></button>
<span className='lineSpan flex w-28 rounded transition-all hover:w-20'></span>
</div>
</div>
</div>
<div  className='flex flex-col  justify-center   items-center shoesAppTwo mb-16'>
<img src='/image/banner-2.jpg' className='bannerImg'/>
<div className='bannerText text-left'>
<h2 className=''>Accessories</h2> 
<div>
<button className='borderBottom'>S H O P <span className='ml-3'>N O W</span></button>
<span className='lineSpan flex w-28 rounded transition-all hover:w-20'></span>
</div>
</div>
</div>
<div  className='flex flex-col md:flex-row-reverse justify-center items-center shoesAppThree mb-16'>
<img src='/image/banner-3.jpg' className='bannerImg'/>
<div className='bannerText' id='bannerTextMore'>
<h2 className=''>Shoes Spring<br /> 2030</h2>
<div>
<button className='borderBottom'>S H O P <span className='ml-3'>N O W</span></button>
<span className='lineSpan flex w-28 rounded transition-all hover:w-20'></span>
</div>
</div>
</div>







  </div>
  </div>
  )
}

export default Shoes