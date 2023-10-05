import React from "react";



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










































