/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { FaCheck } from 'react-icons/fa';
// import image.
import wProductImg from '../../Image/wProductImage.png';
// import footer here.
import Footer from './Footer';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS


const ProductsPage = () => {

  // This is the product data.
  const productData = [
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W'
    },
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W'
    },
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W'
    },
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W'
    },
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W'
    },
    {
      imgSrc: wProductImg,
      title: 'INFRARED COOKTOP',
      description: 'Spalin ChefInfra Infrared Cooktop Matte Finish 2000W'
    },
    
  ];

  const specs = [
    { title: 'Product Name', value: 'Infrared Cooktop' },
    { title: 'Product Code', value: '116116' },
    { title: 'Input Power Supply', value: 'Single Phase 230 V AC, 50 Hz' },
    { title: 'Total Power Consumption', value: '2000 W' },
    { title: 'Net Weight', value: '2.44 kg' },
    { title: 'Product Dimension (mm)', value: '425 (L) x 300 (W) x 63 (H)' },
  ];


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


    useEffect(() => {
      AOS.init();
    }, []);
  


  return (
    <>
    
    {/* This is the product section */}
    <div className="py-8 px-4 mt-10" id="products" >
        <h1 className="animate__animated text-5xl font-bold text-center mb-8">Products</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
            {productData.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6 space-y-4 w-full"
              >
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-t-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                <h1 className="text-xl font-semibold">{product.title}</h1>
                <p className="text-gray-700">{product.description}</p>
                <a
                  href="https://wa.me/+918130405294" // Replace with your WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                >
                  <span>Enquiry Now</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

    {/* Specifications Section */}
    <div className="p-8 md:p-16 lg:p-32 text-white shadow-sm mt-10">
        <h1 className="text-5xl md:text-5xl font-bold text-center mt-10 mb-14 text-black" data-aos="zoom-in" data-aos-duration="1000">Specifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="flex items-center p-4 rounded-md bg-gray-900 border-b-4 border-gray-700"
            >
              <div className="flex-1 flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{spec.title}</h2>
                  <p className="text-gray-300 text-sm md:text-base">{spec.value}</p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <FaCheck className="text-green-400 text-lg md:text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
          </div>
        ))}
      </div>
    </section>


    <div className='mt-10'>
      <Footer/>
    </div>


    </>
  )
}

export default ProductsPage