/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import CarouselFadeExample from '../Carousel/Carousel';
import { FaCheckCircle,} from 'react-icons/fa';

import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

// import image here.
import aboutImg from '../../Image/wAboutImg.png';
import wProductImg from '../../Image/wProductImage.png';
import Footer from './Footer';

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  // This is second card section.
  const cards = [
    {
      icon: "https://img.icons8.com/?size=48&id=LkbvWTyTMRyj&format=png",
      title: 'Up to 45% faster',
      description: 'Experience enhanced performance with up to 45% faster speeds, allowing you to accomplish tasks quicker and more efficiently.',
    },
    {
      icon: "https://img.icons8.com/?size=48&id=Q55YnBnHzD9c&format=png",
      title: 'Compact size',
      description: 'Combining efficiency with convenience, this compact design ensures it can be placed anywhere, from tight workspaces to on-the-go environments.',
    },
    {
      icon: "https://img.icons8.com/?size=60&id=6yomF9LAoWai&format=png",
      title: 'temperature control',
      description: 'Maintain the ideal environment with advanced temperature control technology.',
    },
    {
      icon: "https://img.icons8.com/?size=48&id=16593&format=png",
      title: 'Sturdy & Durable',
      description: 'Tough enough to handle the rigors of daily use without compromising performance.',
    },
    {
      icon: "https://img.icons8.com/?size=48&id=C3HstE5t1Rgw&format=png",
      title: 'Automatic shutoff',
      description: 'Prevents unnecessary power consumption with automatic shutoff functionality.',
    },
  ];

  // This is the first card section.
  const products = [
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W',
      price: '999',
    },
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W',
      price: '999',
    },
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W',
      price: '999',
    },
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W',
      price: '999',
    },
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W',
      price: '999',
    },
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W',
      price: '999',
    },
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W',
      price: '999',
    },
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W',
      price: '999',
    },
  ];

  return (

<>

{/*this is the carousle section. */}
<CarouselFadeExample/>


{/* This is about section */}
<section className="flex flex-col lg:flex-row items-center bg-gray-100 p-4">
  {/* First Part */}
  <div className="mt-10 flex-1 flex flex-col items-center lg:items-start space-y-3">
    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center lg:text-left">Keep Cooking Smarter</h1>
    <p className="text-2xl lg:text-3xl text-gray-700 text-center lg:text-left">
      Efficient, user-friendly, and designed for precision cooking. Offers advanced heat control and seamless operation for hassle-free meal preparation.
    </p>
    <div className="grid grid-cols-2 gap-2 text-lg lg:grid-cols-2">
      <div className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        <span>Fast Heating</span>
      </div>
      <div className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        <span>Durable</span>
      </div>
      <div className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        <span>Light Weight</span>
      </div>
      <div className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        <span>Easy to Clean</span>
      </div>
    </div>
  </div>

  {/* Second (Middle) Section */}
  <div className="flex-1 flex items-center justify-center mt-6 lg:mt-0">
    <img src={aboutImg} alt="Cooking Image" className="max-w-[80%] lg:max-w-[700px] h-auto" data-aos="flip-right" />
  </div>

  {/* Third Section */}
  <div className="flex-1 flex flex-col items-center lg:items-start space-y-4 mt-6 lg:mt-0">
    <div className="flex items-center text-gray-900">
      <span className="text-4xl lg:text-5xl font-bold">6.5</span>
      <span className="text-lg ml-2">L</span>
    </div>
    <p className="text-2xl lg:text-lg text-gray-700 text-center lg:text-left">Spacious design for larger meals</p>
    <div className="flex items-center text-gray-900">
      <span className="text-4xl lg:text-5xl font-bold">360</span>
      <span className="text-lg ml-2">°</span>
    </div>
    <p className="text-2xl lg:text-lg text-gray-700 text-center lg:text-left">Infrared heat circulation for even cooking</p>
    <div className="flex items-center text-gray-900">
      <span className="text-4xl lg:text-5xl font-bold">24</span>
      <span className="text-lg ml-2">H</span>
    </div>
    <p className="text-2xl lg:text-lg text-gray-700 text-center lg:text-left">Pre-scheduling for hassle-free cooking</p>
  </div>
</section>


{/* this is first product card section */}
<div className="text-center py-10">
    <h1 className="text-5xl font-bold mb-4" data-aos="zoom-in">Complete your kitchen with World Chef</h1>
    <h2 className="text-3xl font-semibold mb-8 text-red-500" data-aos="zoom-in">Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden mt-6 ml-4 mr-4" data-aos="zoom-in" data-aos-delay={`${100 * (index + 1)}`}>
          <img src={product.imgSrc} alt={product.title} className="w-full h-64 object-contain hover:scale-110 transition-transform duration-300 ease-in-out" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <button className='bg-black text-white p-2 rounded-lg'><a href=""></a>Enquire Now</button>
          </div>
        </div>
      ))}
    </div>
  </div>


