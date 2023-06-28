import * as React from "react";
import { useEffect, useState} from 'react';import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination ,Navigation } from "swiper";
import left from '../../images/left.png';
import right from '../../images/right.png';
import $ from "jquery";
const PhotoSlider = (props: any) => {
  //SwiperCore.use([Navigation, Pagination, EffectCoverflow,Autoplay]);
 //SwiperCore.use([Autoplay]);
  const { photoGallery } = props;  
 //console.log(photoGallery);
 
  const photos = photoGallery.map((element:any,index) => (  
      
	<SwiperSlide>
    <div className="why-slider"><img className='h-[360px] w-[360px] object-cover' src={element.image.url} alt=""/></div>
    <div className="sli-con text-center mt-[22px]"><a href={element.clickthroughUrl}><p>{element.description}</p></a>
    <p>{element.details}</p></div>
	 </SwiperSlide>
    
  ));
  return (
    <>
   
     <Swiper
      effect={"coverflow"}
      //grabCursor={true}
      centeredSlides={true}
      slidesPerView={5}
      navigation={true}
      
     // observer = {true} 
    //   autoplay={{
    //     delay: 500,
    //     disableOnInteraction: false
    // }}
      //observerParents={true}
      coverflowEffect={{
        rotate: 10,
        stretch: -25,
        depth: 100,
        modifier: 0.5,
        
        slideShadows: false,
      }}
      //spaceBetween= {100}
      freeMode= {true}
      loop={true}
      //loopAdditionalSlides= {5} // slidesNum contains the initial slides number
loopedSlides= {2}
      //pagination={true}
      modules={[EffectCoverflow, Navigation]}
      className="mySwiper"
    >
     {photos}
     {/* <div class="swiper-arrows">
       <div className="swiper-button-next">Next</div>
 <div className="swiper-button-prev">Pre</div> 
 </div> */}
 
    </Swiper>

    
    </>
  );
};

export default PhotoSlider;


