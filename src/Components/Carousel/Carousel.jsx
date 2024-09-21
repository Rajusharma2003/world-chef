/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

// import image
import banner1 from '../../Image/wmBanner1.jpg'
import banner2 from '../../Image/wmBanner2.jpg'
import banner3 from '../../Image/wmBanner3.jpg'



function CarouselFadeExample() {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative ">
      <Carousel fade className="relative  overflow-hidden">
        <Carousel.Item className="relative">
          <img
            src={banner1}
            className="d-block w-full h-full object-cover"
            alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item className="relative">
          <img
            className="d-block w-full h-full object-cover"
            src={banner2}
            alt="Second slide"
          />
         
        </Carousel.Item>

        <Carousel.Item className="relative">
          <img
            className="d-block w-full h-full object-cover"
            src={banner3}
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
