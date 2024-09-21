/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React from 'react'
// import image here.
import wProductImg from '../../Image/wProductImage.png';
import aboutImg from '../../Image/infoImg.jpg';

import Footer from './Footer';


const AboutPage = () => {
  
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

  const data = [
    {
      imgSrc: "https://cooky-theme.myshopify.com/cdn/shop/files/icon1_200x200.png?v=1634793132",
      title: "No Chemical",
      description: "It is easy to clean with simple methods like wiping with a damp cloth. This reduces the need for chemical cleaners that may contain harsh ingredients, further minimizing chemical usage in the kitchen.",
    },
    {
      imgSrc: "https://cooky-theme.myshopify.com/cdn/shop/files/icon2_200x200.png?v=1634793143",
      title: "Earth Friendly",
      description:"Induction cooking does not emit pollutants or harmful gases during operation, contributing to better indoor air quality and a healthier home environment.",
    },
    {
      imgSrc: "https://cooky-theme.myshopify.com/cdn/shop/files/icon3_200x200.png?v=1634793151",
      title: "Recyclable Product",
      description:"These are durable and designed to last for many years with proper care. Their longevity reduces frequency of disposal and replacement compared to traditional stoves, which decreases overall waste generation.",
    },
    {
      imgSrc: "https://cooky-theme.myshopify.com/cdn/shop/files/icon4_200x200.png?v=1634793159",
      title: "Sturdy & Durable",
      description:"The durable materials used in induction cooktops also contribute to easier maintenance. They are resistant to stains, corrosion, and chemical damage, requiring minimal effort to keep clean and in good condition.",
    },
  ];

  return (
    <>
    

    {/* about description */}
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">Overview</h1>
      <div className="space-y-8">
        <p  className="text-lg font-semibold  tracking-wide text-gray-800 bg-gradient-to-r from-blue-100 via-gray-100 to-blue-100 p-6 rounded-xl">
          K-Starr is a prominent name in the industry, renowned for its dedication to delivering innovative and high-quality products. Established with a vision to revolutionize the market, K-Starr has quickly risen to become a leader in its field. The company, headquartered in a state-of-the-art facility, has built a reputation for excellence through its commitment to cutting-edge technology and customer satisfaction.
        </p>
        <p className="text-lg font-semibold tracking-wide text-gray-800 bg-gradient-to-r from-blue-100 via-gray-100 to-blue-100 p-6 rounded-xl">
          Since its inception, K-Starr has achieved significant milestones. The company's commitment to quality and innovation is exemplified by its state-of-the-art manufacturing processes and its rigorous quality control measures. K-Starr's products are designed to meet the highest standards, ensuring that customers receive reliable and effective solutions. The company’s dedication to research and development has led to numerous patents and industry awards.
        </p>
        <p className="text-lg font-semibold tracking-wide text-gray-800 bg-gradient-to-r from-blue-100 via-gray-100 to-blue-100 p-6 rounded-xl">
          Over the years, K-Starr has expanded its product portfolio to include a diverse range of offerings, catering to various needs and preferences. From advanced electronics to cutting-edge home appliances, K-Starr's products are synonymous with durability and performance. The company’s expansion into new markets and continuous improvement in its product lines reflect its ongoing commitment to excellence.
        </p>
        <p  className="text-lg font-semibold tracking-wide text-gray-800 bg-gradient-to-r from-blue-100 via-gray-100 to-blue-100 p-6 rounded-xl">
          Looking ahead, K-Starr is poised for continued growth and innovation. With a focus on sustainability and customer-centric solutions, the company aims to set new benchmarks in the industry. K-Starr's mission is to enhance the quality of life for its customers by delivering products that combine technological advancements with exceptional usability.
        </p>
      </div>
    </div>
    
   {/* About Details Section */}
   <div className="flex flex-col items-center justify-center px-4 md:px-12 py-8 md:flex-row sm:flex-col mx-auto lg:mt-10" >
        {/* Image on the left */}
        <div className="w-full md:w-1/2">
          <img 
            src={aboutImg}
            alt="About Spalin Appliances" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Text on the right */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4 text-3xl">
            <span className='text-red-600'>// K-Starr Appliances Inc.</span>is a premier provider of high-performance home appliances, engineered to enhance the comfort, convenience, and efficiency of modern living environments.
          </p>
          <p className="text-gray-700 text-xl">
          Welcome to K-Starr, a trailblazer in creating innovative appliances designed to transform your culinary experience. With an unwavering dedication to quality and precision, we focus on manufacturing and distributing a wide array of kitchen essentials, including induction cooktops, pressure cookers, and electric kettles. At K-Starr, we understand the essential role that kitchen appliances play in everyday life. Our products are thoughtfully crafted to integrate advanced technology with sleek designs, ensuring they not only meet but surpass the expectations of modern households. Whether you're an experienced cook or just starting out, our appliances are designed to streamline your cooking process while optimizing both efficiency and safety.
          </p>
        </div>
      </div>


  {/* This is the product section */}
  <div className="py-8 px-4 mt-10" >
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


 {/* This details section */}
 <div className="w-full p-4 h-full bg-[#F5EDE7]">
      <h1 className="text-center text-4xl font-bold mb-8 mt-10" >
        Designed for Better Cooking <br /> Experience
      </h1>
      <div className="flex flex-wrap sm:flex-wrap lg:flex-nowrap justify-center items-center ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 text-center max-w-xs"
          >
            <img src={item.imgSrc} alt={item.title} className="w-32 h-32 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>


  <div className='mt-10'>
    <Footer/>
  </div>
    
    </>
  )
}

export default AboutPage