import React from 'react';
import './BannerItem.css'
const BannerItem = ({slide}) => {
    const {Image,id,prev,next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousol-img'>
        <img src={Image} alt="" className="w-full rounded-lg" />
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-24  top-1/4 ">
          <h1 className='text-6xl font-bold text-white '>
            Affordable <br />
            Price For Car <br />
            Servicing
          </h1>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-24 w-1/2  top-2/4 ">
         <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        <div className="absolute flex justify-start  transform -translate-y-1/2 left-24 w-1/2  top-2/3 ">
        <button className="btn btn-error mr-5 text-white">Discover More</button>
        <button className="btn btn-outline btn-error text-white">Latest Project</button>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle bg-orange-500">❯</a>
        </div>
      </div> 
    );
};

export default BannerItem;