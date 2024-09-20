/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

import wBanner1 from '../../Image/wBannerImg.jpg';


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
            className="d-block w-full h-full object-cover"
            src={wBanner1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item className="relative">
          <img
            className="d-block w-full h-full object-cover"
            src={wBanner1}
            alt="Second slide"
          />
         
        </Carousel.Item>

        <Carousel.Item className="relative">
          <img
            className="d-block w-full h-full object-cover"
            src={wBanner1}
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