{/* Benefit Section */}
<section className="w-full box-border py-10 bg-gray-100">
  <div className="container mx-auto px-4">
    {/* Inner Section with Headline */}
    <div className="mb-8" data-aos="zoom-in">
      <h2 className="text-4xl font-bold text-center">
        Product <span className="text-red-500">Benefits</span>
      </h2>
    </div>

    {/* Carousel Section */}
    <div className="mt-8 flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-duration="1000">
      {/* Carousel Item 1 */}
      <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-[390px] bg-white rounded-lg p-4">
        <img
          src="https://img.freepik.com/premium-photo/person-presses-button-stove-top-with-kitchen-utensils-ingredients-nearby_153912-320641.jpg?uid=R163215126&ga=GA1.2.332943406.1726205077&semt=ais_hybrid"
          alt="Homemade Meals Made Easy"
          className="w-full h-52 object-bottom rounded-md"
        />
        <div className="mt-4 text-center">
          <h3 className="font-semibold text-xl">Easy to Clean</h3>
          <p className="mt-2 text-gray-600">
          Our products are crafted for hassle-free maintenance, featuring smooth surfaces that simplify cleaning. Spend less time scrubbing and more time enjoying a fresh, tidy space!
          </p>
        </div>
      </div>

      {/* Carousel Item 2 */}
      <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-[390px] bg-white rounded-lg p-4">
        <img
          src="https://img.freepik.com/premium-photo/woman-turns-electric-induction-cooker-touch-black-electric-panel-switching-burner-cooktop_299057-1143.jpg?uid=R163215126&ga=GA1.2.332943406.1726205077&semt=ais_hybrid"
          alt="Safe to Use"
          className="w-full h-52 object-cover rounded-md"
        />
        <div className="mt-4 text-center">
          <h3 className="font-semibold text-xl">Safe to Use</h3>
          <p className="mt-2 text-gray-600">
          Our products prioritize your safety, utilizing non-toxic materials and sturdy designs. Enjoy peace of mind knowing that you can use them confidently in any setting!
          </p>
        </div>
      </div>

      {/* Carousel Item 3 */}
      <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/ lg:w-[390px] bg-white rounded-lg p-4">
        <img
          src="https://img.freepik.com/premium-photo/indian-people-enjoying-traditional-indian-foods-fruits-curry-snacks-desserts_978786-48664.jpg?uid=R163215126&ga=GA1.2.332943406.1726205077&semt=ais_hybrid"
          alt="Unlimited Recipes"
          className="w-full h-52 object-cover rounded-md"
        />
        <div className="mt-4 text-center">
          <h3 className="font-semibold text-xl">Unlimited Recipes</h3>
          <p className="mt-2 text-gray-600">
          Unlock a world of culinary possibilities with our diverse collection of recipes. Whether you’re a beginner or an experienced cook, explore endless meal ideas that inspire creativity and flavor in every dish!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/*  quick and delicious section */}
<section className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-8" >
  {/* Image Section */} 
  <div className="w-full md:w-1/2" data-aos="zoom-in">
    <img
      src={aboutImg}
      alt="Delicious food"
      className="w-full h-auto object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2" data-aos="fade-up" data-aos-delay="200" >
    <h1 className="text-3xl font-bold mb-4">Efficient, quick and delicious</h1>
    <p className="text-gray-600 text-lg">
    Experience the power of modern cooking with our advanced infrared cooktop. Designed for efficiency and speed, it delivers precise heat control for a seamless cooking experience, while ensuring energy savings.
    Enjoy faster cooking times and even heat distribution, perfect for preparing your favorite meals with ease.
    </p>
  </div>
</section>


{/* This is the  Cooking Experiencecard section */}
<section className="py-8">
  <h1 className='text-3xl font-semibold md:text-4xl text-center mb-8 md:mb-14' data-aos="zoom-in" data-aos-duration="1000">
    Designed for Better Cooking Experience
  </h1>
  <div className="flex flex-wrap justify-center md:justify-evenly">
    {cards.map((card, index) => (
      <div 
        key={index} 
        className="flex flex-col items-center w-full sm:w-1/2 md:w-1/2 md:mt-2 lg:w-1/5 p-4 shadow-md rounded-md" 
        data-aos="fade-up" 
        data-aos-delay={`${100 * (index + 1)}`}
      >
        <img className="w-16 h-16 mb-4" src={card.icon} alt="icon" />
        <h2 className="text-base md:text-lg font-bold mb-2">{card.title}</h2>
        <p className="text-center text-gray-600 text-sm md:text-base">{card.description}</p>
        {/* <p>this is the main content </p> */}
      </div>
    ))}
  </div>
</section>


 {/* contact us last section */}
 <div className='mt-10 mb-10' data-aos="fade-up" data-aos-delay="200">
      <div className=" bg-yellow-500 w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between p-6 shadow-lg rounded-lg">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold mb-2">
            Get Your Quote or Call: <a href="tel:800-622-3990" className="text-[#21029E]">800-622-3990 (Toll Free)</a>
          </p>
          <p className="text-lg font-semibold">
            Please contact us by calling or filling out the form on the contact us page.
          </p>
        </div>
        <a 
          href="tel:800-622-3990" 
          className="bg-[#21029E] text-white px-4 py-2 rounded hover:bg-blue-900 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>

{/* This is footer section */}
    <Footer/>

    </>
  )
}

export default HomePage