import React from 'react'
import "./slider.scss"

function Slider({images}){
  return (
    <div className='slider'>
        <div className="bigImage">
            {/* we will get the first image from images array */}
            <img src={images[0]} alt='' />
        </div>
        {/* Creating second div for small images */}
        <div className="smallImages">
            {images.slice(1).map((image,index) => (
                 <img src={image} alt='' key={index}/>
            ))}
        </div>
    </div>
  );
}

export default Slider