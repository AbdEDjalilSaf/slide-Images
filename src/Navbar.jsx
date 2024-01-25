import React from "react"
import './App.css'

export default function Navbar(){

return (
<>
<div className=" flex items-center justify-between px-7 md:px-0 md:justify-around py-6 bg-white xl:justify-evenly">
<a href=""><img src="/image/logo.png" className="w-40 lg:w-48"/></a>

<ul className=" gap-5 hidden md:flex lg:gap-9">
<li><a href="#" className=" active wit text-lg  relative pb-1 ">Home</a></li>
<li><a href="HShop" className="wit relative pb-1 text-lg">Shop</a></li>
<li><a href="#Pages" className="wit relative pb-1 text-lg">Pages</a></li>
<li><a href="#Blog" className="wit relative pb-1 text-lg">Blog</a></li>
<li><a href="#Contacts" className="wit relative pb-1 text-lg">Contacts</a></li>
</ul>


<div className=" gap-3 hidden md:flex items-center">
<LazyLoadImage src="/image/search.png" className="lg:h-4"/>
<LazyLoadImage src="/image/heart.png" className="lg:h-4"/>
<LazyLoadImage src="/image/cart.png" className="lg:h-4"/>
<span className="w-4 text-black hidden lg:block">$0.00</span>
</div>


<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" className="w-9 bordeo cursor-pointer md:hidden">
<path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        
</div>
</>
)
}
































