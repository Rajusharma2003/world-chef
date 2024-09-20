/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import CarouselFadeExample from '../Carousel/Carousel';
import { FaCheckCircle,} from 'react-icons/fa';

import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

// import image here.
import aboutImg from '../../Image/wAboutImg.png';
import ProductImg from '../../Image/wProductImg.jpg';
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
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
      icon: "https://img.icons8.com/?size=48&id=Q55YnBnHzD9c&format=png",
      title: 'Compact size',
      description: 'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.',
    },
    {
      icon: "https://img.icons8.com/?size=60&id=6yomF9LAoWai&format=png",
      title: 'temperature control',
      description: 'Nulla Lorem mollit cupidatat irure. Laborum magna',
    },
    {
      icon: "https://img.icons8.com/?size=48&id=16593&format=png",
      title: 'Sturdy & Durable',
      description: 'Laborum magna nulla duis ullamco cillum dolor',
    },
    {
      icon: "https://img.icons8.com/?size=48&id=C3HstE5t1Rgw&format=png",
      title: 'Automatic shutoff',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor',
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
  <div className="mt-10 flex-1 flex flex-col items-center lg:items-start space-y-3" data-aos="fade-right">
    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center lg:text-left">Keep Cooking Smarter</h1>
    <p className=" text-2xl lg:text-3xl text-gray-700 text-center lg:text-left">
      Efficient, user-friendly, and designed for precision cooking. Offers advanced heat control and seamless operation for hassle-free meal preparation.
    </p>
    <div className="grid grid-cols-2 gap-2 text-lg lg:grid-cols-2">
      <div className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        <span>Air Frying</span>
      </div>
      <div className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        <span>Baking</span>
      </div>
      <div className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        <span>Yogurt</span>
      </div>
      <div className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        <span>Fruit Drying</span>
      </div>
    </div>
  </div>

  {/* Second (Middle) Section */}
  <div className="flex-1 flex items-center justify-center mt-6 lg:mt-0">
    <img src={aboutImg} alt="Cooking Image" className="max-w-[90%] lg:max-w-[700px] h-auto" data-aos="flip-right" />
  </div>

  {/* Third Section */}
  <div className="flex-1 flex flex-col items-center lg:items-start space-y-4 mt-6 lg:mt-0" data-aos="fade-left">
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


  {/* this is first card section */}
  <div className="text-center py-10">
      <h1 className="text-5xl font-bold mb-4">Complete your kitchen with World Chef</h1>
      <h2 className="text-3xl font-semibold mb-8 text-red-500">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden mt-6 ml-4 mr-4" data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}>
            <img src={product.imgSrc} alt={product.title} className="w-full h-64 object-contain" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              {/* <p className="text-xl font-bold">{product.price}</p> */}
              <button className='bg-black text-white p-2 rounded-lg'><a href=""></a>Enquire Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>


{/* Benefit Section */}
<section className="w-full box-border py-10 bg-gray-100">
  <div className="container mx-auto px-4" data-aos="fade-up" data-aos-duration="1000">
    {/* Inner Section with Headline */}
    <div className="mb-8">
      <h2 className="text-4xl font-bold text-center">
        Product <span className="text-red-500">Benefits</span>
      </h2>
    </div>

    {/* Carousel Section */}
    <div className="mt-8 flex flex-wrap justify-center gap-6">
      {/* Carousel Item 1 */}
      <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-[390px] bg-white rounded-lg p-4">
        <img
          src={ProductImg}
          alt="Homemade Meals Made Easy"
          className="w-full h-52 object-cover rounded-md"
        />
        <div className="mt-4 text-center">
          <h3 className="font-semibold text-xl">Easy to Clean</h3>
          <p className="mt-2 text-gray-600">
            Juicy Chicken patty grilled to perfection served with peri peri sauce, creamy mayo, and a hint of spice.
          </p>
        </div>
      </div>

      {/* Carousel Item 2 */}
      <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-[390px] bg-white rounded-lg p-4">
        <img
          src={ProductImg}
          alt="Safe to Use"
          className="w-full h-52 object-cover rounded-md"
        />
        <div className="mt-4 text-center">
          <h3 className="font-semibold text-xl">Safe to Use</h3>
          <p className="mt-2 text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
      </div>

      {/* Carousel Item 3 */}
      <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-[390px] bg-white rounded-lg p-4">
        <img
          src={ProductImg}
          alt="Unlimited Recipes"
          className="w-full h-52 object-cover rounded-md"
        />
        <div className="mt-4 text-center">
          <h3 className="font-semibold text-xl">Unlimited Recipes</h3>
          <p className="mt-2 text-gray-600">
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
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
      <div className="w-full md:w-1/2" data-aos="fade-left">
        <h1 className="text-3xl font-bold mb-4">Efficient, quick and delicious</h1>
        <p className="text-gray-600">
        Experience the power of modern cooking with our advanced infrared cooktop. Designed for efficiency and speed, it delivers precise heat control for a seamless cooking experience, while ensuring energy savings.
        Enjoy faster cooking times and even heat distribution, perfect for preparing your favorite meals with ease.
        </p>
      </div>
    </section>


    {/* This is the card section */}
    <section className="py-8">
          <h1 className='text-4xl text-center mb-14' data-aos="fade-up" data-aos-duration="1000"> Designed for Better Cooking Experience </h1>
        <div className="flex flex-wrap justify-evenly">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-center  w-full md:w-1/6 p-4 shadow-lg rounded-md" data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}> 
              <img className="text-3xl mb-2" src={card.icon} alt="icon" />
              <h2 className="text-lg font-bold mb-2">{card.title}</h2>
              <p className="text-center text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

    <Footer/>

    </>
  )
}

export default HomePage