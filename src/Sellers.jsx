import React from 'react'

function Sellers() {

  let choseLink =(e)=>{
    document.querySelector(".mount").classList.remove("active");
    e.target.classList.add("active");
    console.log("gklsdjhlkfdh");
  }
              
  return (
    <div className='my-12 mb-24'>
<ul className='w-full flex gap-3 flex-col flex-wrap items-center mb-12 text-3xl ulLink'>
<p  className='text-gray-300 cursor-pointer mount active' id='mount' onClick={choseLink}>Best Sellers</p>
<div className='flex gap-7 justify-center flex-wrap  divFit'>
<p  className='text-gray-300 cursor-pointer mount'  onClick={choseLink}>New arrivals</p>
<p  className='text-gray-300 cursor-pointer mount'  onClick={choseLink}>Hot Sales</p>
</div>
</ul> 
<div className='flex flex-col gap-6 bgAll'>
{/*------------ cards --------------------*/}
<div className='flex flex-col  items-center text-left relative group'>
<div className="bg-[url('/image/product-1.jpg')] bg-cover text-center bgCenter fale relative z-50">
<div className='absolute right-5 flex flex-col gap-2 mt-2.5 '>
    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden transition-transform delay-1000 translate-x-14  group-hover:translate-x-0  group-hover:block'>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>

    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
  <title>swap-horizontal-solid</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="invisible_box" data-name="invisible box">
      <rect width="48" height="48" fill="none"/>
    </g>
    <g id="icons_Q2" data-name="icons Q2">
      <g>
        <path d="M33.5,23.6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L35.2,31H8a2,2,0,0,0,0,4H35.2l-4.6,4.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l7.9-8a1.9,1.9,0,0,0,0-2.8Z"/>
        <path d="M14.5,24.4a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L12.8,17H40a2,2,0,0,0,0-4H12.8l4.6-4.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-7.9,8a1.9,1.9,0,0,0,0,2.8Z"/>
      </g>        
    </g>
  </g>
</svg>
</a>


    <a href=''><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
<path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>


</div>
</div>
<div className='inline-block text-left my-3'>
<div className='flex  items-center'>
    <h3 className='my-1  relative group-hover:hidden'>Piqué Biker Jacket</h3>
    <h3 className='hiddenAdd hidden text-lg mb-1  cursor-pointer h-fit group-hover:block'>+ Add To Cart</h3>
    </div>
<div className='flex justify-start items-start gap-1 text-left my-1.5'>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" className='w-4'><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"/></svg>
</div>
<h3 className='text-xl font-semibold'>$67.24</h3>
</div>
</div>

<div className='flex flex-col  items-center text-left relative group'>
<div className="bg-[url('/image/product-2.jpg')] bg-cover text-center bgCenter  relative z-50">
<div className='absolute right-5 flex flex-col gap-2 mt-2.5 '>
    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden transition-transform delayk translate-x-14  group-hover:translate-x-0  group-hover:block'>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>

    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
  <title>swap-horizontal-solid</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="invisible_box" data-name="invisible box">
      <rect width="48" height="48" fill="none"/>
    </g>
    <g id="icons_Q2" data-name="icons Q2">
      <g>
        <path d="M33.5,23.6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L35.2,31H8a2,2,0,0,0,0,4H35.2l-4.6,4.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l7.9-8a1.9,1.9,0,0,0,0-2.8Z"/>
        <path d="M14.5,24.4a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L12.8,17H40a2,2,0,0,0,0-4H12.8l4.6-4.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-7.9,8a1.9,1.9,0,0,0,0,2.8Z"/>
      </g>        
    </g>
  </g>
</svg>
</a>


    <a href=''><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
<path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>


</div>
</div>
<div className='inline-block text-left my-3'>
<div className='flex  items-center'>
    <h3 className='my-1  relative group-hover:hidden'>Piqué Biker Jacket</h3>
    <h3 className='hiddenAdd hidden text-lg mb-1 cursor-pointer h-fit group-hover:block'>+ Add To Cart</h3>
    </div>
    <div className='flex justify-start items-start gap-1 text-left my-1.5'>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000"  viewBox="0 0 24 24" className='w-4'><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" className='w-4'><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"/></svg>
</div>
<h3 className='text-xl font-semibold'>$62.24</h3>
</div>
</div>

<div className='flex flex-col  items-center text-left relative group'>
<div className="bg-[url('/image/product-3.jpg')] bg-cover text-center bgCenter sale relative z-50">
<div className='absolute right-5 flex flex-col gap-2 mt-2.5 '>
    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden transition-transform delay-1000 translate-x-14  group-hover:translate-x-0  group-hover:block'>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>



    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
  <title>swap-horizontal-solid</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="invisible_box" data-name="invisible box">
      <rect width="48" height="48" fill="none"/>
    </g>
    <g id="icons_Q2" data-name="icons Q2">
      <g>
        <path d="M33.5,23.6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L35.2,31H8a2,2,0,0,0,0,4H35.2l-4.6,4.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l7.9-8a1.9,1.9,0,0,0,0-2.8Z"/>
        <path d="M14.5,24.4a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L12.8,17H40a2,2,0,0,0,0-4H12.8l4.6-4.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-7.9,8a1.9,1.9,0,0,0,0,2.8Z"/>
      </g>        
    </g>
  </g>
</svg>
</a>


    <a href=''><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
<path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>


</div>
</div>
<div className='inline-block text-left my-3'>
<div className='flex  items-center'>
    <h3 className='my-1  relative group-hover:hidden'>Piqué Biker Jacket</h3>
    <h3 className='hiddenAdd hidden text-lg mb-1 cursor-pointer h-fit group-hover:block'>+ Add To Cart</h3>
    </div>
    <div className='flex justify-start items-start gap-1 text-left my-1.5'>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
</div>
<h3 className='text-xl font-semibold'>$43.48</h3>
</div>
</div>

<div className='flex flex-col  items-center text-left relative group'>
<div className="bg-[url('/image/product-4.jpg')] bg-cover text-center bgCenter  relative z-50">
<div className='absolute right-5 flex flex-col gap-2 mt-2.5 '>
    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden transition-transform delay-1000 translate-x-14  group-hover:translate-x-0  group-hover:block'>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>



    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
  <title>swap-horizontal-solid</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="invisible_box" data-name="invisible box">
      <rect width="48" height="48" fill="none"/>
    </g>
    <g id="icons_Q2" data-name="icons Q2">
      <g>
        <path d="M33.5,23.6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L35.2,31H8a2,2,0,0,0,0,4H35.2l-4.6,4.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l7.9-8a1.9,1.9,0,0,0,0-2.8Z"/>
        <path d="M14.5,24.4a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L12.8,17H40a2,2,0,0,0,0-4H12.8l4.6-4.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-7.9,8a1.9,1.9,0,0,0,0,2.8Z"/>
      </g>        
    </g>
  </g>
</svg>
</a>


    <a href=''><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
<path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>


</div>
</div>
<div className='inline-block text-left my-3'>
<div className='flex  items-center'>
    <h3 className='my-1  relative group-hover:hidden'>Piqué Biker Jacket</h3>
    <h3 className='hiddenAdd hidden text-lg mb-1 cursor-pointer h-fit group-hover:block'>+ Add To Cart</h3>
    </div>
    <div className='flex justify-start items-start gap-1 text-left my-1.5'>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000"  viewBox="0 0 24 24" className='w-4'><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000"  viewBox="0 0 24 24" className='w-4'><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" className='w-4'><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"/></svg>
</div>
<h3 className='text-xl font-semibold'>$60.9</h3>
</div>
</div>

<div className='flex flex-col  items-center text-left relative group'>
<div className="bg-[url('/image/product-5.jpg')] bg-cover text-center bgCenter  relative z-50">
<div className='absolute right-5 flex flex-col gap-2 mt-2.5 '>
    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden transition-transform delay-1000 translate-x-14  group-hover:translate-x-0  group-hover:block'>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>



    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
  <title>swap-horizontal-solid</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="invisible_box" data-name="invisible box">
      <rect width="48" height="48" fill="none"/>
    </g>
    <g id="icons_Q2" data-name="icons Q2">
      <g>
        <path d="M33.5,23.6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L35.2,31H8a2,2,0,0,0,0,4H35.2l-4.6,4.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l7.9-8a1.9,1.9,0,0,0,0-2.8Z"/>
        <path d="M14.5,24.4a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L12.8,17H40a2,2,0,0,0,0-4H12.8l4.6-4.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-7.9,8a1.9,1.9,0,0,0,0,2.8Z"/>
      </g>        
    </g>
  </g>
</svg>
</a>


    <a href=''><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
<path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>


</div>
</div>
<div className='inline-block text-left my-3'>
<div className='flex  items-center'>
    <h3 className='my-1  relative group-hover:hidden'>Piqué Biker Jacket</h3>
    <h3 className='hiddenAdd hidden text-lg mb-1 cursor-pointer h-fit group-hover:block'>+ Add To Cart</h3>
    </div>
    <div className='flex justify-start items-start gap-1 text-left my-1.5'>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000"  viewBox="0 0 24 24" className='w-4'><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" className='w-4'><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"/></svg>
</div>
<h3 className='text-xl font-semibold'>$31.37</h3>
</div>
</div>

<div className='flex flex-col  items-center text-left relative group'>
<div className="bg-[url('/image/product-6.jpg')] bg-cover text-center bgCenter sale relative z-50">
<div className='absolute right-5 flex flex-col gap-2 mt-2.5 '>
    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden transition-transform delay-1000 translate-x-14  group-hover:translate-x-0  group-hover:block'>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>



    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
  <title>swap-horizontal-solid</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="invisible_box" data-name="invisible box">
      <rect width="48" height="48" fill="none"/>
    </g>
    <g id="icons_Q2" data-name="icons Q2">
      <g>
        <path d="M33.5,23.6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L35.2,31H8a2,2,0,0,0,0,4H35.2l-4.6,4.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l7.9-8a1.9,1.9,0,0,0,0-2.8Z"/>
        <path d="M14.5,24.4a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L12.8,17H40a2,2,0,0,0,0-4H12.8l4.6-4.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-7.9,8a1.9,1.9,0,0,0,0,2.8Z"/>
      </g>        
    </g>
  </g>
</svg>
</a>


    <a href=''><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
<path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>


</div>
</div>
<div className='inline-block text-left my-3'>
<div className='flex  items-center'>
    <h3 className='my-1  relative group-hover:hidden'>Piqué Biker Jacket</h3>
    <h3 className='hiddenAdd hidden text-lg mb-1 cursor-pointer h-fit group-hover:block'>+ Add To Cart</h3>
    </div>
    <div className='flex justify-start items-start gap-1 text-left my-1.5'>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000"  viewBox="0 0 24 24" className='w-4'><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000"  viewBox="0 0 24 24" className='w-4'><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" className='w-4'><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"/></svg>
</div>
<h3 className='text-xl font-semibold'>$28.49</h3>{/*    Sale     */}
</div>
</div>

<div className='flex flex-col  items-center text-left relative group'>
<div className="bg-[url('/image/product-7.jpg')] bg-cover text-center bgCenter  relative z-50">
<div className='absolute right-5 flex flex-col gap-2 mt-2.5 '>
    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden transition-transform delay-1000 translate-x-14  group-hover:translate-x-0  group-hover:block'>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>



    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
  <title>swap-horizontal-solid</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="invisible_box" data-name="invisible box">
      <rect width="48" height="48" fill="none"/>
    </g>
    <g id="icons_Q2" data-name="icons Q2">
      <g>
        <path d="M33.5,23.6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L35.2,31H8a2,2,0,0,0,0,4H35.2l-4.6,4.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l7.9-8a1.9,1.9,0,0,0,0-2.8Z"/>
        <path d="M14.5,24.4a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L12.8,17H40a2,2,0,0,0,0-4H12.8l4.6-4.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-7.9,8a1.9,1.9,0,0,0,0,2.8Z"/>
      </g>        
    </g>
  </g>
</svg>
</a>


    <a href=''><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
<path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>


</div>
</div>
<div className='inline-block text-left my-3'>
<div className='flex  items-center'>
    <h3 className='my-1  relative group-hover:hidden'>Piqué Biker Jacket</h3>
    <h3 className='hiddenAdd hidden text-lg mb-1 cursor-pointer h-fit group-hover:block'>+ Add To Cart</h3>
    </div>
    <div className='flex justify-start items-start gap-1 text-left my-1.5'>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" className='w-4'><path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z"/></svg>
</div>
<h3 className='text-xl font-semibold'>$49.66</h3>
</div>
</div>

<div className='flex flex-col  items-center text-left relative group'>
<div className="bg-[url('/image/product-8.jpg')] bg-cover text-center bgCenter  relative z-50">
<div className='absolute right-5 flex flex-col gap-2 mt-2.5 '>
    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden transition-transform delay-1000 translate-x-14  group-hover:translate-x-0  group-hover:block'>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>



    <a href=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
  <title>swap-horizontal-solid</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="invisible_box" data-name="invisible box">
      <rect width="48" height="48" fill="none"/>
    </g>
    <g id="icons_Q2" data-name="icons Q2">
      <g>
        <path d="M33.5,23.6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L35.2,31H8a2,2,0,0,0,0,4H35.2l-4.6,4.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l7.9-8a1.9,1.9,0,0,0,0-2.8Z"/>
        <path d="M14.5,24.4a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L12.8,17H40a2,2,0,0,0,0-4H12.8l4.6-4.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-7.9,8a1.9,1.9,0,0,0,0,2.8Z"/>
      </g>        
    </g>
  </g>
</svg>
</a>


    <a href=''><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className='w-8 py-1 px-1 rounded bg-white hidden group-hover:block'>
<path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>


</div>
</div>
<div className='inline-block text-left my-3'>
<div className='flex  items-center'>
    <h3 className='my-1  relative group-hover:hidden'>Piqué Biker Jacket</h3>
    <h3 className='hiddenAdd hidden text-lg mb-1 cursor-pointer h-fit group-hover:block'>+ Add To Cart</h3>
    </div>
    <div className='flex justify-start items-start gap-1 text-left my-1.5'>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#FFD700' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
</div>
<h3 className='text-xl font-semibold'>$26.28</h3>
</div>
</div>

 {/* ------------------------- if you want add more ----------------- */}
</div>

         






    
    </div>
  )
}

export default Sellers