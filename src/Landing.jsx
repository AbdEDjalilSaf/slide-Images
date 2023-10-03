import React from "react";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



export default function Landing({images}){




return (
<>
{/* <div className="url">*/}
<Carousel>
{images.map((image,index)=>(
<div key={index}>
<img src={image} />


</div>

))}








</Carousel>













{/* // </div> */}
</>
)
}










































